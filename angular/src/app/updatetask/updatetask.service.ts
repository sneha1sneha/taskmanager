import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of,map} from 'rxjs';



export interface UpdatetaskContext {

}




/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class UpdatetaskService {
  constructor(private http:HttpClient) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */


   gettasks(id:any): Observable<any> {
    return this.http.get(`/project/taskbyid/${id}`, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        console.log("response",res.body);
        return res.body;
      })
    );
  }






   getupdatetask(id:any,requestObj: UpdatetaskContext): Observable<any> {
    return this.http.put(`/project/managetask/${id}`, requestObj,{ observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        // console.log(res.body);
        return res.body;
      })
    );
  }

  
  
}