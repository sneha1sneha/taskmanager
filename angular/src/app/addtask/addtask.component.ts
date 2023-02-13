import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';

import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AddtaskService } from './addtask.service';
const log = new Logger('addtask');
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  errorObj!: boolean | false;

  addtaskError: boolean = false;
  isLoading: boolean = false;
  addtaskForm!: FormGroup;
  projectlists:any;
  employeelists:any;
  constructor(private _addtaskService: AddtaskService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,

  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.projectlist();
    this.employeelist();

  }

  projectlist(){
    console.log("enterd")
    
      try{
        // Call the getTasklist service
        this._addtaskService.getprojectlist().subscribe(
          (response) => { 
             // Hide the loading indicator
          this.isLoading = false;
          // Store the tasklists
          this.projectlists= response.data;
          debugger
        },
        (error) => {
          // Hide the loading indicator
          this.isLoading = false;
          // Show the error
          this.errorObj = true
         
        } );
      }
  
      catch (error) {
        // Log the error
        log.error('tasklist() funtion ', error);
      }
  
  
  
  }




  employeelist(){
    console.log("enterd")
    
      try{
        // Call the getTasklist service
        this._addtaskService.getemployeelist().subscribe(
          (response) => { 
             // Hide the loading indicator
          this.isLoading = false;
          // Store the tasklists
          this.employeelists= response.data;
          debugger
        },
        (error) => {
          // Hide the loading indicator
          this.isLoading = false;
          // Show the error
          this.errorObj = true
         
        } );
      }
  
      catch (error) {
        // Log the error
        log.error('tasklist() funtion ', error);
      }
  
  
  
  }
   



  addtask() {
    debugger
    console.log("addtask")
    try {
      // Check if the register form is valid
      if (this.addtaskForm.valid) {
        // Show the loading indicator
        this.isLoading = true;
        // Call the register service
        this._addtaskService.postaddtask(this.addtaskForm.value).subscribe(
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
    this.addtaskForm = this.formBuilder.group({
      project_name: ['', Validators.required],
      task_name: ['', Validators.required],
      description: ['', Validators.required],
      planned_start_date: ['', Validators.required],
      planned_end_date: ['', Validators.required],
      planned_budget: ['', Validators.required],
      actual_start_date: ['', Validators.required],
      actual_end_date: ['', Validators.required],
      actual_budget: ['', Validators.required],
      username: ['', Validators.required],

      // remember: true,
    });




  }
}






