import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../usuarios.model';
import { passwordValidator } from './passwordValidator';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css']
})
export class FormularioComponentComponent implements OnInit {
  titulo = 'myproyect';

  public formRegistro: FormGroup;

   //Variables
   cuadroNombre:string="";
   cuadroApellido:string="";
   cuadroCorreo:string="";
   cuadroPassword:string="";
   cuadroRPassword:string="";

   noCoincideContrasena:boolean = false;


 constructor(private usuarioService:UsuarioService, private formBuilder:FormBuilder){
  //this.usuarios=usuarioService.usuarios;
};

  ngOnInit(): void {
    //Como atributo de este constructor estamos inyectando el servicio usuarioService(Que contiene los usuarios predefinidos )
    this.usuarios=this.usuarioService.usuarios;

    //Validacion del formulario de registro con las funcionalidades de formBuilder
    this.formRegistro = this .formBuilder.group({
      Correo:['',[Validators.required, Validators.email]],
      Nombre:[''],
      Apellido:[''],
      Password:['',[Validators.required,Validators.maxLength(16)]],
      Rpassword:['',[Validators.required,Validators.maxLength(16)],/*this.passwordValidate()*/]
    },
    {
      validators:passwordValidator,
    });
    //PasswordValidator
  }


  usuarios:Usuario[]=[];

  addUser(){

    //Tomamos los valores del formulario de registro
    this.cuadroNombre= this.formRegistro.value.Nombre;
    this.cuadroApellido= this.formRegistro.value.Apellido;
    this.cuadroCorreo= this.formRegistro.value.Correo;
    this.cuadroPassword= this.formRegistro.value.Password;
    this.cuadroRPassword= this.formRegistro.value.Rpassword;

    //Verificamos que los dos cuadros de contraseña(Contraseña y Repetir contraseña), sean iguales
    if(this.cuadroRPassword === this.cuadroPassword){

      console.log(this.cuadroPassword + "   " + this.cuadroRPassword);
      let usuario = new Usuario(this.cuadroCorreo,this.cuadroNombre,this.cuadroApellido,this.cuadroPassword)
      this.usuarioService.agregarUsuarioS(usuario);

    }
    else{
      this.noCoincideContrasena = true;

    }


  }
  /*passwordValidate(control: AbstractControl){

    if(this.cuadroRPassword === this.cuadroPassword){

      console.log(this.cuadroPassword + "   " + this.cuadroRPassword);
      let usuario = new Usuario(this.cuadroCorreo,this.cuadroNombre,this.cuadroApellido,this.cuadroPassword)
      this.usuarioService.agregarUsuarioS(usuario);

    }
    else{
      this.noCoincideContrasena = true;

    }
  }*/

 /* const validarQueSeanIguales: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
     password = control.get("password")
     confirmarPassword = control.get("confirmarPassword")

    return password.value === confirmarPassword.value
      ? null
      : { noSonIguales: true }
  }*/


}
