import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { MainComponent } from './pages/main/main.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { PayTransactionComponent } from './pages/Transaction/pay-transaction/pay-transaction.component';
import { ReceiveTransactionComponent } from './pages/Transaction/receive-transaction/receive-transaction.component';
import { PaymentOptionsComponent } from './pages/transaction/pay-transaction/payment-options/payment-options.component';
import { PaymentDetailsComponent } from './pages/transaction/pay-transaction/payment-details/payment-details.component';
import { PaymentTypeComponent } from './pages/transaction/pay-transaction/payment-options/payment-type/payment-type.component';
import { paymentService } from './Services/payment.service'
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './Components/filter/filter.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SignupComponent } from './Pages/user-account/signup/signup.component';
import { HelpComponent } from './Pages/help/help.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { JobsProfiles } from './Shared/JobsProfiles.model';
import { AvailableJobsService } from './Services/availableJobs.service';
import { PageNotFoundComponent } from './Pages/Error/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserAccountComponent,
    MainComponent,
    TransactionComponent,
    PayTransactionComponent,
    ReceiveTransactionComponent,
    PaymentOptionsComponent,
    PaymentDetailsComponent,
    PaymentTypeComponent,
    FilterComponent,
    SignupComponent,
    HelpComponent,
    CareersComponent,
    PageNotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    paymentService,
    AvailableJobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
