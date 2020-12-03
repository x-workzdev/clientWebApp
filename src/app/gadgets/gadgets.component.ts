import { Component, OnInit } from '@angular/core';
import { GadgetService } from './gadgets.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { GadgetDetails } from '../classes/Gadgets-details';
import { Router } from '@angular/router';
import { TicketDetails } from './TicketDetails';
import { CreateTicketService } from '../create-ticket/create-ticket.service';
import { CreateTicketDetails } from '../create-ticket/CreateTicket';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.scss']
})
export class ViewGadgetsComponent implements OnInit {
  currentUser:string;
  private createTicket = new CreateTicketDetails;
  constructor(private gadgetService: GadgetService,private createTicketService : CreateTicketService, private router : Router) { }

  gadgetsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  gadgets: Observable<GadgetService[]>;
  gadget : GadgetDetails = new GadgetDetails();
  deleteMessage=false;
  gadgetlist:any;
  isTicketRaised = false;   

  ngOnInit() {
    this.isTicketRaised=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
      };  
    this.currentUser = sessionStorage.getItem("currentUser");
    console.log('user in gadget='+this.currentUser);
    this.gadgetService.getGadgetsList(this.currentUser).subscribe(data =>{  
    this.gadgets = data;
    console.log('got data from console='+this.gadgets);
    this.dtTrigger.next();
    })
    
  }
  
  gadgetform=new FormGroup({
    emailId: new FormControl('' , Validators.required),
    model: new FormControl('' , Validators.required),
    serialNo: new FormControl('', Validators.required),
    mcType : new FormControl('' , Validators.required),
    dateOfAssigne : new FormControl('' , Validators.required),
    status : new FormControl('' , Validators.required),
    companyName :new FormControl('' , Validators.required),
    issue : new FormControl(),
  });

  GadgetSelected(gadget:any){
      console.log(gadget);
      this.gadget = gadget;
  }

  CreateTicket(createTicket){
    this.createTicket.companyName = this.CompanyName.value;
    this.createTicket.model = this.Model.value;
    this.createTicket.serialNo = this.SerialNo.value;
    this.createTicket.mcType = this.McType.value;
    this.createTicket.problem = this.Issue.value;

    this.createTicketService.sendCreateTicketDetails(this.createTicket).subscribe(
      response => {
        var records = JSON.stringify(response)     
        console.log("Response ="+records);
       
        var statusCode = response.body.statusCode;
        console.log('Response Code ='+statusCode);

        if(statusCode==201){
         alert(response.body.message);
        // this.router.navigate(['/tickets', response]);
         }

         else if (statusCode == 200) {
         this.isTicketRaised = true;
         console.log('ticket raised= '+this.isTicketRaised)
        // this.router.navigate(['/tickets', response]);
         }
        else
        {
         alert(response.body.message);
         //this.router.navigate(['/createTicket']);
        }
       error =>((error: any) => {
         console.log("Error in authentication");
         if (error.status === 500) {
             return Observable.throw(new Error(error.status));
         }
         else if (error.status === 400) {
             return Observable.throw(new Error(error.status));
         }
         else if (error.status === 409) {
             return Observable.throw(new Error(error.status));
         }
         else if (error.status === 406) {
             return Observable.throw(new Error(error.status));
            }
          });
        }
      );
  }

  
  
  get CompanyName(){
    return this.gadgetform.get('companyName');
  }

  get EmailId(){
    return this.gadgetform.get('emailId');
  }

  get SerialNo(){
    return this.gadgetform.get('serialNo');
  }
  
  get Model(){
    return this.gadgetform.get('model');
  }
  
  get McType(){
    return this.gadgetform.get('mcType');
  }

  get DateOfAssigne(){
    return this.gadgetform.get('dateOfAssigne');
  }

  get Status(){
    return this.gadgetform.get('status');
  }

  get Issue(){
    return this.gadgetform.get('issue');
  }

  changeisUpdate(){
    this.isTicketRaised=false;
  }
}
