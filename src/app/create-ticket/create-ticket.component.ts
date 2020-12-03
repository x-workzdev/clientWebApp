import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { CreateTicketService } from './create-ticket.service';
import { CreateTicketDetails } from './CreateTicket';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  private createTicketDetails = new CreateTicketDetails;
  CuurentcompanyName:any;
  constructor(private createTicketService : CreateTicketService, private router : Router) { }

  ngOnInit() {
    this.CuurentcompanyName = sessionStorage.getItem("companyName");
  }
    createTicketForm = new FormGroup({
    companyName: new FormControl('' , Validators.required),
    model: new FormControl('' , Validators.required),
    serialNo: new FormControl('', Validators.required),
    mcType : new FormControl('' , Validators.required),
    problem : new FormControl('' , Validators.required),
    clientComment: new FormControl(),
  });

CreateTicket(createTicket)
  {
      this.createTicketDetails.companyName = this.CuurentcompanyName;
      this.createTicketDetails.model = this.Model.value;
      this.createTicketDetails.serialNo = this.SerialNo.value;
      this.createTicketDetails.mcType = this.McType.value;
      this.createTicketDetails.problem = this.Problem.value;
      this.createTicketDetails.clientComment = this.ClientComment.value;
      
      console.log('client comment =='+this.createTicketDetails.clientComment)
      this.createTicketService.sendCreateTicketDetails(this.createTicketDetails).subscribe(
        response => {
          var records = JSON.stringify(response)     
          console.log("Response ="+records);
         
          var statusCode = response.body.statusCode;
          console.log('Response Code ='+statusCode);

          if(statusCode==201){
           alert(response.body.message);
           this.router.navigate(['/tickets', response]);
           }

           else if (statusCode == 200) {
           alert(response.body.message);
           this.router.navigate(['/tickets', response]);
           }
          else
          {
           alert(response.body.message);
           this.router.navigate(['/createTicket']);
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
    return this.createTicketForm.get('companyName');
  }
  get Model(){
    return this.createTicketForm.get('model');
  }
  get SerialNo(){
    return this.createTicketForm.get('serialNo');
  }
  get McType(){
    return this.createTicketForm.get('mcType');
  }
  get Problem(){
    return this.createTicketForm.get('problem');
  }

  get ClientComment(){
    return this.createTicketForm.get('clientComment');
  }

}
