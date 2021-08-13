import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/app/Models/User.model';


@Injectable()
export class DataService {

  token = sessionStorage.getItem('token')

  constructor(private httpClient: HttpClient) {

  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  getcountries(): Observable<any> {
    return this.httpClient.get('/api/v1/countries')
  }

  getCities(countryId: String): Observable<any> {
    //console.log(`/api/v1/cities/bycountry/${countryId}`)
    return this.httpClient.get(`/api/v1/cities/bycountry/${countryId}`)
  }

  createUser(userData: User): Observable<any> {
    return this.httpClient.post('api/v1/users', userData)
  }

  login(userLogin: Object): Observable<any> {
    return this.httpClient.post('api/v1/login', userLogin)
  }

  getUserById (id: any): Observable<any> {
    return this.httpClient.get(`api/v1/users/${id}`)
  }

  updatePassword(username: string, userData: Object): Observable<Object> {
    return this.httpClient.patch(`api/v1/users/${username.toLowerCase()}`, userData)
  }

  getMemorandos(userId: number): Observable<any> {
    // if(!this.token) {
    //   console.log("El token es null")
    // }
    //console.log(`api/v1/memorandos/${userId}`)
    return this.httpClient.get(`api/v1/memorandos/${userId}`)
  }

  getSentMemos(userId: number): Observable<any> {
    //console.log(`api/v1/memorandos/sent/${userId}`)
    return this.httpClient.get(`api/v1/memorandos/sent/${userId}`)
  }

  getUsers(): Observable<any> {
    //console.log('service de obtencion de usuarios')
    return this.httpClient.get('api/v1/users')
  }

  sendMemo(memoData: any): Observable<any> {
    //console.log('Service de envio de memorando')
    //console.log(memoData)
    return this.httpClient.post('api/v1/memorandos', memoData)
  }

  deleteMemo(idMemo: any): Observable<any> {
    //console.log('Service eliminar memorando por id: ', idMemo)
    return this.httpClient.delete(`api/v1/memorandos/${idMemo}`)
  }

}
