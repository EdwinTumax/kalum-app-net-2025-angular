import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

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
 
  loggin: boolean = true;

  @Output() toggleSidenav = new EventEmitter<void>();
  
  constructor(private router: Router) {

  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  isLogedIn() {
    return this.loggin;
  }

  loginLogout() {
    if(this.isLogedIn()) {
      this.router.navigate(['/login']);
    } 
  }


}
