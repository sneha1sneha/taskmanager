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
      if (this.registerForm.valid) {
        this.isLoading = true;
        console.log('this.loginForm.valid', this.registerForm.value);
        this.authenticationService.register(this.registerForm.value).subscribe(
          (response) => {
            this.isLoading = false;
            console.log('response', response);
            this._router.navigate(['/home']);
          },
          (error) => {
            this.isLoading = false;
            this.errorObj = true
            log.error('login() funtion ', error);
          }
        );
      }
    } catch (error) {
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
