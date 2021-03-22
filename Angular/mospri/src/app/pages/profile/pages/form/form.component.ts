import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { StepperService } from './components/stepper/services';
import { Subject, Observable, zip } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromDictionaries from '@app/store/dictionaries';

@Component({
  selector: 'mospri-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit, OnDestroy {
  dictionaries$: Observable<fromDictionaries.Dictionaries>;
  dictionariesIsReady$: Observable<boolean>;

  private destroy = new Subject<any>();

  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    private store: Store<fromRoot.State>,
    public stepper: StepperService // private mapper: MapperService
  ) {}

  ngOnInit(): void {
    this.dictionaries$ = this.store.pipe(
      select(fromDictionaries.getDictionaries)
    );
    this.dictionariesIsReady$ = this.store.pipe(select(fromDictionaries.getIsReady));

    this.stepper.init([
      { key: 'personal', label: 'Personal' },
      { key: 'professional', label: 'Professional' },
    ]);

    this.stepper.complete$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log('completed!');
    });
    this.stepper.cancel$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log('canceled!');
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
    // this.store.dispatch(new fromForm.Clear());
  }
}
