import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PlayerComponent } from '../player.component';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-player-birth',
  templateUrl: './player-birth.component.html',
  styleUrls: ['./player-birth.component.scss']
})
export class PlayerBirthComponent implements OnInit {

  @ViewChild('dayInput')
  dayInput: ElementRef;

  @ViewChild('monthInput')
  monthInput: ElementRef;

  @ViewChild('yearInput')
  yearInput: ElementRef;

  day: string;
  year: string;
  month: string;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private playerComponent: PlayerComponent) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      day: ['', Validators.required],
      year: ['', Validators.required],
      month: ['', Validators.required]
    });
  }

  start() {
    this.day = this.formGroup.value.day;
    this.month = this.formGroup.value.month;
    this.year = this.formGroup.value.year;

    if (this.dayInput.nativeElement.className.includes("invalid") 
    && this.monthInput.nativeElement.className.includes("invalid")
    && this.yearInput.nativeElement.className.includes("invalid")) {
      toast("Day is required!", 2000);
      toast("Month is required!", 2000);
      toast("Year is required!", 2000);

    } else {
      if(parseInt(this.month) < 10){
        this.month = "0" + this.month;
      }

      this.playerComponent.player.birth = this.year + "-" + this.month + "-" + this.day;
      this.playerComponent.toStepTwo = false;
      this.playerComponent.toStepThree = true;
    }

  }

}
