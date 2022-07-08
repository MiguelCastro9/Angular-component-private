import { MensagemPrivadaModule } from './mensagem-privada/mensagem-privada.module';
import { MensagemComponent } from './mensagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MensagemComponent
  ],
  imports: [
    CommonModule,
    MensagemPrivadaModule
  ],
  exports: [
    MensagemComponent
  ]
})
export class MensagemModule { }
