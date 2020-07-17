import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { MainComponent } from './pages/main/main.component';
import { PayTransactionComponent } from './pages/Transaction/pay-transaction/pay-transaction.component';
import { ReceiveTransactionComponent } from './pages/Transaction/receive-transaction/receive-transaction.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent},
    { path: 'login', component: UserAccountComponent},
    { path: 'pay', component: PayTransactionComponent},
    { path: 'receive', component: ReceiveTransactionComponent}

];

@NgModule({
       imports: [
           RouterModule.forRoot(appRoutes),
       ],
       exports: [ RouterModule]
})
export class AppRoutingModule{
    
}