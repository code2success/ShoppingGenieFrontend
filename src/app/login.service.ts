import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  
  login(username :String, password: String){
    if(username == "amal" && password == "amal123"){
      return true;
    }else{
      return false;
    }

  }

}
