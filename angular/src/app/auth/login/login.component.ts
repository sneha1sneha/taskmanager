import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AuthenticationService } from '../authentication.service';
import { CredentialsService } from '@app/auth';


const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  errorObj!: boolean | false;
  
  loginError: boolean = false;
  isLoading: boolean = false;
  loginForm!: FormGroup;
  userid:any;
  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private _formBuilder: FormBuilder,
    private _credentialService: CredentialsService,
  ) {
    this.createForm();
  }

  ngOnInit() {

  }



  login() {

    try {
      // Check if the login form is valid
      if (this.loginForm.valid) {
         // Show the loading indicator
        this.isLoading = true;
        // Log the form data
        console.log('this.loginForm.valid', this.loginForm.value);
         // Call the login service
        this.authenticationService.login(this.loginForm.value).subscribe(
          (response) => {
  // Hide the loading indicator
            this.isLoading = false;
             // Log the response
            console.log('response', response);
            // Store the credentials

            this._credentialService.setCredentials(response)
            
            console.log("id",response.data.userId)
             // Navigate to the home page
            if(response.data.userId == 12){
            console.log("adminpage")
            this._router.navigate(['/homeadmin']);}
            else{
              this._router.navigate(['/home']);
            }
           
           const user= sessionStorage.getItem('userid')
           console.log("1", user)
          },
          (error) => {
             // Hide the loading indicator
            this.isLoading = false;
            // Show the error
            this.errorObj = true
            log.error('login() funtion ', error);
          }
        );
      }
    } catch (error) {
      // Log the error
      log.error('login() funtion ', error);
    }



  };



  private createForm() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
