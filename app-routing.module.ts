import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ContactComponent } from './contact/contact.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { CryptoInfoComponent } from './crypto-info/crypto-info.component';
import { HashdexComponent } from './hashdex/hashdex.component';
import { PolygonComponent } from './polygon/polygon.component';
import { PostComponent } from './post/post.component';
import { SandboxComponent } from './sandbox/sandbox.component';

import { SolanaComponent } from './solana/solana.component';

const routes: Routes = [
 { path:'coin-list',component:CoinListComponent},
 {path:'create-blog',component:CreateBlogComponent},
 {path:'crypto-info',component:CryptoInfoComponent},
 {path:'company-info',component:CompanyInfoComponent},
 {path:'polygon',component:PolygonComponent},
 {path:'hashdex',component:HashdexComponent},
 {path:'solana',component:SolanaComponent},
 {path:'sandbox',component:SandboxComponent},
 {path:'contact',component:ContactComponent},
 {path:'post',component:PostComponent},
 {path:'',redirectTo:'coin-list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
