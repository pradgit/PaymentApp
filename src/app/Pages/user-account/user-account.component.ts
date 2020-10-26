import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignUpClick(){
    this.router.navigate(['/signup']);
  }

}
