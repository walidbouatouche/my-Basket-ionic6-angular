import { Component, OnInit } from '@angular/core';
import{ AuthService} from'../services/auth/auth.service';
import{ UxService} from'../services/ux/ux.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public  ux:UxService,public authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.ux.showLoadingController() ;
    setTimeout( () => {
      this.ux.hideLoadingController();
      this.authService.login(); 
}, 1000); 






}
async ionViewWillEnter() {
 this.ux.prepareLoadingController("login");
}
}
