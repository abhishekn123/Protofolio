import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-navbar',
  templateUrl: './small-navbar.component.html',
  styleUrls: ['./small-navbar.component.css']
})
export class SmallNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav()
  {
    document.getElementById("mySidenav").style.width = "100%";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  Navigate()
  {
    document.getElementById("mySidenav").style.width = "0";
  }
}
