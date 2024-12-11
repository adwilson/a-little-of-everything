import { Component, OnInit } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { IonicModule } from '@ionic/angular';
import { PluginCardHeaderComponent } from '../plugin-card-header/plugin-card-header.component';

@Component({
    selector: 'app-filesystem-card',
    templateUrl: './filesystem-card.component.html',
    styleUrls: ['./filesystem-card.component.scss'],
    imports: [IonicModule, PluginCardHeaderComponent]
})
export class FilesystemCardComponent implements OnInit {

  dataDir: string[] = [];
  libraryDir: string[] = [];
  externalDir: string[] = [];
  stringify = JSON.stringify;

  constructor() { }

  ngOnInit() {}

  async listFiles(): Promise<void> {
    await Filesystem.writeFile({
      path: 'test1.txt',
      directory: Directory.Library,
      data: 'hello',
      encoding: Encoding.UTF8
    });
    const fromLibrary = await Filesystem.readdir({
      path: '',
      directory: Directory.Library
    });
    this.libraryDir = fromLibrary.files.map(f => f.name);

    await Filesystem.writeFile({
      path: 'test2.txt',
      directory: Directory.External,
      data: 'hello',
      encoding: Encoding.UTF8
    });
    const fromExternal = await Filesystem.readdir({
      path: '',
      directory: Directory.External
    });
    this.externalDir = fromExternal.files.map(f => f.name);
  }
}
