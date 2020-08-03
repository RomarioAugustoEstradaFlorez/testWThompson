import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Injectable()
export class Globals {

  url: any;
  router: any;

  constructor(location: Location, router: Router, private route: ActivatedRoute) {
    this.url = location.path();
    this.router = router;
  }


}