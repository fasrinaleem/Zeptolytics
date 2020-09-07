import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './widget-bar.component.html',
  styleUrls: ['./widget-bar.component.css']
})
export class WidgetBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav() {
    document.getElementById("myWidgetBar").style.width = "250px";
  }

  closeNav() {
    document.getElementById("myWidgetBar").style.width = "0";
  }

}
