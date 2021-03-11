import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DocsSiteTheme, LocalStorageService } from 'core/services/localstorage.service';
import { StyleManagerService } from 'core/services/style-manager/style-manager.service';

@Component({
  selector: 'kanpm-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemePickerComponent implements OnInit {

  private storageThemeKey = 'kanpm-storage-current-theme-name';
  private darkModeThemeKey = 'kanpm-storage-is-dark-mode';

  currentTheme?: DocsSiteTheme;
  isDarkMode = false;
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
      name: 'light-green-orange',
      isDark: true,
    }
  ];

  constructor(
    public styleManager: StyleManagerService,
    private themeStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    const currentThemeName = this.themeStorage.getValue(this.storageThemeKey);
    let isDarkMode = this.themeStorage.getValue(this.darkModeThemeKey);
    if (currentThemeName) {
      this.selectTheme(currentThemeName);
    }
    isDarkMode = JSON.parse(isDarkMode);
    if (isDarkMode) {
      this.darkModeSwitch(isDarkMode);
    }
  }

  darkModeSwitch(isDarkMode: boolean): void {
    this.isDarkMode = isDarkMode;
    const body = document.getElementsByTagName('body')[0];
    if (this.isDarkMode) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
    this.themeStorage.storeValue(this.darkModeThemeKey, isDarkMode);
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
      this.styleManager.setStyle('theme', `themes/${theme.name}.css`);
    }

    this.themeStorage.storeValue(this.storageThemeKey, themeName);
  }

}
