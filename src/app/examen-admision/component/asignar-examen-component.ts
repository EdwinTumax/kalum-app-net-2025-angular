import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AsignacionExamen } from '../model/asignacion-examen.model';
import { CarreraTecnica } from '../../carrera-tecnica/model/carrera-tecnica.model';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Jornada } from '../../jornada/model/jornada.model';
import { ExamenAdmsion } from '../model/examen-admsion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignar-examen-component',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  templateUrl: './asignar-examen-component.html',
  styles: ``
})

export class AsignarExamenComponent implements OnInit {
  
  carreras: CarreraTecnica[] = [
    {
      carreraId: '1',
      carrera: 'Electronica Industrial',
      subTitulo: 'Técnologico Kalum',
      descripcion: 'Curso en el área de <span class="text-color-kalum"> ELECTRONICA INDUSTRIAL</span> con estandares industriales a nivel mundial.',
      imagen: 'images/eleccom.jpg'
    },
    {
      carreraId: '2',
      carrera: 'Electricidad Industrial',
      subTitulo: 'Técnologico Kalum',
      descripcion: 'Curso en el área de <span class="text-color-kalum"> ELECTRICIDAD INDUSTRIAL</span> con estandares industriales a nivel mundial.',
      imagen: 'images/electricidad.jpg'
    },
    {
      carreraId: '3',
      carrera: 'Tics - Full Stack DOTNET Core',
      subTitulo: 'Técnologico Kalum',
      descripcion: 'Curso en el área de <span class="text-color-kalum">DESARROLLO DE SOFTWARE</span> con estandares industriales a nivel mundial.',
      imagen: 'images/tics.jpg'
    },
    {
      carreraId: '4',
      carrera: 'Mecanica Automotriz',
      subTitulo: 'Técnologico Kalum',
      descripcion: 'Curso en el área de <span class="text-color-kalum">MECANICA AUTOMOTRIZ</span> con estandares industriales a nivel mundial.',
      imagen: 'images/mecanica.jpg'
    }
  ];

  jornadas: Jornada[] = [
    {
      jornadaId: '1',
      descripcion: 'Jornada Matutina',
      prefijo: 'JM',     
    },
    {
      jornadaId: '2',
      descripcion: 'Jornada Verpertina',
      prefijo: 'JV',     
    }
  ];

  examenesAdmision: ExamenAdmsion[] = [
    {
      examenId: '1',
      fecha: '2025-11-30 10:30:00',
    },
    {
      examenId: '2',
      fecha: '2025-12-30 10:30:00',
    },
        {
      examenId: '3',
      fecha: '2026-01-10 10:30:00',
    },
  ];



  asignacionExamen: AsignacionExamen = new AsignacionExamen();

  public asignacionExamenForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRefAsignarExamen: MatDialogRef<AsignarExamenComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.asignacionExamenForm = this.formBuilder.group({
      apellidos: ['', Validators.required],
      nombres: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      carreraId: [ data != null ? data.carreraId :  '', Validators.required],
      examenId: [ data != null ? data.examenId : '', Validators.required],
      jornadaId: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  enviar(): void {
    this.asignacionExamen.apellidos = this.asignacionExamenForm.get('apellidos')?.value;
    this.asignacionExamen.nombres = this.asignacionExamenForm.get('nombres')?.value;
    this.asignacionExamen.direccion = this.asignacionExamenForm.get('direccion')?.value;
    this.asignacionExamen.telefono = this.asignacionExamenForm.get('telefono')?.value;
    this.asignacionExamen.email = this.asignacionExamenForm.get('email')?.value;
    this.asignacionExamen.carreraId = this.asignacionExamenForm.get('carreraId')?.value;
    this.asignacionExamen.jornadaId = this.asignacionExamenForm.get('jornadaId')?.value;
    this.asignacionExamen.examenId = this.asignacionExamenForm.get('examenId')?.value;
    Swal.fire({
      icon: 'success',
      title: 'Solictud de examen de admisión',
      text: 'La información fue recibida exitosamente, pronto se enviará un correo con la información necesario',
      footer: 'Kalum v1.0.0'
    }).then(response => {
      if(response.isConfirmed) {
        this.close();
      }
    });
  }

  close(): void {
    this.dialogRefAsignarExamen.close();
  }

}
