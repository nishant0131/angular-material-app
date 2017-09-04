import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
 url = "http://ngauthenticationapi.azurewebsites.net/token";
  constructor(private _http:Http) { }
  
  public login(loginData: any) {
    // let username = loginData.email;
    // let password = loginData.password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = `grant_type=password&username=${loginData.email}&password=${loginData.password}`;
    this._http.post('http://ngauthenticationapi.azurewebsites.net/token', body, { headers: headers })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    }
}


