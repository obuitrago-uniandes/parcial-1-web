import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlantsModule } from './plants/plants.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, PlantsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
