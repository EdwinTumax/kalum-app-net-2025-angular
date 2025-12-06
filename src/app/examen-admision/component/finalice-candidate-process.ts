import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogModule } from "@angular/material/dialog";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UpdateIdentification } from '../model/update-identification.model';
import { AuthService } from '../../auth/auth';
import Swal from 'sweetalert2';
import { T } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-finalice-candidate-process',
  imports: [MatDialogModule, CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule],
  templateUrl: './finalice-candidate-process.html',
  styles: ``
})
export class FinaliceCandidateProcess implements OnInit {  
  public finaliceCantidateProcessForm: FormGroup;
  updateIdentification: UpdateIdentification = new UpdateIdentification();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private authService: AuthService) {
    const noExpediente = this.activatedRoute.snapshot.paramMap.get('noExpediente');
    this.finaliceCantidateProcessForm = this.formBuilder.group({
      email: [this.authService.user != null ? this.authService.user.username : '', Validators.required],
      identityUser: [noExpediente != null ? noExpediente : '', Validators.required] 
    });    
  }

  ngOnInit(): void {
    
  }

  save() {
    this.updateIdentification.email = this.finaliceCantidateProcessForm.get('email')?.value;
    this.updateIdentification.identificationId = this.finaliceCantidateProcessForm.get('noExpediente')?.value;
    this.updateIdentification.type = 'NoExpediente';    
    Swal.fire({
      icon: 'success',
      title: 'Finalización del proceso de admisión',
      text: 'La información fue recibida exitosamente, sus datos han sido actualizados',
      footer: 'Kalum v1.0.0'
    }).then(response => {
      if(response.isConfirmed) {
        this.router.navigate(['dashboard']);
      }
    });
  }

}
