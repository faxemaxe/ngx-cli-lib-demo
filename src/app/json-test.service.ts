import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxCliLibDemoCrudService } from 'projects/ngx-cli-lib-demo-crud/src/public_api';

@Injectable({
  providedIn: 'root'
})
export class JsonTestService extends NgxCliLibDemoCrudService {

  protected baseUrl = 'https://jsonplaceholder.typicode.com';
  protected endPoint = 'posts';
  protected parseData = (data) => data;

  constructor(
    http: HttpClient,
  ) {
    super(http);
    console.log('this.baseUrl', this.baseUrl);
  }
}
