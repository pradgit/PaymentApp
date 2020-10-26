import { Component, OnInit } from '@angular/core';
import { paymentService } from '../../../../Services/payment.service';
import { Card } from '../../../../Shared/card.model';



@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  selectedCard: Card;


  constructor(private paymentService: paymentService) {
      
   }

  ngOnInit() {
    this.selectedCard = new Card("sample");
    this.paymentService.cardSelected.subscribe((selection: Card) => {
      this.selectedCard = selection;
      console.log("Card selected", this.selectedCard);
  });
  }

  

}
