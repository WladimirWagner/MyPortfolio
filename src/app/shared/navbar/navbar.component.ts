import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuActive: boolean = false;
  imageIndex: number = 0;
  animationInterval: any;

  menuImages: string[] = [
    './assets/img/burger/burger_1.png',
    './assets/img/burger/burger_2.png',
    './assets/img/burger/burger_3.png',
    './assets/img/burger/burger_4.png',
    './assets/img/burger/burger_5.png'
  ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['en', 'de']);

    //Use english as basic language
    this.translate.use('en');

    // adjust language to browser language

    // const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang && browserLang.match(/en|de/) ? browserLang : 'en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  toggleMenu() {
    if (this.menuActive) {
      this.reverseMenuAnimation();
    } else {
      this.imageIndex = 0;
      this.forwardMenuAnimation();
    }
    this.menuActive = !this.menuActive;
  }

  forwardMenuAnimation() {
    let count = 0;
    const maxIndex = 4;
    
    this.animationInterval = setInterval(() => {
      if (count >= maxIndex) {
        clearInterval(this.animationInterval);
      } else {
        this.imageIndex++;
        count++;
      }
    }, 150);
  }

  reverseMenuAnimation() {
    let count = this.imageIndex;
    
    this.animationInterval = setInterval(() => {
      if (count <= 0) {
        clearInterval(this.animationInterval);
      } else {
        this.imageIndex--;
        count--;
      }
    }, 150);
  }

  closeMenu() {
    this.reverseMenuAnimation();
    this.menuActive = false;
  }
}