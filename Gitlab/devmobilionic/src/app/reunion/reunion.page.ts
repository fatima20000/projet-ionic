import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as types from '../interfaces/indx';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.page.html',
  styleUrls: ['./reunion.page.scss'],
})
export class ReunionPage implements OnInit { 
  public endPoints = "/reunions/";
  public dataFutur;
  public dataArchive;
  public dataGlobal;

  reunion = new types.Reunion();
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.reunion.code = 'test';
  }

  afficheReunionFutur(){

    this.dataReunion();
    for (let index = 0; index < this.dataGlobal.length; index++) {
         let element = this.dataGlobal[index];
            if (element.dateFin > new Date()) {
              this.dataFutur.push(element);
         }
    }
  }

  afficheReunionArchive(){

    this.dataReunion();
    for (let index = 0; index < this.dataGlobal.length; index++) {
         let element = this.dataGlobal[index];
            if (element.dateFin < new Date()) {
              this.dataArchive.push(element);        
         }
  }
}

  dataReunion(){
    
    this.httpClient.get("http://localhost:1337"+this.endPoints).subscribe(data => {

      this.dataGlobal = data;
      },error => {
  
        console.log(error);
        return null;
      });
  }

}
