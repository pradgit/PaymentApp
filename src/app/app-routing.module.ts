import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Pages/main/main.component';
import { PayTransactionComponent } from './Pages/transaction/pay-transaction/pay-transaction.component';
import { ReceiveTransactionComponent } from './Pages/transaction/receive-transaction/receive-transaction.component';
import { SignupComponent } from './Pages/user-account/signup/signup.component';
import { HelpComponent } from './Pages/help/help.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { PageNotFoundComponent } from './Pages/error/page-not-found/page-not-found.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { TransactionComponent } from './Pages/transaction/transaction.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent},
    { path: 'login', component: UserAccountComponent},
    { path: 'pay', component: PayTransactionComponent},
    { path: 'receive', component: ReceiveTransactionComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'help', component: HelpComponent},
    { path: 'careers', component: CareersComponent},
    { path: 'transaction', component: TransactionComponent},
    { path: '**', component: PageNotFoundComponent}

];

@NgModule({
       imports: [
           RouterModule.forRoot(appRoutes),
       ],
       exports: [ RouterModule]
})
export class AppRoutingModule{
    
}