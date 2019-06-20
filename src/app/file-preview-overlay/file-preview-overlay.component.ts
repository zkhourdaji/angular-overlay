import { Component, OnInit, Inject } from '@angular/core';
import { FilePreviewOverlayRef } from './file-preview-overlay-ref';
import { FILE_PREVIEW_DIALOG_DATA } from './file-preview-overlay.tokens';

@Component({
  selector: 'app-my-overlay',
  template: `
  <div class="overlay-overlay">
    <img [src]="image.url">
  </div>
  `,
  styles: [`
     :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      margin: 0;
      padding: 1em;
    }

    img {
      width: 100%;
      max-width: 500px;
      height: auto;
    }

    .overlay-content {
      padding: 1em;
    }
  `]
})
export class FilePreviewOverlayComponent implements OnInit {

  constructor(
    public dialogRef: FilePreviewOverlayRef,
    @Inject(FILE_PREVIEW_DIALOG_DATA) public image: any
  ) { }

  ngOnInit() {
  }

}
