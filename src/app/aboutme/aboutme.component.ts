import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';

import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

}
