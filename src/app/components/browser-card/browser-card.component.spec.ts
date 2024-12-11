import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserCardComponent } from './browser-card.component';

describe('BrowserCardComponent', () => {
  let component: BrowserCardComponent;
  let fixture: ComponentFixture<BrowserCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), BrowserCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
