import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleService } from '../role-service';
import { Role } from '../model/role.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-role-component',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  templateUrl: './role-component.html',
  styles: ``
})
export class RoleComponent implements OnInit {
  displayColumns: string[] = ['number','name','acciones'];
  dataSource = new MatTableDataSource<RoleElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  constructor(private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.roleService.getListRole().subscribe((response) => {      
      this.getUserData(response.data);
    });
  }

  getUserData(data: any) {
    const dataRoles: RoleElement[] = [];
    let rolesList = data;
    let number = 1;
    rolesList.forEach((element: RoleElement) => {
      element.number = number;
      dataRoles.push(element);
      number++;
    });
    this.dataSource = new MatTableDataSource<RoleElement>(dataRoles);    
    this.dataSource.paginator = this.paginator;    
  }

}

export interface RoleElement {
  number: number,
  id: string,
  name: string
}
