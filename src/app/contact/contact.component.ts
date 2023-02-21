import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailServiceService } from '../email-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData!: FormGroup;
  constructor(private builder: FormBuilder, 
              private emailService: EmailServiceService,
              private _snackBar: MatSnackBar
  ) { }
  
  get name() {
    return this.formData.get('name');
  }

  get email() {
    return this.formData.get('email');
  }

  get body() {
    return this.formData.get('body');
  }

  ngOnInit(): void {
    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      body: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    if(this.formData.valid){
      this.emailService.onSubmit(this.formData);
      this.formData.reset();
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this._snackBar.open("Thanks for message", "X");
  }

}
