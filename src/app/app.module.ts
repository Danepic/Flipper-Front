import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { BugComponent } from './bug/bug.component';
import { PlayerBirthComponent } from './player/player-birth/player-birth.component';
import { PlayerRegistrationComponent } from './player/player-registration/player-registration.component';
import { PlayerFooterComponent } from './player/player-footer/player-footer.component';
import { PlayerHeaderComponent } from './player/player-header/player-header.component';
import { PlayerEmailComponent } from './player/player-email/player-email.component';

import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BugLoginComponent } from './bug/bug-login/bug-login.component';
import { BugFormComponent } from './bug/bug-form/bug-form.component';
import { DownloadComponent } from './download/download.component';
import { BugThankyouComponent } from './bug/bug-thankyou/bug-thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    BugComponent,
    PlayerBirthComponent,
    PlayerRegistrationComponent,
    PlayerFooterComponent,
    PlayerHeaderComponent,
    PlayerEmailComponent,
    BugLoginComponent,
    BugFormComponent,
    DownloadComponent,
    BugThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    MaterializeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
