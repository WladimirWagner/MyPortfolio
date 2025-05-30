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
    { name: 'Next.js', src: './assets/icons/skills/icons8-nextjs-96.png' },
    { name: 'React', src: './assets/icons/skills/icons8-react-96.png' },
    { name: 'Angular', src: './assets/icons/skills/icons8-angular-96.png' },
    { name: 'TypeScript', src: './assets/icons/skills/icons8-typescript-96.png' },
    { name: 'JavaScript', src: './assets/icons/skills/icons8-javascript-96.png' },
    { name: 'Supabase', src: './assets/icons/skills/icons8-supabase-96.png' },
    { name: 'Git', src: './assets/icons/skills/icons8-git-96.png' },
    { name: 'HTML', src: './assets/icons/skills/icons8-html-5-96.png' },
    { name: 'CSS', src: './assets/icons/skills/icons8-css3-96.png' },
    { name: 'Tailwind', src: './assets/icons/skills/icons8-tailwind-css-96.png' }
  ];
}
