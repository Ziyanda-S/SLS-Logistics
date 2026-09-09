import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { callOutline, mailOutline, logoWhatsapp } from 'ionicons/icons';
import { QuoteFormComponent } from '../../components/quote-form/quote-form.component';
import { businessConfig, buildWhatsappUrl, whatsappMessages } from '../../core/business-config';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, IonicModule, QuoteFormComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss'
})
export class ContactPage {
  business = businessConfig;
  whatsappUrl = buildWhatsappUrl(whatsappMessages.general);

  constructor() {
    addIcons({ callOutline, mailOutline, logoWhatsapp });
  }
}
