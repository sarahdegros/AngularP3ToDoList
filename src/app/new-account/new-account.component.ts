import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'], 
  
})
export class NewAccountComponent{
  priorityName: any;

  constructor(private accountsService: AccountsService) { }

  onCreateAccount(
    accountName: string, 
    accountStatus: string, 
    team1Member: string, 
    team2Member: string,
    priorityName: string, 
    comment: string){
      this.accountsService.addAccount(accountName, accountStatus, team1Member, team2Member, priorityName, comment);
  }
}
