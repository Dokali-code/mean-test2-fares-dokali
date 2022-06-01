import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { produitService } from '../service/produit.service';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  produits: Produit[];

  constructor(private produitService: produitService) {
    this.produits = this.produitService.produits;
  }


  ngOnInit(): void {
  }

}
