import { Component, OnInit } from '@angular/core';
import { singlePieChart, singleBarChart, multiBarChart, multiBarChart2 } from "../../core-layout/chart-data";

@Component({
  selector: 'app-widget-bar',
  templateUrl: './widget-bar.component.html',
  styleUrls: ['./widget-bar.component.css']
})
export class WidgetBarComponent implements OnInit {


  //Piechart
  singlePieChart: any[];

  viewPieChart: any[] = [400, 200];

  // options
  showLegendPieChart = false;

  colorSchemePieChart = {
    domain: ['#1f71ad', '#fc9003', '#b5b3ae']
  };

  // pie
  showLabelsPieChart = false;
  explodeSlicesPieChart = false;
  doughnutPieChart = false;


  //Bar Chart
  singleBarChart: any[];

  viewBarChart: any[] = [300, 180];

  // options
  showXAxisBarChart = false;
  showYAxisBarChart = true;
  gradient = false;
  showLegendBarChart = false;
  showXAxisLabelBarChart = false;
  showYAxisLabelBarChart = false;
  showXAxisLabelMultiBarChart = false;
  showYAxisLabelMultiBarChart = false;

  colorSchemeBarChart = {
    domain: ['#1f71ad', '#1f71ad', '#1f71ad', '#1f71ad']
  };

  //Multi Bar Chart
  multiBarChart: any[];
  multiBarChart2: any[];

  viewMultiBarChart: any[] = [250, 200];
  // options
  showXAxisMultiBarChart = true;
  showYAxisMultiBarChart = true;
  gradientMultiBarChart = false;
  showLegendMultiBarChart = false;
  xAxisLabelBarChart = false;
  yAxisLabelBarChart = false;

  colorSchemeMultiBarChart = {
    domain: ['#1f71ad', '#fc9003']
  };

  constructor() {
    Object.assign(this, { singlePieChart, singleBarChart, multiBarChart, multiBarChart2 })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }
  openNav() {
    document.getElementById("myWidgetBar").style.width = "600px";
  }

  closeNav() {
    document.getElementById("myWidgetBar").style.width = "0";
  }

}
