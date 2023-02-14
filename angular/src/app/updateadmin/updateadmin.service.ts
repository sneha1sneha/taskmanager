import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of,map} from 'rxjs';



export interface UpdateadminContext {

}




/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class UpdateadminService {
  constructor(private http:HttpClient) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */


   gettaskadminn(id:any): Observable<any> {
    return this.http.get(`/project/taskbyid/${id}`, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        console.log("response",res.body);
        return res.body;
      })
    );
  }


  getemployeelist(): Observable<any> {
    return this.http.get('/project/employeelist', { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
          console.log("res.body",res.body)
        return res.body;
      })
    );
  }




   getupdatetask(id:any,requestObj: UpdateadminContext): Observable<any> {
    return this.http.put(`/project/managetaskadmin/${id}`, requestObj,{ observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        // console.log(res.body);
        return res.body;
      })
    );
  }

  
  
}