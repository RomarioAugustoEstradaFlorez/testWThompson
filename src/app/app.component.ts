import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  url: any = '';

  constructor(location: Location, router: Router) {
    this.url = location.path();
  }

  ngOnInit(): void {

  }

}
