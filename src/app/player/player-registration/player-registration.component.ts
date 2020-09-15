import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayerComponent } from '../player.component';
import { toast } from 'angular2-materialize';
import { PlayerService } from '../service/player.service';
import { ErrorHandleService } from 'src/app/error-handle/service/error-handle.service';

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.scss']
})
export class PlayerRegistrationComponent implements OnInit {

  @ViewChild('nicknameInput')
  nicknameInput: ElementRef;

  @ViewChild('passwordInput')
  passwordInput: ElementRef;

  @ViewChild('confirmPasswordInput')
  confirmPasswordInput: ElementRef;

  @ViewChild('nameInput')
  nameInput: ElementRef;

  @ViewChild('countryInput')
  countryInput: ElementRef;

  nickname: string;
  password: string;
  confirmPassword: string;
  name: string;
  country: string;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private playerComponent: PlayerComponent,
    private service: PlayerService, private errorHandleService: ErrorHandleService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      nickname: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      name: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  start() {
    this.nickname = this.formGroup.value.nickname;
    this.password = this.formGroup.value.password;
    this.confirmPassword = this.formGroup.value.confirmPassword;
    this.name = this.formGroup.value.name;
    this.country = this.formGroup.value.country;

    if (this.nicknameInput.nativeElement.className.includes("invalid")
      || this.passwordInput.nativeElement.className.includes("invalid")
      || this.confirmPasswordInput.nativeElement.className.includes("invalid")
      || this.nameInput.nativeElement.className.includes("invalid")
      || this.countryInput.nativeElement.className.includes("invalid")) {
      toast("Nickname is required!", 2000);
      toast("Password is required!", 2000);
      toast("Confirm Password is required!", 2000);
      toast("Country is required!", 2000);
      toast("Name Password is required!", 2000);

    } else {

      if (this.password != this.confirmPassword) {
        toast("'Confirm password' must be equal password'!", 2000);

      } else {
        this.playerComponent.player.nickname = this.nickname;
        this.playerComponent.player.pass = this.password;
        this.playerComponent.player.name = this.name;
        this.playerComponent.player.country = this.country;

        this.service.save(this.playerComponent.player)
          .subscribe(
            data => {
              this.playerComponent.toStepThree = false;
              this.playerComponent.enableThankyou = true;
            },
            error => {
              console.log(error.error.message)
              this.errorHandleService.throwToastException("Sorry, problem with server... Try again later please! ://")
            }
          );
      }
    }

  }

}
