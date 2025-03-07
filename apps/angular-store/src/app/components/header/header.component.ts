import { NzIconModule } from 'ng-zorro-antd/icon';
import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  toggleDropdown(): void {
    // Implement toggleDropdown method here

    this.dropdownOpen.set(!this.dropdownOpen());
  }

  dropdownOpen = signal<boolean>(false);

  changeLanguage = output<string>();

  bannerTitle = input<string>();
  bannerMenu = input<string[]>();
}
