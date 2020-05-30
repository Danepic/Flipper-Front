import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BugComponent } from '../bug.component';
import { ErrorHandleService } from 'src/app/error-handle/service/error-handle.service';
import { BugService } from '../service/bug.service';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.scss']
})
export class BugFormComponent implements OnInit {

  @ViewChild('commentsInput')
  commentsInput: ElementRef;

  @ViewChild('gameInput')
  gameInput: ElementRef;

  @ViewChild('platformInput')
  platformInput: ElementRef;

  comments: string;
  gameID: string;
  platform: string;

  formGroup: FormGroup;

  platformSelect: any;
  gameSelect: any;

  constructor(private formBuilder: FormBuilder, private bugComponent: BugComponent,
    private service: BugService, private errorHandleService: ErrorHandleService) { }

  ngOnInit(): void {
    this.service.getPlatforms().subscribe(data => this.platformSelect = data,
      error => this.errorHandleService.throwToastException(error.error.message));

    this.service.getGames().subscribe(data => this.gameSelect = data,
      error => this.errorHandleService.throwToastException(error.error.message));

    this.initForm()
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      comments: ['', Validators.required],
      gameID: ['', Validators.required],
      platform: ['', Validators.required],
    });
  }

  send() {
    this.comments = this.formGroup.value.comments;
    this.gameID = this.formGroup.value.gameID;
    this.platform = this.formGroup.value.platform;

    if (this.commentsInput.nativeElement.className.includes("invalid")
      || this.gameInput.nativeElement.className.includes("invalid")
      || this.platformInput.nativeElement.className.includes("invalid")) {
      toast("Comments is required!", 2000);
      toast("Game is required!", 2000);
      toast("Platform is required!", 2000);

    } else {

      this.bugComponent.bug.comments = this.comments;
      this.bugComponent.bug.gameID = this.gameID;
      this.bugComponent.bug.platform = this.platform;

      this.bugComponent.enableForm = false;
      this.bugComponent.enableLogin = true;
    }

  }

}
