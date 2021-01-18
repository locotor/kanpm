import { Injectable, EventEmitter } from '@angular/core';

export interface DocsSiteTheme {
  name: string;
  displayName?: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storeValue(key: string, value: any) {
    try {
      window.localStorage[key] = value;
    } catch { }
  }

  getValue(key: string): any {
    try {
      return window.localStorage[key] || null;
    } catch {
      return null;
    }
  }

  remove(key: string) {
    try {
      window.localStorage.removeItem(key);
    } catch { }
  }

}
