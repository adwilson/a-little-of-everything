import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-clipboard-card',
  templateUrl: './clipboard-card.component.html',
  styleUrls: ['./clipboard-card.component.scss'],
})
export class ClipboardCardComponent implements OnInit {
  clipboardValue: any;
  clipboardType?: string;

  constructor() { }

  ngOnInit() {}

  async read(): Promise<void> {
    ({
      value: this.clipboardValue,
      type: this.clipboardType
    } = await Clipboard.read());
  }

  async write(): Promise<void> {
    await Clipboard.write({
      label: 'Label',
      string: 'A String'
    });
  }

}
