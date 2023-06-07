import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * @typedef {Object} UserData
 * @property {string} Username
 * @property {string} Password
 * @property {string} Email
 * @property {string} Birthday
 */

/**
 * Component providing a form for users to login.
 *
 * @component
 * @example
 * <app-user-login-form></app-user-login-form>
 */
@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  /**
   * Input property holding the user data.
   * @type {UserData}
   */
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * @param {FetchApiDataService} fetchApiData - The injected service.
   * @param {MatDialogRef<UserLoginFormComponent>} dialogRef - The reference to the dialog opened.
   * @param {MatSnackBar} snackBar - The injected snackbar service.
   * @param {Router} router - The injected router service.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router) { }
  
  ngOnInit(): void { }

  /**
   * Method handling the login process of the user.
   * Once successful, it closes the dialog, displays a snackbar with the result, and navigates to the 'movies' page.
   */
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      this.dialogRef.close();
      
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    }, (result) => {
      this.router.navigate(['movies']);
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }
}
