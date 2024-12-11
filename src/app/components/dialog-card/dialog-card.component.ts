import { Component, OnInit } from '@angular/core';
import { Dialog } from '@capacitor/dialog';
import { IonicModule } from '@ionic/angular';
import { PluginCardHeaderComponent } from '../plugin-card-header/plugin-card-header.component';

@Component({
    selector: 'app-dialog-card',
    templateUrl: './dialog-card.component.html',
    styleUrls: ['./dialog-card.component.scss'],
    imports: [IonicModule, PluginCardHeaderComponent]
})
export class DialogCardComponent implements OnInit {
  lastChoice = '';

  constructor() { }

  ngOnInit() {}

  async showAlert(): Promise<void> {
    this.lastChoice = '';
    await Dialog.alert({
      title: 'Are you seeing this?',
      message: 'This is an alert dialog. No action required.',
      buttonTitle: 'Got it!'
    });
  }

  async showConfirm(): Promise<void> {
    this.lastChoice = '';
    const result = await Dialog.confirm({
      title: 'Which is it?',
      message: 'Please confirm or cancel as you please',
      cancelButtonTitle: 'Cancel it!',
      okButtonTitle: 'Good Good'
    });
    this.lastChoice = 'Confirm: ' + (result.value ? 'OK' : 'Cancel');
  }

  async showPrompt(): Promise<void> {
    this.lastChoice = '';
    const result = await Dialog.prompt({
      title: 'You get to input something here...',
      message: 'Type what you want',
      inputPlaceholder: 'Write here',
      inputText: '',
      okButtonTitle: 'Yes, This',
      cancelButtonTitle: 'Forget it'
    });
    this.lastChoice = result.cancelled ? 'Prompt cancelled' : ('Prompt: ' + result.value);
  }
}
