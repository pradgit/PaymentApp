import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { MainComponent } from './pages/main/main.component';
import { PayTransactionComponent } from './pages/Transaction/pay-transaction/pay-transaction.component';
import { ReceiveTransactionComponent } from './pages/Transaction/receive-transaction/receive-transaction.component';
import { SignupComponent } from './Pages/user-account/signup/signup.component';
import { HelpComponent } from './Pages/help/help.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { PageNotFoundComponent } from './Pages/Error/page-not-found/page-not-found.component';

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