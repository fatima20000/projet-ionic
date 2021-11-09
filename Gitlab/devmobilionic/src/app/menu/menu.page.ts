import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus=[
    {title:"Home", url:"/menu/home", icon:'home'},
    {title:"Salles", url:"/menu/salle", icon:'storefront'},
    {title:"Réunions", url:"/menu/reunion", icon:'chatbubbles'},
    {title:"Employés", url:"/menu/employe", icon:'people'},
    {title:"Direction", url:"/menu/direction", icon:'business'},
    {title:"Présence", url:"/menu/feuillepresence", icon:'receipt'},
    {title:"Logout", url:"/logout", icon:'log-out'}
  ]

  constructor(private router: Router, private authenService: AuthenticationService) { }

  ngOnInit() {
  }

  onMenuItem(m){
      if (m.url=='/logout')
       {
        this.authenService.logout();
        this.router.navigateByUrl('/login');
      }
      else
      {
        this.router.navigateByUrl(m.url);
      }
      
  }
}
