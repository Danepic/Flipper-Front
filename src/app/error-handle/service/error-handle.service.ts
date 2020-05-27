import { Injectable } from '@angular/core';
import { ErrorHandle } from './model/error-handle.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toast } from 'angular2-materialize';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor(private http: HttpClient) { }

  throwToastException(message: string) {
    toast(message, 5000);
  }

}
