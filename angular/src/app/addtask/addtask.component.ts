import { Component, OnInit } from '@angular/core';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AddtaskService } from './addtask.service'; 
const log = new Logger('addtask');
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  // errorObj!: boolean | false;
  
  // isLoading: boolean = false;
  constructor(private _addtaskService:AddtaskService) { }

  ngOnInit(): void {
    // this.addtask();
  }


//   addtask() {
    
//     // Show the loading indicator
//    this.isLoading = true;
//    try{
//      // Call the getTasklist service
//      this._addtaskService.postaddtask().subscribe(
//        (response) => { 
//           // Hide the loading indicator
//        this.isLoading = false;
//        // Store the tasklists
//        this.addtask = response.data;
//        debugger
//      },
//      (error) => {
//        // Hide the loading indicator
//        this.isLoading = false;
//        // Show the error
//        this.errorObj = true
      
//      } );
//    }

//    catch (error) {
//      // Log the error
//      log.error('tasklist() funtion ', error);
//    }



// }

}





  
