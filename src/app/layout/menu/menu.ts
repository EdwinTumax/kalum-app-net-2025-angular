import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule    
  ],
  templateUrl: './menu.html'
})
export class Menu {
 
  @Output() toggleSidenav = new EventEmitter<void>();
  
  constructor(private router: Router, private authService: AuthService) {

  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  loginLogout() {
    if(this.authService.isAuthenticated()) {   
      let username = this.authService.user.username;
      Swal.fire({
        title: 'Logout',
        text: `${username}, has cerrado sesión con éxito`,
        icon: 'success'
      }).then(result => {
        if(result.isConfirmed) {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }); 
    } 
  }
}
