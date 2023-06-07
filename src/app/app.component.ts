import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MovieCardComponent } from './movie-card/movie-card.component';

/**
 * @component
 * Main app component for the 'myFlix-Angular-client' application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Title of the app.
   * @type {string}
   */
  title = 'myFlix-Angular-client';

  /**
   * Creates an instance of AppComponent.
   * @param {MatDialog} dialog Material Dialog used for opening dialog components.
   */
  constructor(public dialog: MatDialog) {}

  /**
   * Opens the registration dialog.
   */
  openRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }

  /**
   * Opens the login dialog.
   */
  openLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px'
    });
  }

  /**
   * Opens the movie card dialog.
   */
  openMoviesDialog(): void {
    this.dialog.open(MovieCardComponent, {
      width: '500px'
    });
  }
}
