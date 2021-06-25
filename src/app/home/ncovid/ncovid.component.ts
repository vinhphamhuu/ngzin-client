import { Component, OnInit } from '@angular/core';
import { NCovidService } from 'src/app/services/ncovid.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-ncovid',
  templateUrl: './ncovid.component.html',
  styleUrls: ['./ncovid.component.scss']
})
export class NcovidComponent implements OnInit {

  dataReport: any = [];
  chart: any;
  constructor(private covidService: NCovidService) { }

  ngOnInit() {
    this.getReport();
  }

  getReport() {
    this.covidService.getReport().subscribe(res => {
      console.log(res);
      this.drawChart(res);

    })
  }
  drawChart(data: any) {

    const subTitle = data?.sourceUrl;
    this.chart = new Chart({
      title: {
        text: 'Thống kê Covid Việt Nam'
      },
      subtitle: {
        text: `Nguồn: ${subTitle}`
      },
      yAxis: {
        title: {
          text: 'Số lượng'
        }
      },

      xAxis: {
        categories: data.canhiem.map((el: any) => el.day)
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'số ca nhiễm',
        type: 'line',
        data: data.canhiem.map((el: any) => el.quantity),
        color: '#ffc300'
      }, {
        name: 'Số ca khỏi bệnh',
        type: 'line',
        data: data.cakhoi.map((el: any) => el.quantity),
        color: '#06d6a0'
      }, {
        name: 'Số ca tử vong',
        type: 'line',
        data: data.catuvong.map((el: any) => el.quantity),
        color: '#e63946'
      }]
      ,

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    })
  }

}
