import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { buildWhatsappUrl, whatsappMessages } from '../../core/business-config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  whatsappUrl = buildWhatsappUrl(whatsappMessages.quote);
}
