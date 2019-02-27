import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  template: `
    <div id="dashboard">
      <div class="container-fluid">
        <app-sidebar></app-sidebar>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
