import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public cle;
  public login;
  public valid;
  public balanceInput = new FormControl('', Validators.required);

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  newLogin(ev)
  {

    this.cle= ev.detail.value;
    
    if (ev.detail.value!=null) {
      this.valid=true;  
    }
    if(ev.detail.value===""){
      this.valid=false; 
    }
    
  }

  newPassword(ev)
  {
    this.login= ev.detail.value;

    if (ev.detail.value!=null && this.valid) {
      this.balanceInput.setValue(false);  
    }
    if(ev.detail.value===""){
      this.balanceInput = new FormControl('', Validators.required); 
    }

  }

  onLogin(user){
    
   let res= this.authService.login(user.username, user.password);

    if (res==true)
     {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bienvenu '+user.username,
        showConfirmButton: false,
        timer: 1500
      })

        this.router.navigateByUrl('/menu/home');
    }
    else
    {
      Swal.fire({
        icon: 'error',
        title: 'Désoler...',
        text: 'Echec d\'authentification, Veuillez réessayer Svp!',
        footer: '<a href="">Mot de passe oublié</a>'
      });
      
      this.router.navigateByUrl('/login');
    }
  }

}
