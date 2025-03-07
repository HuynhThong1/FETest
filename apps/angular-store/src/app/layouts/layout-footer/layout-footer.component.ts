import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-layout-footer',
  imports: [CommonModule],
  templateUrl: './layout-footer.component.html',
  styleUrl: './layout-footer.component.scss',
})
export class LayoutFooterComponent {
  footer = input<NzSafeAny>({});
}
