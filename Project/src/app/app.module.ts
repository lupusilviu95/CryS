import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule} from "@angular/material/card";
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule} from "@angular/material/grid-list";
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { TransactionsfeedComponent } from './components/transactionsfeed/transactionsfeed.component';
import { CryptoCoinListComponent } from './components/crypto-coin-list/crypto-coin-list.component';
import { SuiModule } from 'ng2-semantic-ui';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    NewsfeedComponent,
    TransactionsfeedComponent,
    CryptoCoinListComponent
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
    SuiModule,
    FlexLayoutModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
