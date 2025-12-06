import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ExamenAdmsion } from '../model/examen-admsion.model';
import { AsignarExamenComponent } from './asignar-examen-component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-examen-admision-component',
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
    MatDialogModule],
  templateUrl: './examen-admision-component.html',
  styles: ``
})

export class ExamenAdmisionComponent implements OnInit {
  carreraId: any;
  displayColumns: string[] = ['number','fecha','acciones'];
  dataSource = new MatTableDataSource<ExamenAdmisionElement>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  examenesAdmision: ExamenAdmsion[] = [
    {
      examenId: '1',
      fecha: '2025-10-30T10:30:00'
    },
    {
      examenId: '2',
      fecha: '2025-11-15T14:30:00'
    },
    {
      examenId: '3',
      fecha: '2025-11-30T10:30:00'
    }
  ]

  constructor(private matDialog: MatDialog, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.carreraId = this.route.snapshot.paramMap.get('carreraId') ? this.route.snapshot.paramMap.get('carreraId') : '';
    this.getExamenesAdmision();
  }

  getExamenesAdmision(): void {
    this.getExamenAdmisionData(this.examenesAdmision);
  }

  getExamenAdmisionData(data: any) {
    const dataExamenesAdmsion: ExamenAdmisionElement[] = [];
    let examenesAdmisionList = data;
    let number = 1;
    examenesAdmisionList.forEach((element: ExamenAdmisionElement) => {
      element.number = number;
      dataExamenesAdmsion.push(element);
      number++;
    });
    this.dataSource = new MatTableDataSource<ExamenAdmisionElement>(dataExamenesAdmsion);
    this.dataSource.paginator = this.paginator;
  }

  openFormAsignarExamen(examenId: string) : void {
    this.matDialog.open(AsignarExamenComponent, {width: '450px', data: {examenId: examenId, carreraId: this.carreraId}});
  }

}

export interface ExamenAdmisionElement {
  number: number,
  examenId: string,
  fechaExamen: string 
}