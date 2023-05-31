import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformatePage } from './informate.page';

describe('HomePage', () => {
  let component: InformatePage;
  let fixture: ComponentFixture<InformatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformatePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
