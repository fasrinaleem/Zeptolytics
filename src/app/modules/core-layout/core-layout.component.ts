import { Component, OnInit } from '@angular/core';
import { singlePieChart, singleBarChart, multiBarChart, multiBarChart2 } from "./chart-data";

@Component({
  selector: 'app-core-layout',
  templateUrl: './core-layout.component.html',
  styleUrls: ['./core-layout.component.css']
})
export class CoreLayoutComponent implements OnInit {

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

  viewBarChart: any[] = [350, 200];

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

  viewMultiBarChart: any[] = [350, 350];

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

}
