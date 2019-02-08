import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import chartJs from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {
  
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('doughnutCanvas2') doughnutCanvas2;

  doughnutChart : any;
  doughnutChart2 : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

  ngAfterViewInit(){  
    setTimeout(() => {      
      this.doughnutChart = this.getDoughnutChart();
      this.doughnutChart2 = this.getDoughnutChart2();
    }, 250)
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType
    })
  }

  getDoughnutChart(){
    const data = {
      labels: ['Retos', 'Libre', 'Memoria'],
      datasets: [{
        label: 'Teste Chart',
        data: [10, 50, 32],
        backgroundColor: [
          'rgb(42, 123, 227)',
          'rgb(242, 80, 44)',
          'rgb(255, 207, 0)'
        ]
      }]
    }
    return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  }
  
  getDoughnutChart2(){
    const data = {
      labels: ['Retos', 'Libre', 'Memoria'],
      datasets: [{
        label: 'Teste Chart',
        data: [80, 20, 50],
        backgroundColor: [
          'rgb(42, 123, 227)',
          'rgb(242, 80, 44)',
          'rgb(255, 207, 0)'
        ]
      }]
    }
    return this.getChart(this.doughnutCanvas2.nativeElement, 'doughnut', data);
  }
}
