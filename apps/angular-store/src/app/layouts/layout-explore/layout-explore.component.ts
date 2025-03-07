import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-layout-explore',
  imports: [CommonModule],
  templateUrl: './layout-explore.component.html',
  styleUrl: './layout-explore.component.scss',
})
export class LayoutExploreComponent {
  bloc_6 = input<NzSafeAny>({});
}
