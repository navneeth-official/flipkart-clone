import { Component, ViewChild, TemplateRef } from '@angular/core';
import { nav_card } from '../Data/data';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
interface sub_category {
  name: string,
  items: string[]
}
interface data {
  name: string;
  thumbnail: string,
  subcategories: sub_category[],
}
@Component({
  selector: 'app-nav-cards',
  imports: [CommonModule],
  // standalone: true,
  templateUrl: './nav-cards.html',
  styleUrl: './nav-cards.css',
})

export class NavCards {
  card_data!: data[]
  current_category!: string;
  current_sub_category!: string;

  private overlayRef?: OverlayRef;
  private overlayB?: OverlayRef;

  private closeTimeout: any;
  private closeTimeoutB: any;

  constructor(private overlay: Overlay, private vcr: ViewContainerRef) {
    this.card_data = nav_card
  }

  @ViewChild('popup') popupTemplate!: TemplateRef<any>;
  @ViewChild('popupB') popupBTemplate!: TemplateRef<any>;

  openOverlay(trigger: HTMLElement) {
    clearTimeout(this.closeTimeout);

    if (!this.overlayRef) {
      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(trigger)
        .withPositions([
          { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 4, offsetX: -150 }
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
      this.closeSubOverlay();
    }, 10); // slight delay to allow moving between button & popup
  }

  openSubOverlay(trigger: HTMLElement) {
    clearTimeout(this.closeTimeoutB);

    if (!this.overlayB) {
      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(trigger)
        .withPositions([{ originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', offsetX: -4, offsetY: -8 }]);

      this.overlayB = this.overlay.create({ positionStrategy });
      const portal = new TemplatePortal(this.popupBTemplate, this.vcr);
      this.overlayB.attach(portal);
    }
  }

  keepSubOpen() {
    clearTimeout(this.closeTimeoutB);
    clearTimeout(this.closeTimeout);
  }

  closeSubOverlay() {
    this.closeTimeoutB = setTimeout(() => {
      this.overlayB?.dispose();
      this.overlayB = undefined;
      // this.closePopup()
    }, 10);
  }

  setCurrentCategory(name: string) {
    this.current_category = name
  }

  setCurrentSubCategory(name: string) {
    this.current_sub_category = name
  }
}