import { Component, OnInit } from '@angular/core';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { IonicModule } from '@ionic/angular';
import { PluginCardHeaderComponent } from '../plugin-card-header/plugin-card-header.component';

@Component({
    selector: 'app-action-sheet-card',
    templateUrl: './action-sheet-card.component.html',
    styleUrls: ['./action-sheet-card.component.scss'],
    imports: [IonicModule, PluginCardHeaderComponent]
})
export class ActionSheetCardComponent implements OnInit {
  chosenResult?: string;

  constructor() { }

  ngOnInit() {}

  async showActionSheet(): Promise<void> {
    const options = [
      {
        title: 'Hello',
        icon: 'balloon'
      },
      {
        title: 'Cancel',
        style: ActionSheetButtonStyle.Cancel
      },
      {
        title: 'Remove',
        style: ActionSheetButtonStyle.Destructive
      }
    ];
    const result = await ActionSheet.showActions({
      title: 'Test',
      message: 'An example action sheet',
      options
    });
    this.chosenResult = options[result.index].title;
  }

}
