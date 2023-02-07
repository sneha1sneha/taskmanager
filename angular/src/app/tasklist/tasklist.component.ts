import { Component, OnInit } from '@angular/core';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';

import { TasklistService } from './tasklist.service';
const log = new Logger('tasklist');
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  errorObj!: boolean | false;
  tasklists:any;
  isLoading: boolean = false;
  id:any
  constructor(private _tasklistService:TasklistService) { 
    
  }

  ngOnInit(): void {
    const id= sessionStorage.getItem('userid')
    console.log("1", id)
    this.getTasklist(id);
    
  }


  getTasklist(id:any) {
    console.log(id)
     // Show the loading indicator
    this.isLoading = true;
    try{
      // Call the getTasklist service
      this._tasklistService.getTasklist(id).subscribe(
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


}

