import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { NewsfeedComponent } from './components/home-page/newsfeed/newsfeed.component';
import { TransactionsfeedComponent } from './components/home-page/transactionsfeed/transactionsfeed.component';
import { CryptoCoinListComponent } from './components/numismatics/crypto-coin-list/crypto-coin-list.component';
import { ViewCoinComponent } from './components/numismatics/view-coin/view-coin.component';
import { BlogComponent } from './components/project-info/blog/blog.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { ScholarlyHtmlComponent } from './components/project-info/scholarly-html/scholarly-html.component';
import { FooterComponent } from './components/site-frame/footer/footer.component';
import { HeaderComponent } from './components/site-frame/header/header.component';
import { MenuComponent } from './components/site-frame/menu/menu.component';
import { PriceChangePipe } from './pipes/price-change-color.pipe';

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
    ProjectInfoComponent,
    ScholarlyHtmlComponent,
    BlogComponent,
    PriceChangePipe
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
    FormsModule,
    HttpClientModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
