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
import { AuthService } from '../../auth/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private authService: AuthService, private router: Router) {

  }

  asignar(carreraId: string): void {
    if (this.authService.hasRole('ROLE_ACCOUNT')) {
      Swal.fire({
        icon: "warning",
        title: "Asignación del curso",
        text: "Vemos que es la primera vez que te asiganas un curso, antes debes de solicitar un examen de admisión, agradecemos que puedas seleccionar la fecha en el siguiente catalogo",
        footer: '<a href="#">Kalum v.1</a>'
      }).then(ressponse => {
        if (ressponse.isConfirmed) {
          this.router.navigate([`examenes/${carreraId}`]);
        }
      });
    }
  }

}

interface Carrier {
  carreraId: string;
  carrera: string;
  subTitulo: string;
  descripcion: string;
  imagen: string;
}
