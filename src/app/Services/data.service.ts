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

  createUser(userData: User): Observable<any> {
    return this.httpClient.post('api/v1/users', userData)
  }

  login(userLogin: Object): Observable<any> {
    return this.httpClient.post('api/v1/login', userLogin)
  }

  updatePassword(username: string, userData: Object): Observable<Object> {
    console.log(`api/v1/users/${username.toLowerCase()}`)
    return this.httpClient.patch(`api/v1/users/${username.toLowerCase()}`, userData)
  }

  getMemorandos(userId: number): Observable<any> {
    console.log(`api/v1/memorandos/${userId}`)
    return this.httpClient.get(`api/v1/memorandos/${userId}`)
  }

  getSentMemos(userId: number): Observable<any> {
    console.log(`api/v1/memorandos/sent/${userId}`)
    return this.httpClient.get(`api/v1/memorandos/sent/${userId}`)
  }

  getUsers(): Observable<any> {
    console.log('service de obtencion de usuarios')
    return this.httpClient.get('api/v1/users')
  }

  sendMemo(memoData: any): Observable<any> {
    console.log('Service de envio de memorando')
    console.log(memoData)
    return this.httpClient.post('api/v1/memorandos', memoData)
  }

}
