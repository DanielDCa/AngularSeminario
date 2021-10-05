import { Usuario } from './../usuarios.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-lista-h',
  templateUrl: './usuario-lista-h.component.html',
  styleUrls: ['./usuario-lista-h.component.css']
})
export class UsuarioListaHComponent implements OnInit {

  //Directiva input para pasar del component padre a este un "Usuario" y un indice
  @Input() usuarioDeLista:Usuario;
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }

}
