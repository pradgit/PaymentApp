import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output() feature = new EventEmitter<string>();
  
  
  constructor() { 
    
  }

 
  ngOnInit() {
    
  } 

}
