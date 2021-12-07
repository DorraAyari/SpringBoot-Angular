import { NgModule } from '@angular/core';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DepencesComponent } from './depences/depences.component';
import { AddingDepencesItemsComponent } from './adding-depences-items/adding-depences-items.component';
import { TransfersComponent } from './transfers/transfers.component';
import { AddingTransfersItemsComponent } from './adding-transfers-items/adding-transfers-items.component';
import { RevenusComponent } from './revenus/revenus.component';
import { AddingRevenusItemsComponent } from './adding-revenus-items/adding-revenus-items.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'depences', component: DepencesComponent },
  { path: 'adding', component: AddingDepencesItemsComponent },
  { path: 'transfer', component: TransfersComponent },
  { path: 'transferAdding', component: AddingTransfersItemsComponent },
  { path: 'revenu', component:RevenusComponent },
  { path: 'revenuAdding', component: AddingRevenusItemsComponent },
  { path: '**', component: NotfoundComponent },
  { path: 'user', component: UtilisateurComponent }
];
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],  declarations: [
    AboutComponent,
   ContactComponent,
   HomeComponent,
   NotfoundComponent,
   LoginComponent,
   RegisterComponent]
})
export class AppRoutingModule {

}
