import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { buildWhatsappUrl, whatsappMessages } from '../../core/business-config';

@Component({
  selector: 'app-contract-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './contract-cta.component.html',
  styleUrl: './contract-cta.component.scss'
})
export class ContractCtaComponent {
  whatsappUrl = buildWhatsappUrl(whatsappMessages.contract);
}
