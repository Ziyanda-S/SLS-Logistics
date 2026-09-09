import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cubeOutline, layersOutline, repeatOutline, documentTextOutline } from 'ionicons/icons';
import { transportServices, TransportService } from '../../core/services-data';
import { buildWhatsappUrl, whatsappMessages } from '../../core/business-config';

@Component({
  selector: 'app-solutions-page',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './solutions.page.html',
  styleUrl: './solutions.page.scss'
})
export class SolutionsPage {
  services: TransportService[] = transportServices;
  whatsappUrl = buildWhatsappUrl(whatsappMessages.general);

  constructor() {
    addIcons({ cubeOutline, layersOutline, repeatOutline, documentTextOutline });
  }
}
