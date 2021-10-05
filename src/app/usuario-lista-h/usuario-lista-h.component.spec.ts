import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListaHComponent } from './usuario-lista-h.component';

describe('UsuarioListaHComponent', () => {
  let component: UsuarioListaHComponent;
  let fixture: ComponentFixture<UsuarioListaHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioListaHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListaHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
