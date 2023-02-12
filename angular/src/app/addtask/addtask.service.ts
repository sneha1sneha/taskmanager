import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of,map} from 'rxjs';



export interface AddtaskContext {
//   username: string;
//   password: string;
  // remember?: boolean;
}




/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AddtaskService {
  constructor(private http:HttpClient) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */



   getemployeelist(): Observable<any> {
    return this.http.get('/project/employeelist', { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
          console.log("res.body",res.body)
        return res.body;
      })
    );
  }
   getprojectlist(): Observable<any> {
    return this.http.get('/project/projectlist', { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
          console.log("res.body",res.body)
        return res.body;
      })
    );
  }
  



  
   postaddtask(requestObj: AddtaskContext): Observable<any> {
    return this.http.post('/project/addtask', requestObj, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }
  
  
}
