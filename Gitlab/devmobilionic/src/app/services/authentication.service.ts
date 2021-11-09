import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authentifier: boolean;
  public token;
  public ok;
  public ok1;
  public startTime = 3700;
  public endTime = 1;
  public timeList = [];

  constructor(private router: Router) { }

  public login(username: string, password: string){
      if (username=='admin' && password=='1234') 
      {
        this.authentifier=true;
        this.saveToken();
      }
      else
      {
        this.authentifier=false;
      }
      return this.authentifier;
  }

  public logout(){
     this.ok1 = this.validate(this.startTime, this.endTime);
     this.ok = this.alertDeconnect();
    
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Vous êtes bien Déconnecter',
        showConfirmButton: false,
        timer: 1500,
        
      });

    

  }

  async alertDeconnect(){

    sessionStorage.clear();
    window.location.reload();

    return true;
  
  }
  
  private saveToken(){
    this.token = "zinginzou";
    sessionStorage.setItem("myToken", this.token);
  }

  public loadToken(){
    this.token=sessionStorage.getItem("myToken");
    if (this.token=="zinginzou") 
    {
      this.authentifier=true;
      
    }
    else
    {
      this.authentifier=false;
    }

    return this.authentifier;
  }

  public addTime(){
  
  if (this.validate(this.startTime, this.endTime)){
    this.ok=true;
    }
  else
  console.log("Please select valid time");
}

public validate(sTime, eTime) {
  
  do{

    if (sTime==0) {
      return true;
    }
    sTime=sTime-eTime;
  }while(sTime>-1);

}

public getDate(time) {
  let today = new Date();
  let _t = time.split(":");
  today.setHours(_t[0], _t[1], 0, 0);
  return today;
}
}
