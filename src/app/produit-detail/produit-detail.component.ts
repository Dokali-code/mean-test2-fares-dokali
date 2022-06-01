import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';
import { produitService } from '../service/produit.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  Produit: Produit | undefined;

  constructor(private route : ActivatedRoute, private produitService:produitService) { }

  ngOnInit(): void {
    const RouteParam = this.route.snapshot.paramMap;
    console.log(RouteParam.get("etitre"));
    const prod=RouteParam.get('etitre');
    this.Produit = this.produitService.produits.find((e) => e.titre === prod);
  }

}
