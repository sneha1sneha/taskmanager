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

  postaddtask(): Observable<any> {
    return this.http.get(`/project/addtask`, { observe: "response" }).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res.body);
        return res.body;
      })
    );
  }

  
  
}
