import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BugService } from '../service/bug.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BugComponent } from '../bug.component';
import { ErrorHandleService } from 'src/app/error-handle/service/error-handle.service';
import { toast } from 'angular2-materialize';
import { Login } from '../service/model/login.model';

@Component({
  selector: 'app-bug-login',
  templateUrl: './bug-login.component.html',
  styleUrls: ['./bug-login.component.scss']
})
export class BugLoginComponent implements OnInit {

  @ViewChild('usernameInput')
  usernameInput: ElementRef;

  @ViewChild('passwordInput')
  passwordInput: ElementRef;

  formGroup: FormGroup;

  loginRequest: Login;
  loginResponse: any;

  constructor(private formBuilder: FormBuilder, private bugComponent: BugComponent,
    private service: BugService, private errorHandleService: ErrorHandleService) { }

  ngOnInit(): void {
    this.loginRequest = new Login;

    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  send() {
    this.loginRequest.username = this.formGroup.value.username;
    this.loginRequest.password = this.formGroup.value.password;
    this.loginRequest.returnSecureToken = true;

    if (this.usernameInput.nativeElement.className.includes("invalid")
      || this.passwordInput.nativeElement.className.includes("invalid")) {
      toast("Username is required!", 2000);
      toast("Password is required!", 2000);

    } else {

      this.service.login(this.loginRequest).subscribe(data => {
        this.loginResponse = data;
        this.bugComponent.bug.playerID = this.loginResponse.localId;
        console.log(this.loginResponse.localId);
        
        this.bugComponent.enableLogin = false;
        this.bugComponent.enableThankyou = true;
      },
        error => this.errorHandleService.throwToastException(error.error.message));
    }

  }

}
