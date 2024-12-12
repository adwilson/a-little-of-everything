import { Component, OnInit, signal } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';
import { IonicModule } from '@ionic/angular';
import { PluginCardHeaderComponent } from '../plugin-card-header/plugin-card-header.component';

@Component({
  selector: 'app-clipboard-card',
  templateUrl: './clipboard-card.component.html',
  styleUrls: ['./clipboard-card.component.scss'],
  imports: [IonicModule, PluginCardHeaderComponent]
})
export class ClipboardCardComponent implements OnInit {
  clipboardValue = signal<any>(undefined);
  clipboardType = signal<string | undefined>(undefined);

  constructor() { }

  ngOnInit() { }

  async read(): Promise<void> {
    const result = await Clipboard.read();
    this.clipboardValue.set(result.value);
    this.clipboardType.set(result.type);
  }

  async write(): Promise<void> {
    await Clipboard.write({
      label: 'Label',
      string: 'A String'
    });
  }

}
