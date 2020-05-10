import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProduitDataService } from '../services/produit-data.service';
import { Router } from '@angular/router';
import { produit } from '../models/produit.class'
import { UxService } from '../services/ux/ux.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
// add page
export class AddProductPage implements OnInit {
  validation_form: FormGroup;  //https://angular.io/guide/form-validation
  _add_product = new produit();
  Myimage: string = "";
  validation_messages = {
    nom: [
      { type: "required", message: "required" },
      {
        type: "minlength",
        message: " min:5"
      }, {
        type: "maxlength",
        message: " max:20 "
      }

    ],
    prix: [
      { type: "required", message: "required." },
      {
        type: "minlength",
        message: " min:5"
      }, {
        type: "maxlength",
        message: " max:20 "
      },
      {

        type: "pattern", message: " Number"
      }
    ],


  }
  constructor(public ux: UxService, public route: Router, public formbuilder: FormBuilder, public productservices: ProduitDataService) {
    window.navigator.vibrate(100);

    const numericNumberReg = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
    this.validation_form = this.formbuilder.group({
      nom: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(5)

        ]
        )
      ),
      prix: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.pattern(numericNumberReg),
          Validators.maxLength(20),
          Validators.minLength(5)

        ]
        )),


    })






  }

  ngOnInit() {
  }
  addProduit(action: any): void {
    console.log(this.Myimage);
    if (confirm()) {
      this._add_product.User_id = 0,
        this._add_product.id = new Date().getTime(),
        this._add_product.image_url = this.Myimage,
        this._add_product.nom = action.nom,
        this._add_product.prix = action.prix,
        this.productservices.addProdui(this._add_product);
      this.ux.showToastController("Success !! ");
      this.route.navigateByUrl('/home');
    }
  }
  showImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];


    if (file.type.split('/')[0] !== 'image') {
      alert("warning !!");
      return false;
    }


    let reader = new FileReader();
    reader.onload = () => {
      this.Myimage = reader.result as string;


    };
    reader.readAsDataURL(file); //https://www.tutorialspoint.com/converting-images-to-a-base64-data-url-using-javascript
  }


}


