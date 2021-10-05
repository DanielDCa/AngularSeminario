import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  //Añadiendo algunos usuarios
  usuarios:Usuario[]=[
    new Usuario("carlos@upc.edu","Carlos","Gomez","12345"),
    new Usuario("mari@upc.edu","Maria","Rosario","12345"),
    new Usuario("Benito@upc.edu","Benito","Camargo","12345")

  ];

  agregarUsuarioS(usuario: Usuario){

    this.usuarios.push(usuario);
  }

}
