import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  
  portfolio: { name: string, stack: string, description: string, link: string, img: string }[] = [
    { name: 'Join', stack: 'JavaScript | HTML | CSS | Firebase', description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', link: 'https://join-165.developerakademie.net/join-aktuelle-version/index.html', img: './assets/img/projects/join/join_1.png' },
    { name: 'El Pollo Loco', stack: 'JavaScript | HTML | CSS', description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.', link: 'http://wladimir-lange.developerakademie.net/Pollo%20Loco', img: './assets/img/projects/pollo_loco/polloloco.png' },
    { name: 'Pokedex', stack: 'JavaScript | HTML | CSS | API', description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.', link: 'http://wladimir-lange.developerakademie.net/Pokedex', img: './assets/img/projects/pokedex/pokedex.png' }
  ];
}
