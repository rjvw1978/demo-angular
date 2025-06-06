import { Component } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  teamMembers;

  constructor(private aboutService: AboutService) {
      this.teamMembers = this.aboutService.getTeamMembers();
  }

}
