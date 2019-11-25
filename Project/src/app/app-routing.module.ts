import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home-page/home/home.component";
import {CryptoCoinListComponent} from "./components/crypto-coin-list/crypto-coin-list.component";
import {ViewCoinComponent} from "./components/view-coin/view-coin.component";
import {ProjectInfoComponent} from "./components/project-info/project-info.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'numismatics', component: CryptoCoinListComponent },
  { path: 'numismatics/:id', component: ViewCoinComponent },
  { path: 'project-info', component: ProjectInfoComponent },

  // Route unrecognised routes to the home page
  { path: '*', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
