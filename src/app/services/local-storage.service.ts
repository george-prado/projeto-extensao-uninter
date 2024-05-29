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

  private setLocalStorage (key: string, value: string): string | void {
    if (key && value !== 'undefined') {
      this.localStorage?.setItem(key, value);
      return value;
    }
  }

  private getLocalStorage (key: string): string | void {
    const item = this.localStorage?.getItem(key);
    return item ?? undefined;
  }

  public setToken (token: string): string | void {
    return this.setLocalStorage('token', token);
  }

  public getToken (): string | void {
    return this.getLocalStorage('token');
  }
}
