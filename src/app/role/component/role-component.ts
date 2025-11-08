import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { RoleService } from '../role-service';
import { Role } from '../model/role.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormRole } from './form-role';
import Swal from 'sweetalert2';

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
    MatPaginatorModule,
    MatDialogModule
  ],
  templateUrl: './role-component.html',
  styles: ``
})
export class RoleComponent implements OnInit {

  displayColumns: string[] = ['number', 'name', 'acciones'];
  dataSource = new MatTableDataSource<RoleElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  constructor(private roleService: RoleService, private dialogForm: MatDialog) {

  }

  ngOnInit(): void {
    this.getRoles()
  }

  getRoles() {
    this.roleService.getListRole().subscribe((response) => {
      this.getUserData(response.data);
    });
  }

  openFormDialog() {
    const dialogFormRoleRef = this.dialogForm.open(FormRole, { width: '450px' })
      .afterClosed()
      .subscribe(handlerResult => {
        if (handlerResult == 1) {
          Swal.fire('Roles', 'El registro fue creado exitosamente', 'success').then((result) => {
            if (result.isConfirmed) {
              this.getRoles();
            }
          });
        }
      });

  }

  editRole(id: string, name: string) {
    this.dialogForm.open(FormRole, { width: '450px', data: { roleId: id, roleName: name } })
      .afterClosed().subscribe(handlerResult => {
        if (handlerResult == 1) {
          Swal.fire('Roles', 'El registro fue actualizado correctamente', 'success').then((result) => {
            if (result.isConfirmed) {
              this.getRoles();
            }
          });
        } else if (handlerResult == 2) {
          Swal.fire('Roles', 'Hubo un error al momento de actualizar el registro', 'error').then((result) => {
            if (result.isConfirmed) {
              console.log('Error');
            }
          });
        }
      });
  }

  deleteRole(id: string) {
    Swal.fire({
      title: "¿Está seguro de eliminar el registro?",
      text: "El cambio no podrá ser revertido!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.roleService.deleteRole(id).subscribe(handlerResult => {
          Swal.fire({
            title: "Eliminado!",
            text: `Usted ha eliminar el registro con id ${id}`,
            icon: "success"
          }).then(result => {
            this.getRoles();
          });
        });
      }
    });
  }

  searchRoleById(id: string) {
    this.roleService.searchById(id).subscribe({
      next: (handlerResult: any) => {
        if (id && id != undefined && id.length > 0) {
          if (handlerResult.success) {
            const result = { number: 1, ...handlerResult.data }
            const dataRoles: RoleElement[] = [result];
            this.dataSource = new MatTableDataSource<RoleElement>(dataRoles);
            this.dataSource.paginator = this.paginator;
          } else {
            this.getRoles();
          }
        } else {
          this.getRoles();
        }
      },
      error: (e: any) => {
        Swal.fire('Roles', e.error.message ? `${e.error.message}` : ` No se eoncontro ningún registro con el id ${id}`, 'error').then((result) => {
          if (result.isConfirmed) {
            console.log('Error');
          }
        });
      }
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
