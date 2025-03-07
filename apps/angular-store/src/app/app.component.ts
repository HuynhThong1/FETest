import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { inject } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslateModule, NzButtonModule, LayoutMainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    inject();
  }

  switchLanguage(event: any) {
    console.log('thonghm2', event.target.value);
    const lang = event.target.value;
    this.translate.use(lang);
  }
}
