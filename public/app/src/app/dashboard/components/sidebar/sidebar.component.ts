import { Component, OnInit } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.css'],
  template: `
    <div class="col-md-3">
        <div id="sidebar">
            <div class="sidebar-logo">
                <div>
                    <fa-icon [icon]="faFile"></fa-icon>
                <div>
            </div>
            <div class="sidebar-menu">
                <ul>
                    <li>
                    <a href="#">IMAGES</a>
                    </li>
                    <li>
                    <a href="#">IMPORTANT</a>
                    </li>
                    <li>
                    <a href="#">ARCHIVES</a>
                    </li>
                    <li>
                    <a href="#">SNOOZE</a>
                    </li>
                    <li>
                    <a href="#">DELETED</a>
                    </li>
                    <li>
                    <a href="#">FRIENDS</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  `
})
export class SidebarComponent implements OnInit {

  faFile = faFile;

  constructor() {}

  ngOnInit() {}
}
