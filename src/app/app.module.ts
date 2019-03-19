import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';

import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { TeammemberDirective } from './shared/teammember.directive';
import { AssignedToDirective } from './assigned-to.directive';



@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountComponent,
    TeammemberDirective,
    AssignedToDirective,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
