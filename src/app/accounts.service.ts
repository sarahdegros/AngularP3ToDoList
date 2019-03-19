import  { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'This To Do is Pending and of Very High Importance',
      status: 'Pending', 
      team1Member: 'Beyonce',
      team2Member: 'Madonna', 
      priority: 'Very high',
      comment: 'Comment...',

    },
    {
      name: 'This To Do is Reviewed and of High Importance',
      status: 'Reviewed',
      team1Member: 'Malala',
      team2Member: 'Eddy',
      priority: 'High',
      comment: 'Comment...',
    },

    {
      name: 'This To Do is To Be Reviewed and of Normal Importance',
      status: 'To be reviewed', 
      team1Member: 'Beyonce',
      team2Member: 'Madonna', 
      priority: 'Normal',
      comment: 'Comment...',

    },
    {
      name: 'To Do 2',
      status: 'Reviewed',
      team1Member: 'Malala',
      team2Member: 'Eddy',
      priority: 'Normal',
      comment: 'Comment...',
    },
    ]

  condition: false; 
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name:string, status:string, team1Member: string, team2Member: string, priority: string, 
    comment: string){
    this.accounts.push({
      name: name, status: status, team1Member: team1Member, team2Member: team2Member, priority: priority, 
      comment:comment});
    //this.loggingService.logStatusChange(status);
  
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    //this.loggingService.logStatusChange(status);
  }
}
