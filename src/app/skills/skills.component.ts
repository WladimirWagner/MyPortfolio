import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  image!: string;
  
  skillIcons: { name: string, src: string }[] = [
    { name: 'Angular', src: './assets/icons/skills/angular.png' },
    { name: 'TypeScript', src: './assets/icons/skills/typescript.png' },
    { name: 'JavaScript', src: './assets/icons/skills/javascript.png' },
    { name: 'HTML', src: './assets/icons/skills/html.png' },
    { name: 'CSS', src: './assets/icons/skills/css.png' },
    { name: 'Firebase', src: './assets/icons/skills/firebase.png' },
    { name: 'Git', src: './assets/icons/skills/git.png' },
    { name: 'Scrum', src: './assets/icons/skills/scrum.png' },
    { name: 'REST-API', src: './assets/icons/skills/api.png' },
    { name: 'Material Design', src: './assets/icons/skills/material.png' }
  ];
}
