import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestComponent } from '../app/rest/rest.component';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { CardComponent } from '../app/card/card.component';

const routes: Routes = [
    {path: '', redirectTo: 'app-rest', pathMatch: 'full'},
    {
        path:  'app-rest',
        component:  RestComponent
    },
    {
        path:  'app-heroes',
        component:  HeroesComponent
    },
    {
        path:  'app-card',
        component:  CardComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
