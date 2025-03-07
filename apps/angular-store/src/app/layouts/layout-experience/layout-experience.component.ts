import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-layout-experience',
  imports: [CommonModule],
  templateUrl: './layout-experience.component.html',
  styleUrl: './layout-experience.component.scss',
})
export class LayoutExperienceComponent {
  bloc_4 = input<NzSafeAny>({});

  features = computed(() => {
    return this.bloc_4()?.pictos.map((feature: NzSafeAny, index: number) => {
      return {
        description: feature.description,
        title: feature.title,
        icon: `assets/icons/feature${index + 1}.svg`,
      };
    });
  });
}
