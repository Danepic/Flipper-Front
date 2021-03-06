import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from './model/login.model';
import { Bug } from './model/bug.model';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  coreUrl = environment.coreUrl;
  logInUrl = environment.logInUrl;

  result: any;

  constructor(private http: HttpClient) { }

  getPlatforms() {
    return this.http.get(this.coreUrl + "/v1/core/bug/platform");
  }

  getGames() {
    return this.http.get(this.coreUrl + "/v1/core/game");
  }

  getGame(gameID: string) {
    return this.http.get(this.coreUrl + "/v1/core/game/" + gameID);
  }

  login(login: Login) {
    return this.http.post(this.logInUrl + "/v1/login/authentication/login", login);
  }

  save(bug: Bug) {
    return this.http.post(this.coreUrl + "/v1/core/bug", bug);
  }

}
