import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
selected=false;
 public  utilisateur=new User();
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.utilisateur.grade="client";
   /* this.utilisateur.nomcomplet="teste";
    this.utilisateur.adresse="gabes";
    this.utilisateur.email="me@gmail.com";
    this.utilisateur.mdp="teste";
    this.utilisateur.tel="20999888";
    */
 //this.readMyUsers();
  }

createUser()
{
  let user=Object.assign({},this.utilisateur); //conversion json
  this.userService.createUser(user);
  this.utilisateur=new User();
  this.utilisateur.grade="client";
}
detectUser(us:User)
{
  this.utilisateur=us;
  this.selected=true;
}
annuler()
{
  this.utilisateur=new User();
  this.selected=false;
}
update()
{
  let user=Object.assign({},this.utilisateur); // pour créer un objet json à partir de this.utilisateur
  this.userService.updateUser(user.id,user);
  alert("modifié avec succés");
  this.annuler();
}
}
