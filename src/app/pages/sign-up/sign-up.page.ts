import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.router.navigate(['startup-profile']);
  }

}
