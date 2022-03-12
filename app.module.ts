import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { FormsModule } from '@angular/forms';
import { CryptoInfoComponent } from './crypto-info/crypto-info.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { PolygonComponent } from './polygon/polygon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashdexComponent } from './hashdex/hashdex.component';
import { SolanaComponent } from './solana/solana.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    CreateBlogComponent,
    CryptoInfoComponent,
    CompanyInfoComponent,
    PolygonComponent,
    HashdexComponent,
    SolanaComponent,
    SandboxComponent,
    ContactComponent,
    PostComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
