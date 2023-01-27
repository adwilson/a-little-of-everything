import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss'],
})
export class DeviceCardComponent implements OnInit {
  allInfo = '';

  constructor() { }

  async ngOnInit(): Promise<void> {
    const allInfoObj = {
      ...await Device.getId(),
      ...await Device.getInfo(),
      ...await Device.getBatteryInfo(),
      ...await Device.getLanguageCode()
    }
    this.allInfo = JSON.stringify(allInfoObj, undefined, 2);
  }

}
