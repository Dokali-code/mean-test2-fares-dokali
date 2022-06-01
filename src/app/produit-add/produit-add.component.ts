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

  constructor(private produitService: produitService) {}

  ngOnInit(): void {}

  addProduit(prodForm: NgForm) {
    this.produitService.getProduit();

    if (prodForm.invalid) {
      return;
    }
    alert("Produit Ajoutée");

    this.produitService.addProduit(
      new Produit(prodForm.value.prodId,prodForm.value.prodTitre,prodForm.value.prodDesc,prodForm.value.prodPrix)

    );

    prodForm.resetForm();

}}

