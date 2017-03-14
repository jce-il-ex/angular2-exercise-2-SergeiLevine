import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  myList = [
    {id:1, txt: "home"},
    {id:2, txt: "news"},
    {id:3, txt: "contacts"},
    {id:4, txt: "about"},
    ]
  constructor() { }

  ngOnInit() {
  }

}
