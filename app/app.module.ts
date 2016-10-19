import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";

import {routing} from "./app.routing";

import {AppComponent} from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DataTablePageComponent} from "./data-table-page/data-table-page.component";
import {DataTableComponent} from "./data-table-page/data-table.component";
import {GoogleMapPageComponent} from "./google-map-page/google-map-page.component";
import {GoogleMapComponent} from "./google-map-page/google-map.component";
import {MapSearchPageComponent} from "./map-search-page/map-search-page.component";
import {GenericService} from "./services/generic.service";
import {GoogleMapService} from "./services/google-map.service";
import {HeroService} from "./services/hero.service";
import {RealEstateService} from "./services/real-estate.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DataTablePageComponent,
    DataTableComponent,
    GoogleMapPageComponent,
    GoogleMapComponent,
    MapSearchPageComponent
    //TODO
  ],
  providers: [
    GenericService,
    GoogleMapService,
    HeroService,
    RealEstateService
    //TODO
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
