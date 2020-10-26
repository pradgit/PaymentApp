import { Component, OnInit } from '@angular/core';
import { paymentService } from '../../../../Services/payment.service';
import { Card } from '../../../../Shared/card.model';


@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {

  paymentMethods: Card[];
  selectedCard: Card;

  constructor(private paymentService: paymentService) { }

  ngOnInit() {
    this.paymentMethods = this.paymentService.getPaymentMethods();
    console.log(this.paymentService.getPaymentMethods());
    this.paymentService.cardSelected.subscribe((selection: Card) => {
      this.selectedCard = selection;
      console.log("Card is selected", selection);
  });

  }

  checkValue(event: any){
    console.log(event);
 }

}
