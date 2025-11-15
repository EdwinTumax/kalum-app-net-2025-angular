import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
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
    MatDialogModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: [`./dashboard.css`]
})
export class Dashboard {
  carriers: Carrier[] = [
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
}

interface Carrier {
  carreraId: string;
  carrera: string;
  subTitulo: string;
  descripcion: string;
  imagen: string;
}
