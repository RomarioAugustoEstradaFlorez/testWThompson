import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMenuOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  clickMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
