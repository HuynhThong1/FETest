import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-layout-gallery',
  imports: [CommonModule],
  templateUrl: './layout-gallery.component.html',
  styleUrl: './layout-gallery.component.scss',
})
export class LayoutGalleryComponent {
  bloc_5 = input<NzSafeAny>({});

  // galleryItems = [
  //   { image: 'assets/images/avocado.png', name: 'Anthony Durand' },
  //   { image: 'assets/images/cherry.png', name: 'Anthony Durand' },
  //   { image: 'assets/images/orange.png', name: 'Anthony Durand' },
  //   { image: 'assets/images/halfOrange.png', name: 'Anthony Durand' },
  // ];

  galleryItems = computed(() => {
    const data = this.bloc_5()
      ?.reviews?.slice(1, 5)
      ?.map((item: NzSafeAny, index: number) => {
        return {
          image: `assets/images/gallery${index + 1}.png`,
          name: item.author,
          review: item.review,
        };
      });

    return data;
  });
}
