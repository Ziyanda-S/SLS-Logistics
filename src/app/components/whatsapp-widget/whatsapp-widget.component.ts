import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoWhatsapp, closeOutline, chevronForwardOutline } from 'ionicons/icons';
import { buildWhatsappUrl, whatsappMessages } from '../../core/business-config';

@Component({
  selector: 'app-whatsapp-widget',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './whatsapp-widget.component.html',
  styleUrl: './whatsapp-widget.component.scss'
})
export class WhatsappWidgetComponent {
  panelOpen = false;

  options = [
    { label: 'Request a Quote', message: whatsappMessages.quote },
    { label: 'Discuss Contract Transport', message: whatsappMessages.contract },
    { label: 'General Enquiry', message: whatsappMessages.general },
    { label: 'Speak to SLS', message: whatsappMessages.speak }
  ];

  constructor() {
    addIcons({ logoWhatsapp, closeOutline, chevronForwardOutline });
  }

  togglePanel() {
    this.panelOpen = !this.panelOpen;
  }

  openWhatsapp(message: string) {
    window.open(buildWhatsappUrl(message), '_blank');
    this.panelOpen = false;
  }
}
