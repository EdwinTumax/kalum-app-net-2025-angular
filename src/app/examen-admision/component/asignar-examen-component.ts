import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AsignacionExamen } from '../model/asignacion-examen.model';
import { CarreraTecnica } from '../../carrera-tecnica/model/carrera-tecnica.model';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

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

  asignacionExamen: AsignacionExamen = new AsignacionExamen();

  public asignacionExamenForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRefAsignarExamen: MatDialogRef<AsignarExamenComponent>) {
    this.asignacionExamenForm = this.formBuilder.group({
      apellidos: ['', Validators.required],
      nombres: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      carreraId: ['', Validators.required],
      examenId: ['', Validators.required],
      jornadaId: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  close(): void {
    this.dialogRefAsignarExamen.close();
  }

}
