import { Component ,ViewChild} from '@angular/core';
import{UxService} from"./services/ux/ux.service";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar ,
    public ux:UxService
  ) {
    
    this.initializeApp();

    
  }


  alert(msg:string){
    alert(msg);
  }
  initializeApp() {
  
  
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.hide();
      this.splashScreen.hide();

    });
  }

  close(){
   if(confirm()){
    navigator['app'].exitApp();
   }
   else{
     this.ux.closeMenuController();
   }
 
  }
  go(){
    this.ux.closeMenuController();
  }
}
