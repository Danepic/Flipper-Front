import { Injectable } from '@angular/core';
import { Player } from './model/player.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  logInUrl = environment.logInUrl;

  vanillaLogInUrl = environment.vanillaLogInUrl;

  vanillaCoreUrl = environment.vanillaCoreUrl;

  result: any;

  constructor(private http: HttpClient) { }

  save(player: Player) {
    return this.http.post<Player>(this.logInUrl + "/v1/player", player);
  }

  checkLogInHealth(){
    return this.http.get(this.vanillaLogInUrl);
  }

  checkCoreHealth(){
    return this.http.get(this.vanillaCoreUrl);
  }

}
