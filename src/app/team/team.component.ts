import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  activeHow: String = "false";
  theGlobal: any;

  team: Array<{
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
  }>;

  constructor(globals: Globals, private userService: UserService) {
    this.theGlobal = globals;
  }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    this.userService.getUsers().subscribe((res) => {
      this.team = res.data;
    })
  }

}
