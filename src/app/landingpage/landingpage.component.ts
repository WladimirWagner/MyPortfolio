import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  image!: string;
  imageIndex: number = 0;
  scrolldownImages: string[] = [
    './assets/img/arrow/arrow_0.png',
    './assets/img/arrow/arrow_1.png',
    './assets/img/arrow/arrow_2.png',
    './assets/img/arrow/arrow_3.png',
    './assets/img/arrow/arrow_4.png',
    './assets/img/arrow/arrow_5.png',
  ];

  ngOnInit() {
    setInterval(() => {
      this.arrowAnimatio();
    }, 200);
  }

  arrowAnimatio() {
    this.imageIndex = (this.imageIndex + 1) % this.scrolldownImages.length;
  }

}
