import { Injectable } from '@angular/core';
import{produit} from'../models/produit.class'
import { map, filter } from 'rxjs/operators';
import { of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitDataService {
//  j ai  pas utiliser httpclient dans cette example
  produits_data=new produit() ;
  produit_DB:any=[];
  nums$ = of([0,1,2,3,4,5,6,7,8,9]);
  constructor() {
 
   }


 public getProduis(){
 let data =this.getDataFromStorage(); ;
 if(data){return Promise.resolve(this.produits_data=data.sort());}
 else{return Promise.reject(null);}
 }

 public addProdui(produit:produit):any
 {
   try{

 
 let data =this.getDataFromStorage(); 
 if(data){ data.push(produit);localStorage.setItem('produits',JSON.stringify(data));}
 else{this.produit_DB=[produit] ;localStorage.setItem('produits',JSON.stringify(this.produit_DB)); }
  }
  catch{
    alert(" 10mb");
    return false;

  } 
}

 public removeProdui(id:number)
 {
 let data =this.getDataFromStorage();
 const result_after_remove:any=data.filter(result=>{return result.id != id});
 localStorage.removeItem('produits');
 localStorage.setItem('produits',JSON.stringify(result_after_remove));

 }



 public findById(id:number)
 {
  let data =this.getDataFromStorage();  
  const result:any=data.filter(result=>{return result.id === id});
  if(result){return  result}
  else{return null;}

 }

 

 nullNumber(){
  this.nums$.pipe(map(n => {return n.filter(element=>{return element ===null});})).subscribe(res=>{console.log(res);},err=>{console.log("number not null");})
 }

public updateProduit(produit:produit)
{
  const{id}=produit ;
let data =this.getDataFromStorage(); 

 if(data){ 
   
  let new_data=data; ;
  const  pos = data.map((e)=> e.id).indexOf(id);
  new_data[pos]=produit ;

localStorage.removeItem('produits');
localStorage.setItem('produits',JSON.stringify(new_data));

}
}

getDataFromStorage(){

  return JSON.parse(localStorage.getItem('produits'))
}

}
