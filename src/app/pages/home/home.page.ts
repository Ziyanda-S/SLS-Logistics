import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeroComponent } from '../../components/hero/hero.component';
import { SolutionsComponent } from '../../components/solutions/solutions.component';
import { FleetPreviewComponent } from '../../components/fleet-preview/fleet-preview.component';
import { IndustriesComponent } from '../../components/industries/industries.component';
import { WhySlsComponent } from '../../components/why-sls/why-sls.component';
import { ContractCtaComponent } from '../../components/contract-cta/contract-cta.component';
import { QuoteFormComponent } from '../../components/quote-form/quote-form.component';
import { FleetShowcaseComponent } from '../../components/fleet-showcase/fleet-showcase.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    HeroComponent,
    SolutionsComponent,
    FleetPreviewComponent,
    IndustriesComponent,
    WhySlsComponent,
    ContractCtaComponent,
    QuoteFormComponent,
    FleetShowcaseComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {}