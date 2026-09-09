import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-fleet-showcase',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './fleet-showcase.component.html',
  styleUrl: './fleet-showcase.component.scss'
})
export class FleetShowcaseComponent {}