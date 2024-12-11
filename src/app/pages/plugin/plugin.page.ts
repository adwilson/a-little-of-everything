import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { ActionSheetCardComponent } from '../../components/action-sheet-card/action-sheet-card.component';
import { AppLauncherCardComponent } from '../../components/app-launcher-card/app-launcher-card.component';
import { AppCardComponent } from '../../components/app-card/app-card.component';
import { BrowserCardComponent } from '../../components/browser-card/browser-card.component';
import { CameraCardComponent } from '../../components/camera-card/camera-card.component';
import { ClipboardCardComponent } from '../../components/clipboard-card/clipboard-card.component';
import { DeviceCardComponent } from '../../components/device-card/device-card.component';
import { DialogCardComponent } from '../../components/dialog-card/dialog-card.component';
import { FilesystemCardComponent } from '../../components/filesystem-card/filesystem-card.component';

@Component({
    selector: 'app-plugin',
    templateUrl: './plugin.page.html',
    styleUrls: ['./plugin.page.scss'],
    imports: [IonicModule, ActionSheetCardComponent, AppLauncherCardComponent, AppCardComponent, BrowserCardComponent, CameraCardComponent, ClipboardCardComponent, DeviceCardComponent, DialogCardComponent, FilesystemCardComponent]
})
export class PluginPage implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject<void>();
  package?: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe(params => {
      this.package = params['package'];
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
