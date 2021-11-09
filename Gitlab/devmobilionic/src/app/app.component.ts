import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp(){
    this.login();
  }

  private login(){
    
    let authentifier= this.authService.loadToken();
    if (authentifier)
     {
      this.router.navigateByUrl('/menu/home');
    }
    else
    {
      this.router.navigateByUrl('/login');
    }
    
  }
}
