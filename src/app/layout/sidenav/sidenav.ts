import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-sidenav',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatDividerModule
  ],
  templateUrl: './sidenav.html'
})
export class Sidenav {

  constructor(private router: Router,public authService: AuthService) {

  }

  roles() {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/roles']);
    }
  }

  examenesAdmision() {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['examenes']);
    }
  }

  estatusExamenAdmision() {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['status-examen']);
    }
  }

  dashboard() {
    this.router.navigate(['dashboard']);
  }

}
