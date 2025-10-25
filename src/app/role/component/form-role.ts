import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Role } from '../model/role.model';
import { RoleService } from '../role-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-role',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,

  ],
  templateUrl: './form-role.html',
  styles: ``
})
export class FormRole implements OnInit {
  public formRoleGroup: FormGroup;
  role: Role = new Role();

  constructor(private dialogRoleFormRef: MatDialogRef<FormRole>, private formBuilder: FormBuilder, private roleService: RoleService) {
    this.formRoleGroup = this.formBuilder.group({
      roleName: ['', Validators.required]
    })
  }
  ngOnInit(): void {

  }

  save() {
    this.role.name = this.formRoleGroup.get('roleName')?.value;
    this.roleService.createRole(this.role).subscribe((response:any) => {
      if(response.success){
        Swal.fire({
          icon: 'success',
          title: 'Roles',
          text: response.message,
          footer: 'Kalum App v1.0.0'
        }).then(handlerResult => {
          if(handlerResult.isConfirmed){
            this.dialogRoleFormRef.close(1);
          }
        });
      }
    });

  }

  onCancel() {
    this.dialogRoleFormRef.close(0);
  }

}
