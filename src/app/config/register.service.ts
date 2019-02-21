import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
  firstname: string;
  lastname: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  configUrl = 'http://localhost:3000/registration/getdetails?firstname=Amit';

  constructor(private http: HttpClient) { }

  getConfig(): Observable<Config[]>{
    return this.http.get<Config[]>(this.configUrl);
  }
}
