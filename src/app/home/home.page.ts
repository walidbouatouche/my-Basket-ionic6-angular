import { Component, OnInit , ViewChild  } from '@angular/core';
import{ ProduitDataService} from'../services/produit-data.service'
import {produit} from'../models/produit.class' ;
import{ MyheaderComponent} from'../shared/myheader/myheader.component'
import{ AuthService} from'../services/auth/auth.service'
import{ UxService} from'../services/ux/ux.service'
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 public produits:produit ;
 @ViewChild( MyheaderComponent, { static: true }) private MyheaderComponent:  MyheaderComponent ;
constructor( public ux:UxService , public auth:AuthService ,public serv:ProduitDataService) {

  
  }

  ngOnInit(){

    this.serv.getProduis().then((data)=>{
    this.produits=data;
    console.log(data);
    }, Errers=>{
      console.log(Errers);
    })

            }


 remove(id:number)   {

   if( confirm()){  
 this.serv.removeProdui(+id);
 this.ux.showToastController(" Success !!");
 this.ngOnInit();
//this.MyheaderComponent.animate();
  
                 }

                      }

 
 onclick($event)     {

  // selement pour utiliser les notions de @output 
if($event===true){
  console.log("  (-_-)");

                  }
  

                      }


 logout(){
this.auth.logout();
          } 


 ionViewDidEnter() {
  this.ngOnInit();
                   }
                   
                   identify(index,item){
                     return item.id; 
                   }
 
 
}
