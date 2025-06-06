import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  teamMembers = [
    { id: 1, name: "Rosario", role: "Scrum Master", imageUrl: "imagenes/team/member2.jpg" },
    { id: 2, name: "Ana", role: "Developer", imageUrl: "imagenes/team/member2.jpg" },
    { id: 3, name: "Joaquin", role: "Developer", imageUrl: "imagenes/team/member1.jpg" },
    { id: 4, name: "Matias", role: "Developer", imageUrl: "imagenes/team/member1.jpg" }
  ];

  getTeamMembers() {
    return this.teamMembers;
  }
}
