import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Flex2htmlComponent } from './line/flex2html/flex2html.component';
import { DotvComponent } from './line/dotv/dotv.component';
import { LoginComponent } from './line/login/login.component';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './pipes/safe.pipe';
import { PuppeteerComponent } from './backend/puppeteer/puppeteer.component';

@NgModule({
  declarations: [
    AppComponent,
    Flex2htmlComponent,
    DotvComponent,
    LoginComponent,
    SafePipe,
    PuppeteerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
