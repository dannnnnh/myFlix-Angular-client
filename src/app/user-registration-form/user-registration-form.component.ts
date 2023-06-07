import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @typedef {Object} UserData
 * @property {string} Username - The username of the user.
 * @property {string} Password - The password of the user.
 * @property {string} Email - The email of the user.
 * @property {string} Birthday - The birthday of the user.
 */

/**
 * Component providing a form for users to register.
 *
 * @component
 * @example
 * <app-user-registration-form></app-user-registration-form>
 */
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  /**
   * Input property holding the user data.
   * @type {UserData}
   */
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * @param {FetchApiDataService} fetchApiData - The injected service for API data fetching.
   * @param {MatDialogRef<UserRegistrationFormComponent>} dialogRef - The reference to the dialog opened.
   * @param {MatSnackBar} snackBar - The injected snackbar service.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  /**
   * Method handling the user registration process.
   * Once successful, it closes the dialog and displays a snackbar with the result.
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      this.dialogRef.close();
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }
}
