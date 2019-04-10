import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheManagerService {

  private cache = new Map();

  constructor() { }

  save(url: string, response: HttpResponse<any>) {
    return this.cache.set(url, response);
  }

  has(url: string) {
    return this.cache.has(url);
  }

  get(url: string) {
    return this.cache.get(url);
  }

}
