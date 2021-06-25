import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/app/Models/User.model';


@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {

  }

  getcountries(): Observable<any> {
    return this.httpClient.get('/api/v1/countries')
  }

  getCities(countryId: String): Observable<any> {
    console.log(`/api/v1/cities/bycountry/${countryId}`)
    return this.httpClient.get(`/api/v1/cities/bycountry/${countryId}`)
  }

  createUser(userData: User): Observable<Object> {
    return this.httpClient.post('api/v1/users', userData)
  }
}
