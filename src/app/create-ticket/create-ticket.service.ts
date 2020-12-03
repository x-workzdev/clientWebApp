import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateTicketDetails } from './CreateTicket';

@Injectable({
  providedIn: 'root'
})
export class CreateTicketService {

  constructor(private httpClient: HttpClient, private router : Router) { }

  sendCreateTicketDetails(createTicket : CreateTicketDetails) : Observable<any> {
    console.log(createTicket);
    return this.httpClient.post(environment.apiUrl+'createTicket',createTicket,{observe:'response', responseType: 'json'});
  }
}
