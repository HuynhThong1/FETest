import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from '../../components/header-section/header-section.component';
import { MapsComponent } from '../../components/maps/maps.component';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-layout-maps',
  imports: [CommonModule, HeaderSectionComponent, MapsComponent],
  templateUrl: './layout-maps.component.html',
  styleUrl: './layout-maps.component.scss',
})
export class LayoutMapsComponent {

  bloc_2 = input<NzSafeAny>({});
  carte_point = input<NzSafeAny[]>([]);
}
