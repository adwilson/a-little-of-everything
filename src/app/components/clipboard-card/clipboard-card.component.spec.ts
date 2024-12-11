import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClipboardCardComponent } from './clipboard-card.component';

describe('ClipboardCardComponent', () => {
  let component: ClipboardCardComponent;
  let fixture: ComponentFixture<ClipboardCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ClipboardCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ClipboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
