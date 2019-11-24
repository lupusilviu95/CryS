import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CryptoCoinListComponent} from "./components/crypto-coin-list/crypto-coin-list.component";
import {ViewCoinComponent} from "./components/view-coin/view-coin.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coins', component: CryptoCoinListComponent },
  { path: 'coins/:id', component: ViewCoinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
