import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'https://demo-fast-apy.onrender.com/auth';
  url2:string = 'https://demo-fast-apy.onrender.com';

  private loginData:any = new BehaviorSubject<any>("{}");

  constructor(private http:HttpClient) {

   }

  isAuthenticated(): Observable<any> {
    return this.loginData.asObservable();
  }

  login(userRequest:any): Observable<any> {
    return this.http.post(`${this.url}/login`, userRequest).pipe(tap(
      (response: any) => {
        // Guardar los datos del usuario en el BehaviorSubject
        localStorage.setItem('authenticatedUserId', response.user_id);
        this.loginData.next(response);
        return response;
      }
    ));

  }

}
