import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PluginPageRoutingModule } from './plugin-routing.module';

import { PluginPage } from './plugin.page';
import { ActionSheetCardComponent } from '../../components/action-sheet-card/action-sheet-card.component';
import { AppLauncherCardComponent } from '../../components/app-launcher-card/app-launcher-card.component';
import { PluginCardHeaderComponent } from '../../components/plugin-card-header/plugin-card-header.component';
import { AppCardComponent } from '../../components/app-card/app-card.component';
import { BrowserCardComponent } from '../../components/browser-card/browser-card.component';
import { CameraCardComponent } from '../../components/camera-card/camera-card.component';
import { ClipboardCardComponent } from '../../components/clipboard-card/clipboard-card.component';

const miscComponents = [
  PluginCardHeaderComponent
]

const pluginCardComponents = [
  ActionSheetCardComponent,
  AppLauncherCardComponent,
  AppCardComponent,
  BrowserCardComponent,
  CameraCardComponent,
  ClipboardCardComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PluginPageRoutingModule
  ],
  declarations: [
    PluginPage,
    ...miscComponents,
    ...pluginCardComponents
  ],
  exports: [
    ...miscComponents,
    ...pluginCardComponents
  ]
})
export class PluginPageModule {}
