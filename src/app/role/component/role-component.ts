import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role-service';
import { Role } from '../model/role.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-role-component',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './role-component.html',
  styles: ``
})
export class RoleComponent implements OnInit {
  roles: any[] = [];


  constructor(private roleService: RoleService) {

  }

  ngOnInit(): void {
    this.roleService.getListRole().subscribe((data) => {
      this.roles = data as Role[];
      console.log(this.roles);
    });
  }

}
