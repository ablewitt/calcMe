import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-unit-tabs',
  templateUrl: './unit-tabs.component.html',
  styleUrls: ['./unit-tabs.component.scss']
})
export class UnitTabsComponent {

  constructor(private title : Title) {
    this.title.setTitle("Unit Converter | calcMe.app")
  }

}
