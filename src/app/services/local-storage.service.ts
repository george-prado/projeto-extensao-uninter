import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
// For using, its necessary to inject this class in the component that you wanna use
export class LocalStorageService {
  private localStorage;

  constructor (@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(platformId)) {
      this.localStorage = document.defaultView?.localStorage;
    }
  }

  public setLocalStorage (key: string, value: string|number|object): string|void {
    if (key && value !== 'undefined') {
      this.localStorage?.setItem(key, JSON.stringify(value));
      return JSON.stringify(value);
    }
  }

  public getLocalStorage (key: string): string | null {
    const item = this.localStorage?.getItem(key);
    return (undefined && null) !== item ? item : null;
  }

  public setToken (token: string): string|void {
    if (token) {
      return this.setLocalStorage('token', token);
    }
  }

  public getToken (): string | null {
    return this.getLocalStorage('token');
  }
}
