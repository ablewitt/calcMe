import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnitTabsComponent} from "./unit-tabs/unit-tabs.component";

const routes: Routes = [
  { path: 'unitconverter', component: UnitTabsComponent },
  { path: '', component: UnitTabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
