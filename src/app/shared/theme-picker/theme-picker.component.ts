import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { DocsSiteTheme, ThemeStorageService } from './theme-storage/theme-storage.service';
import { StyleManagerService } from './style-manager/style-manager.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'kanpm-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemePickerComponent implements OnInit, OnDestroy {

  private _queryParamSubscription = Subscription.EMPTY;

  currentTheme: DocsSiteTheme;
  themes: DocsSiteTheme[] = [
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#8BC34A',
      accent: '#FFC107',
      displayName: 'Light-green & Amber',
      name: 'lightgreen-amber',
      isDark: true,
    }
  ];

  constructor(
    public styleManager: StyleManagerService,
    private _themeStorage: ThemeStorageService,
    private _activatedRoute: ActivatedRoute,
    private liveAnnouncer: LiveAnnouncer,
  ) { }

  ngOnInit(): void {
    const currentThemeName = this._themeStorage.getStoredThemeName();
    if (currentThemeName) {
      this.selectTheme(currentThemeName);
    }
    this._queryParamSubscription = this._activatedRoute.queryParamMap
      .pipe(map((params: ParamMap) => params.get('theme')))
      .subscribe((themeName: string | null) => {
        if (themeName) {
          // todo
        }
      });
  }

  ngOnDestroy() {
    this._queryParamSubscription.unsubscribe();
  }

  selectTheme(themeName: string) {
    const theme = this.themes.find(currentTheme => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `assets/themes/${theme.name}.css`);
    }

    if (this.currentTheme) {
      this.liveAnnouncer.announce(`${theme.displayName} theme selected.`, 'polite', 3000);
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }

}
