import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitDashboardComponent } from './produit-dashboard/produit-dashboard.component';
import { ProduitAddComponent } from './produit-add/produit-add.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitItemComponent } from './produit-item/produit-item.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import {MatIconModule} from '@angular/material/icon';
import { AuthentificationComponent } from './authentification/authentification.component';
@NgModule({
  declarations: [
    AppComponent,
    ProduitDashboardComponent,
    ProduitAddComponent,
    ProduitListComponent,
    ProduitItemComponent,
    ProduitDetailComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
