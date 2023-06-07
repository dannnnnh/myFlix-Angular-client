import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';

/**
 * Component providing a welcome page.
 *
 * @component
 * @example
 * <app-welcome-page></app-welcome-page>
 */
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  /**
   * Title of the application.
   * @type {string}
   */
  title = 'myFlix-Angular-client';

  /**
   * @param {MatDialog} dialog - The injected MatDialog service.
   */
  constructor(public dialog: MatDialog) {}

  /**
   * Opens the user registration dialog.
   */
  openRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }

  /**
   * Opens the user login dialog.
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
