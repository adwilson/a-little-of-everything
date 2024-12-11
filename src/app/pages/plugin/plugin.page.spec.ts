import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PluginPage } from './plugin.page';

describe('PluginPage', () => {
  let component: PluginPage;
  let fixture: ComponentFixture<PluginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), PluginPage]
    }).compileComponents();

    fixture = TestBed.createComponent(PluginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
