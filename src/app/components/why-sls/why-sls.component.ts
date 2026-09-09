import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { shieldCheckmarkOutline, chatbubblesOutline, optionsOutline, trendingUpOutline } from 'ionicons/icons';

@Component({
  selector: 'app-why-sls',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './why-sls.component.html',
  styleUrl: './why-sls.component.scss'
})
export class WhySlsComponent {
  points = [
    { title: 'Reliable', text: 'We understand that dependable transportation is essential to business operations.', icon: 'shield-checkmark-outline' },
    { title: 'Professional', text: 'Clear communication and professional service from enquiry to delivery.', icon: 'chatbubbles-outline' },
    { title: 'Flexible', text: 'Transport solutions designed around individual business requirements.', icon: 'options-outline' },
    { title: 'Built to Grow', text: 'SLS is developing a growing fleet and expanding its transport capabilities to serve more customers.', icon: 'trending-up-outline' }
  ];

  constructor() {
    addIcons({ shieldCheckmarkOutline, chatbubblesOutline, optionsOutline, trendingUpOutline });
  }
}
