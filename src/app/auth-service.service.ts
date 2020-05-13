import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

islogIn(){
  const user= JSON.parse(localStorage.getItem('user'));
  if(user){
    return true;
  }
 else{
   return false;
 }
}
}
