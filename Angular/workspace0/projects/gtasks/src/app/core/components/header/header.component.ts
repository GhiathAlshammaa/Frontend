import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { GapiRef } from '../../services/gapi-ref.service';
import { GapiService } from '../../services/gapi.service';
import { ProgressBarService } from '../../services/progress-bar.service';
// import {* as logo} from '../../../../assets/logo.svg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  src: string = '../../../../assets/logo.png';
  /**
   * Keep a boolean value whether the user is already sign in
   */

  isSignIn: boolean;

  /**
   * Keep a boolean value whether is any
   * http request is in progress
   */
  isInProgress = false;

  constructor(
    private progressBarService: ProgressBarService,
    private authenticationService: AuthenticationService,
    private gapiService: GapiService,
    private gapiRef: GapiRef
  ) {}

  /**
   * It subscribe to authetication change and progress bar changes
   */
  ngOnInit() {
    this.subscribeToAuthentication();
    this.subscribeToProgressBar();
  }

  /**
   * Subscribe to authentication state
   */
  subscribeToAuthentication(): void {
    const updateUserState = this.updateUserState.bind(this);
    this.authenticationService.isAuthenticate.subscribe(updateUserState);
  }

  /**
   * Update the user sign in sttaus and if the user is sign in,
   * it it will retrieve the tasks
   * @param isSignIn is the sign in status
   */
  updateUserState(isSignIn) {
    this.isSignIn = isSignIn;
    if (this.isSignIn) {
      // this.getTaskLists();
    }
  }

  /**
   * Subscibe to progress state
   */
  subscribeToProgressBar(): void {
    this.progressBarService.isInProgress.subscribe((state) => {
      this.isInProgress = state;
      // this.changeDetectionRef.detectChanges();
    });
  }

  authStatus(): boolean {
    return this.gapiRef.gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  /**
   * Authenticate the user by google api
   */
  authenticate(): void {
    // const result = this.authStatus();
    // console.log('result: ' + result);
    this.updateUserState(true);

    this.gapiService.signIn().then(
      (response) => {
        //If Google OAuth 2 works fine
        // console.log(this.isSignIn);
      },
      (error) => {
        //If Google OAuth 2 occured error
        console.log(error);
        if (error.error === 'popup_closed_by_user') {
          console.log('User has closed Authentication user window!');
          this.updateUserState(false);
          return;
        }
      }
    );
  }

  logOut(): void {
    this.updateUserState(false);
    this.gapiService.signOut().then(
      (response) => {
        //If Google OAuth 2 works fine
        console.log('Sign Out is Done!');
      },
      (error) => {
        //If Google OAuth 2 occured error
        console.log(error);
        if (error.error === 'popup_closed_by_user') {
          console.log('Sign Out is invalid!');
          this.updateUserState(true);
          return;
        }
      }
    );
  }
}
