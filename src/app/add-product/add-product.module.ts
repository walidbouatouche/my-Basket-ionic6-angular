import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddProductPageRoutingModule } from './add-product-routing.module';
import { AddProductPage } from './add-product.page';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddProductPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [AddProductPage]
})
export class AddProductPageModule { }
