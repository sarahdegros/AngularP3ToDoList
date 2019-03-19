import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent{
 @Input() account: {name: string, status: string, team1Member: string, team2Member: string, 
  priority: string, comment : string};
 @Input() id: number;

  constructor(
    private accountsService: AccountsService, 
    private loggingService: LoggingService) { }

 
  onSetTo(status: string){
    this.accountsService.updateStatus(this.id, status);
      }  
      
      
  /* Buttons*/
  isPending: boolean = false;
  isInProgress: boolean = false; 
  toBeReviewed: boolean = false;  
  isReviewed: boolean = false;  

  /*Buttons on click functions*/
    isPendingButton(){
  this.isPending = !this.isPending;
  this.isInProgress = false; 
  this.toBeReviewed = false; 
  this.isReviewed = false; 
}
  inProgressButton(){
  this.isInProgress = !this.isInProgress;
  this.isPending = false;
  this.toBeReviewed = false; 
  this.isReviewed = false; 
  };

  toBeReviewedButton(){
    this.toBeReviewed = !this.toBeReviewed; 
    this.isPending = false;
    this.isInProgress = false; 
    this.isReviewed  = false; 
  }
   
  isReviewedButton(){
    this.isReviewed = !this.isReviewed; 
    this.isPending = false;
    this.isInProgress = false; 
    this.toBeReviewed  = false; 
  } 

    }

