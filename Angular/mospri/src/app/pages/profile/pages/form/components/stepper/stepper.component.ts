import { Component, OnInit } from '@angular/core';
import { ActiveStep, Step, StepperService } from './services';

@Component({
  selector: 'mospri-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  constructor(private stepper: StepperService) {}

  ngOnInit(): void {}

  get steps(): Step[] {
    return this.stepper.steps;
  }

  get activeStep(): ActiveStep {
    return this.stepper.activeStep;
  }

  isActive(index: number): boolean {
    return index === this.activeStep.index;
  }

  isCompleted(index: number): boolean {
    return index < this.activeStep.index;
  }

  isFirst(): boolean {
    return this.activeStep.index === 0;
  }

  isLast(): boolean {
    return this.activeStep.index === this.steps.length - 1;
  }

  onNext() {
    this.stepper.onNext();
  }

  onComplete() {
    // this.stepper.check.next('complete');
  }

  onPrev() {
    this.stepper.onPrev();
  }

  onCancel() {
    // this.stepper.cancel.next();
  }
}
