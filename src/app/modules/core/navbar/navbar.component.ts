import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = false;
  isSideNavOpen = true;
  @ViewChild(SidebarComponent) child: SidebarComponent;

  constructor() { }

  ngOnInit(): void {

  }

  isOpen() {
    this.child.openNav();
    this.isSideNavOpen = false;
  }

  isClose() {
    this.child.closeNav();
    this.isSideNavOpen = true;
  }
}
