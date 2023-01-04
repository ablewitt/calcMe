import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnitTabsComponent} from "./unit-tabs/unit-tabs.component";
import {InfoComponent} from "./info/info.component";

const routes: Routes = [
  { path: 'unitconverter', component: UnitTabsComponent },
  { path: 'info', component: InfoComponent },
  { path: '', component: UnitTabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
