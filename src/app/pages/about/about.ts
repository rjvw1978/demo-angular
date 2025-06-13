import { Component } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  teamMembers:any=[];

  constructor(private aboutService: AboutService) {
          
    this.teamMembers = this.aboutService.getTeamMembers().subscribe({
        next: (data) => {
          console.log('Es un arreglo:', Array.isArray( data));
          console.log('Team members fetched successfully:', data);
          this.teamMembers = data;
        },
        error: (error) => {
          console.error('Error fetching team members:', error);
          
        }
      });
      
  }

}




