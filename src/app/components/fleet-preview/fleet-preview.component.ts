import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { fleetVehicles, FleetVehicle } from '../../core/fleet-data';

@Component({
  selector: 'app-fleet-preview',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './fleet-preview.component.html',
  styleUrl: './fleet-preview.component.scss'
})
export class FleetPreviewComponent {
  vehicles: FleetVehicle[] = fleetVehicles;
}
