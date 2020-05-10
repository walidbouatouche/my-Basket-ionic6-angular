import { Injectable } from '@angular/core';
import { produit } from '../models/produit.class'

// https://angular.io/tutorial/toh-pt4
@Injectable({
  providedIn: 'root'
})
export class ProduitDataService {
  //  j ai  pas utiliser httpclient dans cette example
  produits_data = new produit();
  produit_DB: any = [];

  constructor() {

  }


  public getProduis() {
    let data = this.getDataFromStorage();;
    if (data) { return Promise.resolve(this.produits_data = data.sort()); }
    else { return Promise.reject(null); }
  }

  public addProdui(produit: produit): any {
    try {
      let data = this.getDataFromStorage();
      if (data) { data.push(produit); localStorage.setItem('produits', JSON.stringify(data)); }
      else { this.produit_DB = [produit]; localStorage.setItem('produits', JSON.stringify(this.produit_DB)); }
    }
    catch{
      alert(" 10mb");
      return false;

    }
  }

  public removeProdui(id: number) {
    let data = this.getDataFromStorage();
    const result_after_remove: any = data.filter(result => { return result.id != id });
    localStorage.removeItem('produits');
    localStorage.setItem('produits', JSON.stringify(result_after_remove));

  }

  public findById(id: number) {
    let data = this.getDataFromStorage();
    const result: any = data.filter(result => { return result.id === id });
    if (result) { return result }
    else { return null; }

  }


  public updateProduit(produit: produit) {
    const { id } = produit;
    let data = this.getDataFromStorage();

    if (data) {
      let new_data = data;;
      const pos = data.map((e) => e.id).indexOf(id);
      new_data[pos] = produit;
      localStorage.removeItem('produits');
      localStorage.setItem('produits', JSON.stringify(new_data));

    }
  }
  getDataFromStorage() {
    return JSON.parse(localStorage.getItem('produits')) //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  }

}
