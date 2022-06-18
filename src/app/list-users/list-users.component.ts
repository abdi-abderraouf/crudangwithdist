import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Observable } from 'rxjs';
import { map, finalize } from "rxjs/operators";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  template:  "<h2>hello</h2>",
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users?:User[];
  selection :any[]=[];
  filtre:string="";
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users=[];
    this.selection=[];
this.readMyUsers();
  }
  readMyUsers()
  {
    this.userService.readUser().pipe( map(changes =>
      changes.map(c =>
        ({ id: c.payload.doc.id,
          ...c.payload.doc.data() as {} })
      )
    )
  ).subscribe(data => {
    this.users = data;
    console.log("users",this.users);


  }
  );
  }
  adddel(id:any)
  {
    this.selection?.push(id);

  }
  deleteAdll()
  {
    for (let uid of this.selection)
    {
      this.userService.deleteUser(uid);



    }
    this.selection=[];
  }
  deleteOne(id:any)
  {
    if(confirm("vous êtes sûre de vouloire supprimer"))
    {
      this.userService.deleteUser(id);
    }
  }
}
