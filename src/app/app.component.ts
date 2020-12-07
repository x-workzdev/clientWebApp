import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-app';
  mobile:boolean = false;
  deviceInfo = null;
  userId:string;
  condition=false;
  companyName:any;

   isMobile:boolean = false;
   isTablet:boolean = false;
   isDesktopDevice:boolean = false;

  constructor(private router : Router,private deviceService: DeviceDetectorService) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();

    console.log(this.deviceInfo);
    console.log("isMobile = "+this.isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log("isTablet = "+this.isTablet);  // returns if the device us a tablet (iPad etc)
    console.log("isDesktopDevice = "+this.isDesktopDevice); // returns if the app is running on a Desktop browser.
  }
 

  countChangedHandler(event:boolean){
    this.condition=event
    console.log("Success Event Handling="+this.condition);
    this.userId = sessionStorage.getItem("currentUser");
    this.companyName = sessionStorage.getItem("companyName");
    console.log('current user='+this.userId)
  }

  logout()
  { 
   this.condition=false;
   window.sessionStorage.removeItem("currentUser");
   window.sessionStorage.removeItem("companyName");
   this.router.navigate(['/login']);
   }
 
  
}
