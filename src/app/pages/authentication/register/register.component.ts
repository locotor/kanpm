import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'kanpm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  isPasswordHide = true;
  registerForm = this.fb.group({
    userName: ['', [
      Validators.required,
      Validators.maxLength(126)
    ]],
    mobileNumber: [''],
    password: [''],
    passwordConfirm: [''],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
