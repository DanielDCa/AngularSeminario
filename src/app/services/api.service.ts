import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi ="https://api.github.com/users";
  //(Inyeccion de dependencias) Instancia que me permita hacer peticiones HTTP
  constructor(private http: HttpClient) { }

  getUser(name:string){
    return this.http.get(`${this.urlApi}/${name}`)
  }

  getRepositories( urlRepo:string){

    return this.http.get(urlRepo);
  }

}
