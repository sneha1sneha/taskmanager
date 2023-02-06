// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AuthenticationService } from '../authentication.service';

const log = new Logger('register');

@UntilDestroy()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //   errorObj:boolean=false
  // version: string | null = environment.version;
  // error: string | undefined;
  // registerForm!: FormGroup;
  // isLoading = false;

  errorObj!: boolean | false;

  registerError: boolean = false;
  isLoading: boolean = false;
  registerForm!: FormGroup
  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() { }

  register() {
    console.log("register")
    try {
      // Check if the register form is valid
      if (this.registerForm.valid) {
        // Show the loading indicator
        this.isLoading = true;
         // Log the form data
        console.log('this.loginForm.valid', this.registerForm.value);
        // Call the register service
        this.authenticationService.register(this.registerForm.value).subscribe(
          (response) => {
             // Hide the loading indicator
            this.isLoading = false;
            console.log('response', response);
            // Navigate to the home page
            this._router.navigate(['/home']);
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
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      // remember: true,
    });

  }
}
