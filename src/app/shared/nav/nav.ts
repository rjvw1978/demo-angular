import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

  isAutenticated: boolean = false;

  constructor(private authService: AuthService) {
      this.authService.isAuthenticated().subscribe({
      next: (isAuthenticated) => {
        console.log('Authentication status:', isAuthenticated);
        if (isAuthenticated != "{}") {
          this.isAutenticated = true;
            
        }   
        else {
          this.isAutenticated = false;
        }   
      },
      error: (error) => {
        this.isAutenticated = false;
        alert('Error checking authentication status');
      }
    });
  }



}
