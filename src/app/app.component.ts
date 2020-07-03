import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BankingApp';
  loadedFeature = "Main";
  isClosed = true;
  ngOnInit(){
   
  }
  onPay(data){    
    this.loadedFeature = data;
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
