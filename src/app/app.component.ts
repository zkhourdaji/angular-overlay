import { Component } from '@angular/core';
import { FilePreviewOverlayService } from './file-preview-overlay/file-preview-overlay.service';
import { FilePreviewOverlayRef } from './file-preview-overlay/file-preview-overlay-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-overlay';

  files: { name: string, url: string }[] = [
    { name: 'image_1.jpg', url: 'https://static.pexels.com/photos/371633/pexels-photo-371633.jpeg' },
    { name: 'image_2.jpg', url: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg' },
    {
      name: 'image_3.jpg',
      url: 'https://cdn.allwallpaper.in/wallpapers/1440x900/17110/mountains-nature-trees-rivers-1440x900-wallpaper.jpg'
    },
    { name: 'image_4.jpg', url: 'https://static.pexels.com/photos/35600/road-sun-rays-path.jpg' },
    { name: 'image_5.jpg', url: 'https://static.pexels.com/photos/223022/pexels-photo-223022.jpeg' }
  ];

  constructor(private previewDialog: FilePreviewOverlayService) { }

  showPreview(file: { name: string, url: string }) {
    const dialogRef: FilePreviewOverlayRef = this.previewDialog.open({
      image: file
    });
  }
}
