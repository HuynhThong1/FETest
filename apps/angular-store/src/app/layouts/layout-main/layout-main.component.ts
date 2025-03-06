import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from '../layout-header/layout-header.component';
import { LayoutBlogComponent } from '../layout-blog/layout-blog.component';
import { LayoutMapsComponent } from '../layout-maps/layout-maps.component';
import { LayoutSlidesComponent } from '../layout-slides/layout-slides.component';
import { LayoutExperienceComponent } from '../layout-experience/layout-experience.component';
import { LayoutGalleryComponent } from '../layout-gallery/layout-gallery.component';
import { LayoutExploreComponent } from '../layout-explore/layout-explore.component';
import { LayoutFooterComponent } from '../layout-footer/layout-footer.component';
import { OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { catchError, of, tap } from 'rxjs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { LayoutCalendarComponent } from '../layout-calendar/layout-calendar.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-layout-main',
  imports: [
    CommonModule,
    LayoutHeaderComponent,
    LayoutBlogComponent,
    LayoutMapsComponent,
    LayoutSlidesComponent,
    LayoutExperienceComponent,
    LayoutGalleryComponent,
    LayoutExploreComponent,
    LayoutFooterComponent,
    LayoutCalendarComponent,
    HeaderComponent
  ],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss',
  providers: [LanguageService], // Add this line
})
export class LayoutMainComponent implements OnInit {
  data = signal<NzSafeAny>({});

  banner_menu = signal<string[]>([]);
  banner_title = signal<string[]>([]);

  bloc_1 = signal<NzSafeAny>({});
  bloc_2 = signal<NzSafeAny>({});

  bloc_2_2 = signal<NzSafeAny>({});

  bloc_3 = signal<NzSafeAny>({});

  bloc_4 = signal<NzSafeAny>({});

  bloc_5 = signal<NzSafeAny>({});
  bloc_6 = signal<NzSafeAny>({});

  footer = signal<NzSafeAny>({});
  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.loadTranslations();
  }

  dataEffect = effect(() => {
    const data = this.data();
    if (data) {
      this.banner_menu.set(data.banner_menu);
      this.banner_title.set(data.banner_title);
      this.bloc_1.set(data.bloc_1);
      this.bloc_2.set(data.bloc_2);
      this.bloc_2_2.set(data.bloc_2_2);
      this.bloc_3.set(data.bloc_3);
      this.bloc_4.set(data.bloc_4);
      this.bloc_5.set(data.bloc_5);
      this.bloc_6.set(data.bloc_6);
      this.footer.set(data.footer);
    }
  });

  loadTranslations(): void {
    this.languageService
      .getTranslations()
      .pipe(
        catchError((error) => {
          console.error('Error loading translations:', error);
          return of(undefined);
        }),
        tap((translations) => {
          this.data.set(translations[0]);
          console.log('Translations loaded:', this.data());
        })
      )
      .subscribe();
  }

  onLanguageChange(lang: string): void {
    this.languageService.setLanguage(lang);
    this.loadTranslations();
  }
}
