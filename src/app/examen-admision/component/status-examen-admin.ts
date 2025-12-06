import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultadoExamenAdmision } from '../model/resultado-examen-admision.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-status-examen-admin',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule],
  templateUrl: './status-examen-admin.html',
  styles: ``
})
export class StatusExamenAdmin implements OnInit {
  displayColumns: string[] = ['noExpediente', 'anio', 'descripcion', 'nota','acciones'];
  dataSource = new MatTableDataSource<ResultadoExamenAdmision>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  resultadoExamenAdmision: ResultadoExamenAdmision[] = [
    {
      noExpediente: 'EXP2026-0001',
      anio: '2026',
      descripcion: 'Pendiente resultado examen admisión',
      nota: 0
    }
  ]

  ngOnInit(): void {
    this.getResultadoExamenAdmision();
  }


  getResultadoExamenAdmision(): void {
    this.getResultadoExamenAdmisionData(this.resultadoExamenAdmision);
  }

  getResultadoExamenAdmisionData(data: any) {
    const dataResultadoExamenAdmision: ResultadoExamenAdmision[] = [];
    let resultadoExamenAdmisionList = data;
    resultadoExamenAdmisionList.forEach((element: ResultadoExamenAdmision) => {
      dataResultadoExamenAdmision.push(element);
    });
    this.dataSource = new MatTableDataSource<ResultadoExamenAdmision>(dataResultadoExamenAdmision);
    this.dataSource.paginator = this.paginator;
  }


}
