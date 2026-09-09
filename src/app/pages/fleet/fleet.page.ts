import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { fleetVehicles, FleetVehicle } from '../../core/fleet-data';
import { buildWhatsappUrl, whatsappMessages } from '../../core/business-config';

@Component({
  selector: 'app-fleet-page',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './fleet.page.html',
  styleUrl: './fleet.page.scss'
})
export class FleetPage {
  vehicles: FleetVehicle[] = fleetVehicles;
  whatsappUrl = buildWhatsappUrl(whatsappMessages.general);
}
