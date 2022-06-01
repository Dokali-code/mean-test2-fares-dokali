import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { ProduitItemComponent } from './produit-item/produit-item.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
const routes: Routes = [
  { path: 'Liste', component: ProduitListComponent },
  { path: 'Item', component: ProduitItemComponent },
  { path: 'Detail', component: ProduitDetailComponent },
  { path: 'Authentification', component: AuthentificationComponent },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
