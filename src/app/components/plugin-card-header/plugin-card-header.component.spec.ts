import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PluginCardHeaderComponent } from './plugin-card-header.component';

describe('PluginCardHeaderComponent', () => {
  let component: PluginCardHeaderComponent;
  let fixture: ComponentFixture<PluginCardHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), PluginCardHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PluginCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
