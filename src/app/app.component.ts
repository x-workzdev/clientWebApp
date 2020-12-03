import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-app';

  constructor(private router : Router) { }
  userId:string;
  companyName:any;
  condition=false;
  
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
   this.router.navigate(['/login']);
   }
 
  
}
