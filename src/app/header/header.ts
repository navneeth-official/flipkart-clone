import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private overlayRef?: OverlayRef
  private overlayB?: OverlayRef;

  private closeTimeout: any;
  private closeTimeoutB: any;

  constructor(private overlay: Overlay, private vcr: ViewContainerRef) {
  }

  @ViewChild('popup') popupTemplate!: TemplateRef<any>;

  openOverlay(trigger: HTMLElement) {
    clearTimeout(this.closeTimeout);

    if (!this.overlayRef) {
      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(trigger)
        .withPositions([
          { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 0, offsetX: 70 }
        ]);

      this.overlayRef = this.overlay.create({ positionStrategy });
      const portal = new TemplatePortal(this.popupTemplate, this.vcr);
      this.overlayRef.attach(portal);
    }
  }

  keepOpen() {
    clearTimeout(this.closeTimeout);
  }

  closePopup() {
    this.closeTimeout = setTimeout(() => {
      this.overlayRef?.detach();
      this.overlayRef = undefined;
    }, 50); // slight delay to allow moving between button & popup
  }

}
