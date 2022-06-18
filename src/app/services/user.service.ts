import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: AngularFirestore
  ) { }
createUser(record: any)
{
  this.firestore.collection("Utilisateur").add(record);
}
readUser()
{
  return this.firestore.collection("Utilisateur").snapshotChanges();
}
updateUser(recordId?:string,record?:any)
{
  return this.firestore.doc("Utilisateur/"+recordId).update(record);
}
deleteUser(recordId:string)
{
  return this.firestore.doc("Utilisateur/"+recordId).delete();
}
}
