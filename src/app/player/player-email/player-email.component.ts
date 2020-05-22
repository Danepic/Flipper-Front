import { Component, OnInit, ElementRef, ViewChild, Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Player } from '../service/model/player.model';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';
import { PlayerComponent } from '../player.component';

@Component({
  selector: 'app-player-email',
  templateUrl: './player-email.component.html',
  styleUrls: ['./player-email.component.scss']
})
export class PlayerEmailComponent implements OnInit {

  @ViewChild('emailInput')
  emailInput: ElementRef;

  email: string;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private playerComponent: PlayerComponent) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  start() {
    this.email = this.formGroup.value.email;

    if (this.emailInput.nativeElement.className.includes("invalid")) {
      toast("Email is required!", 2000);

    } else {
      this.playerComponent.player.email = this.email;
      this.playerComponent.toStepOne = false;
      this.playerComponent.toStepTwo = true;
    }
  }

}
