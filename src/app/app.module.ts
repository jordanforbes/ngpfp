import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ArtComponent } from './art/art.component';
import { AppProjectsComponent } from './app-projects/app-projects.component';
import { ArtCardComponent } from './art-card/art-card.component';
import { ArtDetailsComponent } from './art-details/art-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ArtComponent,
    AppProjectsComponent,
    ArtCardComponent,
    ArtDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
