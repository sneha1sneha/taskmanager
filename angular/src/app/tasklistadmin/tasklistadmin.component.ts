

import { Component, OnInit } from '@angular/core';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';

import { TasklistadminService } from './tasklistadmin.service';
const log = new Logger('tasklist');
@Component({
  selector: 'app-tasklistadmin',
  templateUrl: './tasklistadmin.component.html',
  styleUrls: ['./tasklistadmin.component.scss']
})
export class TasklistadminComponent implements OnInit {
  errorObj!: boolean | false;
  tasklists:any;
  isLoading: boolean = false;
  id:any
  result:any
  constructor(private _tasklistadminService:TasklistadminService) { 
    
  }

  ngOnInit(): void {
    // const id= sessionStorage.getItem('userid')
    // console.log("1", id)
    this.getTasklist();
    
  }


  getTasklist() {
    // console.log(id)
     // Show the loading indicator
    this.isLoading = true;
    try{
      // Call the getTasklist service
      this._tasklistadminService.getTasklistadmin().subscribe(
        (response) => { 
           // Hide the loading indicator
        this.isLoading = false;
        // Store the tasklists
        this.tasklists = response.data;
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



delete(id:any){
  console.log("ent",id)
  alert("are u sure you want to delete ")
  // this.isLoading = true;
   if(true)
    this._tasklistadminService.deletes(id).subscribe(
        (response) => { 
          this.result=response.data
          console.log("result",this.result);
          
       
      },
      )

   
}


};
