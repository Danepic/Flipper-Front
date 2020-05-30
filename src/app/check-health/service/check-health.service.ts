import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckHealthService {

  logInUrl = environment.logInUrl;

  vanillaLogInUrl = environment.vanillaLogInUrl;

  vanillaCoreUrl = environment.vanillaCoreUrl;

  result: any;

  constructor(private http: HttpClient) { }

  checkLogInHealth(){
    return this.http.get(this.vanillaLogInUrl);
  }

  checkCoreHealth(){
    return this.http.get(this.vanillaCoreUrl);
  }
}
