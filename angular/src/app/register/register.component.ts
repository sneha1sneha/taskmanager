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
import { AuthenticationService } from '../auth/authentication.service';

const log = new Logger('register');

@UntilDestroy()
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
  })
  export class RegisterComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  registerForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  register() {
    console.log("tr")
    console.log("tr", this.registerForm.value.lastname)
    // this.isLoading = true;
    // const login$ = this.authenticationService.login(this.RegisterForm.value);
    // login$
    //   .pipe(
    //     finalize(() => {
    //       this.RegisterForm.markAsPristine();
    //       this.isLoading = false;
    //     }),
    //     untilDestroyed(this)
    //   )
    //   .subscribe(
    //     (credentials) => {
    //       log.debug(`${credentials.username} successfully logged in`);
    //       this.router.navigate([this.route.snapshot.queryParams['redirect'] || '/'], { replaceUrl: true });
    //     },

    //     (error) => {
    //       log.debug(`Login error: ${error}`);
    //       this.error = error;
    //     }
    //   );
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
     firstname: ['', Validators.required],
     lastname: ['', Validators.required],
      remember: true,
     
    });
    
  }
}
