import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGallery from './state/gallery.reducer';
import { GalleryEffects } from './state/gallery.effects';
import { GalleryFacade } from './state/gallery.facade';
import { HttpClientModule } from '@angular/common/http';
import { GalleryApiService } from './api/gallery-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromGallery.GALLERY_FEATURE_KEY,
      fromGallery.reducer
    ),
    EffectsModule.forFeature([GalleryEffects]),
    HttpClientModule,
  ],
  providers: [GalleryFacade, GalleryApiService],
})
export class GalleryStoreModule {}
