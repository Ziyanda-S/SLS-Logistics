import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { constructOutline, cogOutline, earthOutline, leafOutline, storefrontOutline } from 'ionicons/icons';
import { industries, Industry } from '../../core/industries-data';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {
  items: Industry[] = industries;

  constructor() {
    addIcons({ constructOutline, cogOutline, earthOutline, leafOutline, storefrontOutline });
  }
}
