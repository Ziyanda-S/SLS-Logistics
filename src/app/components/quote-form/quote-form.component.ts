import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { buildWhatsappUrl } from '../../core/business-config';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.scss'
})
export class QuoteFormComponent {
  form: FormGroup;
  submitted = false;

  transportOptions = ['General Freight', 'Tipper Transport', 'Dedicated Transport', 'Contract Transport', 'Other'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      companyName: ['', Validators.required],
      contactPerson: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      transportRequirement: ['', Validators.required],
      pickupLocation: [''],
      deliveryLocation: [''],
      estimatedLoad: [''],
      preferredDate: [''],
      additionalRequirements: ['']
    });
  }

  get f() {
    return this.form.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.form.invalid) return;

    // NOTE: no backend is connected yet. This currently routes the enquiry to WhatsApp
    // with the form details pre-filled. Wire up a real submit handler (email/API) later.
    const v = this.form.value;
    const message =
      `Hello SLS, I would like to request a transport quotation.\n` +
      `Company: ${v.companyName}\n` +
      `Contact: ${v.contactPerson}\n` +
      `Phone: ${v.phone}\n` +
      `Email: ${v.email}\n` +
      `Requirement: ${v.transportRequirement}\n` +
      (v.pickupLocation ? `Pickup: ${v.pickupLocation}\n` : '') +
      (v.deliveryLocation ? `Delivery: ${v.deliveryLocation}\n` : '') +
      (v.estimatedLoad ? `Estimated Load: ${v.estimatedLoad}\n` : '') +
      (v.preferredDate ? `Preferred Date: ${v.preferredDate}\n` : '') +
      (v.additionalRequirements ? `Notes: ${v.additionalRequirements}` : '');

    window.open(buildWhatsappUrl(message), '_blank');
  }

  continueOnWhatsapp() {
    const message = 'Hello SLS, I would like to request a transport quotation.';
    window.open(buildWhatsappUrl(message), '_blank');
  }
}
