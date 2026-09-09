import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IndustriesComponent } from '../../components/industries/industries.component';

@Component({
  selector: 'app-industries-page',
  standalone: true,
  imports: [CommonModule, IonicModule, IndustriesComponent],
  templateUrl: './industries.page.html',
  styleUrl: './industries.page.scss'
})
export class IndustriesPage {}
