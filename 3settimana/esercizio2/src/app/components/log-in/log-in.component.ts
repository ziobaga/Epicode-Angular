import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: this.fb.control(null, [Validators.required]),
      cognome: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null),
      confermaPassword: this.fb.control(null),
      genere: this.fb.control(null),
      file: this.fb.control(null),
      username: this.fb.control(null),
      biografia: this.fb.control(null),
    });
  }

  invia() {
    console.log(this.form);
  }
}
