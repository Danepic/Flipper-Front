import { PlayerComponent } from './player/player.component';
import { BugComponent } from './bug/bug.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'player', component: PlayerComponent },
  { path: 'bug', component: BugComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
