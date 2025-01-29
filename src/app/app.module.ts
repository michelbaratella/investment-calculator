import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
  // BrowserModule: contains pipes, ngIf, ngFor, etc... usually declared on the root module.
  bootstrap: [AppComponent],
})
export class AppModule {}
