import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  
  portfolio: { name: string, stack: string, description: string, descriptionDe: string, testlink: string, gitlink: string, img: string }[] = [
    { name: 'Join', stack: 'JavaScript | HTML | CSS | Firebase', description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', descriptionDe: 'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben und weisen Sie Benutzer und Kategorien zu.', testlink: 'https://join.wladimir-wagner.com', gitlink: 'https://github.com/WladimirWagner/Join', img: './assets/img/projects/join/join_1.png' },
    { name: 'El Pollo Loco', stack: 'JavaScript | HTML | CSS', description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.', descriptionDe: 'Jump n Run Spiel mit einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Soße zu finden, um die verrückte Henne zu besiegen.', testlink: 'https://pollo-loco.wladimir-wagner.com', gitlink: 'https://github.com/WladimirWagner/El-Pollo-Loco', img: './assets/img/projects/pollo_loco/polloloco.png' },
    { name: 'Pokedex', stack: 'JavaScript | HTML | CSS | API', description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.', descriptionDe: 'Basierend auf der PokeAPI, einer einfachen Bibliothek, die Pokemon-Informationen bereitstellt und katalogisiert.', testlink: 'https://pokedex.wladimir-wagner.com', gitlink: 'https://github.com/WladimirWagner/Pokedex', img: './assets/img/projects/pokedex/pokedex.png' }
  ];

  constructor(private translate: TranslateService) {}

  getDescription(project: { description: string, descriptionDe: string }): string {
    return this.translate.currentLang === 'de' ? project.descriptionDe : project.description;
  }
}
