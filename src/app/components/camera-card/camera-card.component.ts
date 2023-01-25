import { Component, OnInit } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';

@Component({
  selector: 'app-camera-card',
  templateUrl: './camera-card.component.html',
  styleUrls: ['./camera-card.component.scss'],
})
export class CameraCardComponent implements OnInit {
  public allowEditing = false;
  public imageSrc?: string;
  public imagePath?: string;

  constructor() { }

  ngOnInit() {}

  async takePicture(): Promise<void> {
    const image = await Camera.getPhoto({
      allowEditing: this.allowEditing,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    this.imageSrc = image.webPath;
    this.imagePath = image.path;
  }

  async getPicture(): Promise<void> {
    const image = await Camera.getPhoto({
      allowEditing: this.allowEditing,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });

    this.imageSrc = image.webPath;
    this.imagePath = image.path;
  }

}
