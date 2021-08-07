import { Component, OnInit } from '@angular/core';
import { NCovidService } from 'src/app/services/ncovid.service';
import { Chart } from 'angular-highcharts';
import { HC_VN_KEY } from 'src/app/services/hc-key.constant';
import {Location} from '@angular/common';

@Component({
  selector: 'app-ncovid',
  templateUrl: './ncovid.component.html',
  styleUrls: ['./ncovid.component.scss']
})
export class NcovidComponent implements OnInit {

  chart: any;
  dataReport: any[] = [];
  dataSummary: any[] = [];
  dataSummaryFull: any;
  resourceAPI: any = {
    author: '',
    sourceUrl: ''
  }
  hcKeyVN: any = HC_VN_KEY;

  constructor(
    private covidService: NCovidService,
    private _location: Location) {
    this.dataSummary = [
      {
        id: 'infected',
        name: 'Lây nhiễm',
        value: 0,
        options: {
          urlImg: 'assets/images/covid/coronavirus.png',
          bgColor: '#FA9694'
        }
      },
      {
        id: 'treated',
        name: 'Điều trị',
        value: 0,
        options: {
          urlImg: 'assets/images/covid/patient.png',
          bgColor: '#9BD0F8'
        }
      },
      {
        id: 'recovered',
        name: 'Hồi phục',
        value: 0,
        options: {
          urlImg: 'assets/images/covid/recovered.png',
          bgColor: '#AFDAB1'
        }
      },
      {
        id: 'deceased',
        name: 'Tử vong',
        value: 0,
        options: {
          urlImg: 'assets/images/covid/dead.png',
          bgColor: '#B8B7B7'
        }
      },
    ]
   }

  ngOnInit() {
    this.getSummary();
    this.getReport();
  }
  goBack() {
    this._location.back();
  }

  getReport() {
    this.covidService.getReport().subscribe((res: any) => {
      console.log(res);
      this.drawChart(res);
      this.resourceAPI.author = res.author;
      this.resourceAPI.sourceUrl = res.sourceUrl;
    })
  }
  getSummary() {
    this.covidService.getSummary().subscribe((res: any) => {
      console.log(res);
      this.dataSummaryFull = res;
      this.dataSummary.forEach(element => {
        if (element.id in res) {
          element.value = res[element.id];
        }
      });
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
