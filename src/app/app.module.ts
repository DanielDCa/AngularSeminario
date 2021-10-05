import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuarioService } from './services/usuario.service';
import { UsuarioListaHComponent } from './usuario-lista-h/usuario-lista-h.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { ApiRestComponent } from './api-rest/api-rest.component';
import { RouterModule, Routes } from '@angular/router';

//Indicamos la ruta con el componente que se debe de cargar en cada caso
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'formulario',component:FormularioComponentComponent},
  {path:'apirest',component:ApiRestComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    UsuarioListaHComponent,
    FormularioComponentComponent,
    ApiRestComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
