import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef;

  ngOnInit(): void {
    const context = this.canvas.nativeElement.getContext('2d');

    const myChart = new Chart(context, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 20, 30],
            backgroundColor: ['red', 'blue', 'green'],
          },
        ],
      },
      options: {
        // Opsi konfigurasi tambahan untuk chart
      },
    });
  }
}
