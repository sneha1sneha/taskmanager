

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { UpdateadminService } from './updateadmin.service'; 
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
const log = new Logger('updatetask');
@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.scss']
})
export class UpdateadminComponent implements OnInit {
  updatetasks:any;
  isLoading: boolean = false;
  id:any
  task_id:any
  errorObj!: boolean | false;
  updateForm!:FormGroup;
  taskadmin:any
  employeelists:any
  constructor(private _updateadminService:UpdateadminService,
    private _router: Router,
    private route: ActivatedRoute,
    private _activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    ) {
   
      this.createForm();
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.gettaskadmin(this.id);
      this.employeelist();
    // this.updatetask(id);
  }




gettaskadmin(id:any){
 
    console.log("enterd")
    
      try{
        // Call the getTasklist service
        this._updateadminService.gettaskadminn(id).subscribe(
          (response) => { 
             // Hide the loading indicator
          this.isLoading = false;
          // Store the tasklists
          this.taskadmin= response.data;
          console.log(this.taskadmin[0])
          this.updateForm.patchValue({
            task_name:this.taskadmin[0].task_name,
            project_name:this.taskadmin[0].project_name,
            description:this.taskadmin[0].description,
            status_type:this.taskadmin[0].status_type,
            username:this.taskadmin[0].username,
          })
         
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
        this._updateadminService.getemployeelist().subscribe(
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
   
  















  updatetask(id:any) {
    console.log(id)
     // Show the loading indicator
     try {
       debugger
      // Check if the register form is valid
      if (this.updateForm.valid) {
        // Show the loading indicator
        this.isLoading = true;
        // Call the register service
        this._updateadminService.getupdatetask(id,this.updateForm.value).subscribe(
          (response) => {
            // Hide the loading indicator
            this.isLoading = false;
            console.log('response', response.data.affectedRows==1);
            // Navigate to the home page
           this._router.navigate(['/tasklistadmin']);
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





}
private createForm() {
  this.updateForm = this.formBuilder.group({
    project_name: ['', Validators.required],
    task_name: ['', Validators.required],
    description: ['', Validators.required],
    status_type: ['', Validators.required],
    username:['',Validators.required],
    // remember: true,
  });




}
}