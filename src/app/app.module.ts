import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import 'hammerjs';

// import { RouterModule, Routes, Router } from '@angular/router';

// Animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material';
import { RestComponent } from './rest/rest.component';

// Routing
import { AppRoutingModule } from '../app/app-routing.module';

// Para consumir apis
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';

// const appRoutes: Routes = [
//   {path: 'app-rest', component: RestComponent},
//   {path: 'app-heroes', component: HeroesComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    RestComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
    // RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
