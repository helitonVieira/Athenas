import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import{ HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from  '@angular/material/snack-bar';

import { PipesModule } from './pipes/pipes.module';
//import { SearchbarPage } from './searchbar.page';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule ,
    MatSnackBarModule,
    PipesModule
    //,    SearchbarPage
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],

  bootstrap: [AppComponent],
})
export class AppModule {}
