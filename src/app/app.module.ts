import { MensagemModule } from './mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MensagemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
