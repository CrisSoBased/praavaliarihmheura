import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrinhoPage } from './carrinho.page';

describe('EntregasPage', () => {
  let component: CarrinhoPage;
  let fixture: ComponentFixture<CarrinhoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrinhoPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
