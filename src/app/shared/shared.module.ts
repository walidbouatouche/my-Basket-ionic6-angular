import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyheaderComponent } from './myheader/myheader.component'
import { IonicModule } from '@ionic/angular'
// ionic shared component module
@NgModule({
  declarations: [MyheaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [MyheaderComponent]
})
export class SharedModule { }
