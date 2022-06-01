import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../models/produit.model';
import { produitService } from '../service/produit.service';
@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent implements OnInit {

  constructor(private ProduitService: produitService) {}

  ngOnInit(): void {}

  addProduit(prodForm: NgForm) {
    this.ProduitService.getProduit();

    if (prodForm.invalid) {
      return;
    }
    alert("Produit Ajoutée");

    this.ProduitService.addProduit(
      new Produit(prodForm.value.prod_id,prodForm.value.prodtitre,prodForm.value.proddescription,prodForm.value.prodprix)

    );

    prodForm.resetForm();

}}

