import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class NgxCliLibDemoCrudService {

  protected abstract baseUrl: string;
  protected abstract endPoint: string;
  protected abstract parseData: any;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public post(data: any) {
    return this.httpClient.post(
      `${this.baseUrl}/${this.endPoint}`,
      data
    ).pipe(
      map(
        (resp) => {
          return this.parseData(resp);
        }
      )
    );
  }

  public get(id: number) {
    return this.httpClient.get(
      `${this.baseUrl}/${this.endPoint}/${id}`,
    ).pipe(
      map(
        (resp) => {
          return this.parseData(resp);
        }
      )
    );
  }

  public put(data: any) {
    return this.httpClient.put(
      `${this.baseUrl}/${this.endPoint}`,
      data
    ).pipe(
      map(
        (resp) => {
          return this.parseData(resp);
        }
      )
    );
  }

  public delete(id: number) {
    return this.httpClient.delete(
      `${this.baseUrl}/${this.endPoint}/${id}`,
    ).pipe(
      map(
        (resp) => {
          return this.parseData(resp);
        }
      )
    );
  }

}
