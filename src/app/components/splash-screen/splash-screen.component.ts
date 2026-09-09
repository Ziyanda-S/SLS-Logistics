import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { businessConfig } from '../../core/business-config';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit {
  @Output() finished = new EventEmitter<void>();

  business = businessConfig;
  isLeaving = false;
  logoFailed = false;

  private readonly HOLD_DURATION = 2500;
  private readonly FADE_DURATION = 500;

  onLogoError(): void {
    this.logoFailed = true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLeaving = true;
      setTimeout(() => this.finished.emit(), this.FADE_DURATION);
    }, this.HOLD_DURATION);
  }
}