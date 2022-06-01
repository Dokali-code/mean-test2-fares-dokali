import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';

@Injectable({providedIn: 'root'})
export class produitService {
  
  
    produits=[
      new Produit('p1','pc portable','I7',2000),
      new Produit('p2','ordinateur portable','I5',2500),
      new Produit('p3','smartphone','4Go Ram',900)
    ]
    
  constructor(private http:HttpClient) { }
  getProduit(){
    this.http.get<Produit[]>('http://localhost:4000/api/produits')
    .subscribe((responseData) => {
      console.log(responseData);
      this.produits= responseData;
    });
  }
  addProduit (e:Produit){
    this.produits.push(e);
  }


  }

