import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import pluginInfo, { PluginInfo } from '../../plugin-info';

@Component({
  selector: 'app-plugin-card-header',
  templateUrl: './plugin-card-header.component.html',
  styleUrls: ['./plugin-card-header.component.scss'],
})
export class PluginCardHeaderComponent implements OnInit, OnChanges {
  @Input() pluginId?: string;
  pluginInfo?: PluginInfo;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pluginId'] && changes['pluginId'].currentValue) {
      this.pluginInfo = pluginInfo.find(pi => pi.id === this.pluginId);
    }
  }

}
