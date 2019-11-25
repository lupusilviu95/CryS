import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { HeaderComponent } from './components/site-frame/header/header.component';
import { FooterComponent } from './components/site-frame/footer/footer.component';
import { MenuComponent } from './components/site-frame/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule} from "@angular/material/card";
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule} from "@angular/material/grid-list";
import { NewsfeedComponent } from './components/home-page/newsfeed/newsfeed.component';
import { TransactionsfeedComponent } from './components/home-page/transactionsfeed/transactionsfeed.component';
import { CryptoCoinListComponent } from './components/numismatics/crypto-coin-list/crypto-coin-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from "@angular/material/table";
import { ViewCoinComponent } from './components/numismatics/view-coin/view-coin.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NewsfeedComponent,
    TransactionsfeedComponent,
    CryptoCoinListComponent,
    ViewCoinComponent,
    ProjectInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule,
    MatTableModule,
    MatExpansionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
