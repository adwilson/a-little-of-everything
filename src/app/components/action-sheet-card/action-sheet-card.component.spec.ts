import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActionSheetCardComponent } from './action-sheet-card.component';

describe('ActionSheetCardComponent', () => {
  let component: ActionSheetCardComponent;
  let fixture: ComponentFixture<ActionSheetCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ActionSheetCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionSheetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
