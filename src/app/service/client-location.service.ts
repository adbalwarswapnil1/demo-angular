import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLocation } from '../model classes/client-location';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationService {

  constructor(private httpclient:HttpClient) { }

  getClientLocations():Observable<ClientLocation[]>{
    return this.httpclient.get<ClientLocation[]>('http://localhost:9090/api/clientlocations');
  }
}
