import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle : string = "KissAsian";
  isLoaded : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
