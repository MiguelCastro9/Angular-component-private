import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemPrivadaComponent } from './mensagem-privada.component';

describe('MensagemPrivadaComponent', () => {
  let component: MensagemPrivadaComponent;
  let fixture: ComponentFixture<MensagemPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemPrivadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
