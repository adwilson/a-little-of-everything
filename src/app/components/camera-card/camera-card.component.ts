import { Component, OnInit, signal } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { IonicModule } from '@ionic/angular';
import { PluginCardHeaderComponent } from '../plugin-card-header/plugin-card-header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-camera-card',
  templateUrl: './camera-card.component.html',
  styleUrls: ['./camera-card.component.scss'],
  imports: [IonicModule, PluginCardHeaderComponent, FormsModule]
})
export class CameraCardComponent implements OnInit {
  public allowEditing = signal(false);
  public imageSrc = signal<string | undefined>(undefined);
  public imagePath = signal<string | undefined>(undefined);

  constructor() { }

  ngOnInit() { }

  async takePicture(): Promise<void> {
    const image = await Camera.getPhoto({
      allowEditing: this.allowEditing(),
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    this.imageSrc.set(image.webPath);
    this.imagePath.set(image.path);
  }

  async getPicture(): Promise<void> {
    const image = await Camera.getPhoto({
      allowEditing: this.allowEditing(),
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });

    this.imageSrc.set(image.webPath);
    this.imagePath.set(image.path);
  }

}
