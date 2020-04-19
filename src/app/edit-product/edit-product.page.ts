import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute ,Router} from"@angular/router";
import{ProduitDataService} from'../services/produit-data.service';
import{produit} from'../models/produit.class'
import{FormBuilder,FormGroup,Validators, FormControl} from'@angular/forms' ;
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
 produit=new produit();
 validation_form:FormGroup;
 _edit_produi=new produit();
 image_url:string;
 

 validation_messages={
  nom:[
    { type: "required", message: "required" },
    {
      type: "minlength",
      message: " min:5"
    }, {
      type: "maxlength",
      message: " max:20 "
    }


  ] ,
  prix:[
    { type: "required", message: "required." },
    {
      type: "minlength",
      message: " min:5"
    }, {
      type: "maxlength",
      message: " max:20 "
    } ,
    {

    
    type: "pattern", message: " Number"
    }
  ],
 }
  constructor(  public router:Router ,public formBuilder:FormBuilder , public serv:ProduitDataService, public route:ActivatedRoute) {
   this.prepareForm( "",null);
  
    


   }

  ngOnInit() {

 

  }


 

  prepareForm( nom:string |"" ,prix:number| null){
 
    const numericNumberReg= '^-?[0-9]\\d*(\\.\\d{1,2})?$';
    const id= +this.route.snapshot.paramMap.get('id');
    this.produit= this.serv.findById(id) ;
    const produit=this.produit;
   this.image_url=produit[0].image_url ;
    console.log(produit[0].prix) 
    this.validation_form= this.formBuilder.group({

       nom: new FormControl(produit[0].nom,
        Validators.compose([
          Validators.required ,
          Validators.maxLength(20),
          Validators.minLength(5),
        ])
       
       
       ) ,

       prix:new FormControl(produit[0].prix,
        Validators.compose([
          Validators.required ,
          Validators.pattern(numericNumberReg) ,
          Validators.maxLength(20) ,
          Validators.minLength(5)
        ])
       )


    })

  }

  showImage(event:Event){
    
    const file=(event.target as  HTMLInputElement).files[0] ;
    if(file.type.split('/')[0]!=='image'){
    alert("Ajouter une image valide");
    return false
    }
    let reader= new FileReader();
     reader.onload=()=>{
     this.image_url= reader.result as string;
     }
    reader.readAsDataURL(file);
    
     }



     editProduct(action:any){
       this._edit_produi.image_url=this.image_url;
       this._edit_produi.nom=action.nom;
       this._edit_produi.prix=action.prix ;
       this._edit_produi.id=this.produit[0].id;
       this._edit_produi.User_id=20 ;
       this.serv.updateProduit(this._edit_produi);
       this.router.navigateByUrl('/home');
  

     }

}
