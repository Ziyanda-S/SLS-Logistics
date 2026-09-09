import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss'
})
export class AboutPage {}
