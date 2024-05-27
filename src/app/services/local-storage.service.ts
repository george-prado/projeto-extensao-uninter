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

  public setLocalStorage (key: string, value: string|number|object): boolean {
    if (key && value !== undefined && value !== null && value.toString() !== 'undefined' && value.toString() !== 'null') {
      this.localStorage?.setItem(key, JSON.stringify(value));
    }
    return false;
  }

  public getLocalStorage (key: string): string|boolean {
    const item = this.localStorage?.getItem(key);
    if (item === null || item === undefined) {
      return false;
    }
    try {
      const jsonParseItem = JSON.parse(item);
      return jsonParseItem;
    } catch (error: unknown) {
      return item;
    }
  }

  public setToken (token: string): boolean {
    if ((token !== null || undefined) && (token !== 'null' || 'undefined')) {
      this.setLocalStorage('token', token);
      return true;
    }
    return false;
  }

  public getToken (): string|boolean {
    return this.getLocalStorage('token') ? this.getLocalStorage('token') : false;
  }
}
