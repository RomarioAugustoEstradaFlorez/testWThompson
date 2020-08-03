import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss']
})
export class HowComponent implements OnInit {
  activeHow: String = "false";
  theGlobal: any;

  services: Array<{
    id: number,
    name: string,
    url: string,
  }>;

  constructor(globals: Globals) {
    this.theGlobal = globals;
  }

  ngOnInit(): void {
    this.activeHow = "true";
    this.loadScripts();
    this.theGlobal.menuLoadder();
    // this used because if the last section paused the audio, 
    // when the section init, pause the audio too, or play, it depends.
    this.theGlobal.switchSound();
    this.getServices();
  }

  getServices() {
    this.services = [
      {
        id: 1,
        name: 'Diseño y desarrollo de páginas web',
        url: '/',
      },
      {
        id: 2,
        name: 'Diseño de marca',
        url: '/',
      },
      {
        id: 3,
        name: 'Posts para redes sociales',
        url: '/',
      },
    ]
  }

  loadScripts() {
    const scriptsToLoad = [
      "../assets/js/what/parallax.js",
      // "../assets/js/what/animations.js"
    ];

    for (let i = 0; i < scriptsToLoad.length; i++) {
      const body = <HTMLDivElement>document.body;
      let divScripts = document.getElementById('personalizedParallax');
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = scriptsToLoad[i];
      script.async = false;
      script.defer = true;
      divScripts.appendChild(script);
    }
  }

}
