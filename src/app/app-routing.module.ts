import { PlayerComponent } from './player/player.component';
import { BugComponent } from './bug/bug.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'en/player', component: PlayerComponent },
  { path: 'en/bug', component: BugComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
