import { HttpClient } from '@angular/common/http';
import { Injectable, ListenerOptions } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }

  getTeamMembers():Observable <any> {
    return this.http.get<any>('data/team.json');
  }
}
