import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.html',
  styles: ``
})
export class Login implements OnInit {
  form!: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['',Validators.required]
    });
  }

  onSubmit() {
    if(this.form.valid) {
      Swal.fire({
        title: 'Login',
        icon: 'success',
        draggable: true
      }).then((result) => {
        if(result.isConfirmed) {  
          this.router.navigate(['/'])
        }
      });
    }
  }

}
