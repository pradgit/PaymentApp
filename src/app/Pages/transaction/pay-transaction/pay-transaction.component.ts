import { Component, OnInit } from '@angular/core';
import { paymentService } from '../../../Services/payment.service';
import { Card } from '../../../Shared/card.model';

@Component({
  selector: 'app-pay-transaction',
  templateUrl: './pay-transaction.component.html',
  styleUrls: ['./pay-transaction.component.css']
})
export class PayTransactionComponent implements OnInit {

  selectedCard: Card;

  constructor(private paymentService: paymentService) { }

  ngOnInit() {
    
  }

}
