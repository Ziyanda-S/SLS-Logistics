import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cubeOutline, layersOutline, repeatOutline, documentTextOutline } from 'ionicons/icons';
import { transportServices, TransportService } from '../../core/services-data';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  @Input() showHeading = true;
  services: TransportService[] = transportServices;

  constructor() {
    addIcons({ cubeOutline, layersOutline, repeatOutline, documentTextOutline });
  }
}
