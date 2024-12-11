import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppLauncherCardComponent } from './app-launcher-card.component';

describe('AppLauncherCardComponent', () => {
  let component: AppLauncherCardComponent;
  let fixture: ComponentFixture<AppLauncherCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), AppLauncherCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppLauncherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
