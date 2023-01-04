import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UnitConverterComponent } from './unit-converter/unit-converter.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from "@angular/material/tabs";
import { UnitTabsComponent } from './unit-tabs/unit-tabs.component';
import {ClipboardModule} from "@angular/cdk/clipboard";
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from "ngx-google-analytics";
import {environment} from "../environment/environment";

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    UnitConverterComponent,
    UnitTabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    ClipboardModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga_id),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
