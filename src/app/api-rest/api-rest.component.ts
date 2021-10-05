import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.css']
})
export class ApiRestComponent implements OnInit {

  nameIn:string;

  name: string;
  urlImage: string;
  nFollowers:number;
  nFollowing: number;
  urlRepos: string;
  repositorios: any[] = [];

  userFound: boolean;
  notifyUserNotFound = "";

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }
  //Data:any no tengo la obligación de trabajar con un objeto
    search(){
      this.apiService.getUser(this.nameIn).subscribe((data:any)=>{
        console.log(data);
        this.userFound = true;
        this.name = this.nameIn;
        this.urlImage = data.avatar_url;
        this.nFollowers = data.followers;
        this.nFollowing = data.following;
        this.urlRepos = data.repos_url;
        this.notifyUserNotFound ="";

        this.apiService.getRepositories(this.urlRepos).subscribe((dataR: any) => {
          this.repositorios = dataR;
          console.log(this.repositorios);
        }

        )

      },
      err =>{

        if(err.status === 404 ){
          console.log("Usuario no encontrado , ERROR 404");
          this.notifyUserNotFound = "Usuario no encontrado, vuelva a intentarlo"

          this.userFound = false;
        }

      }

      );


  }
}
