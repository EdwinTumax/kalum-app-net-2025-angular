import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth';

@Component({
  selector: 'app-sidenav',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterModule    
  ],
  templateUrl: './sidenav.html'
})
export class Sidenav {

  constructor(private router: Router, private authService: AuthService) {

  }

  roles() {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/roles']);
    }
  }

}
