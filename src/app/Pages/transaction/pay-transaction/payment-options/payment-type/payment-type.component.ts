import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Card } from '../../../../../Shared/card.model';
import { paymentService } from '../../../../../Services/payment.service';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PaymentTypeComponent implements OnInit {

  @Input() payment: Card;

  constructor(private paymentService: paymentService) { }

  ngOnInit() {
  }

  onMethodSelection(payment){
    console.log(payment);
    this.paymentService.cardSelected.emit(payment);
  }

}