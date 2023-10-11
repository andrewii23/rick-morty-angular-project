import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { List, Location, RawList, RawLocation, SearchData } from '../models';
import { parseLocationList, parseLocation } from '../helpers';

const url = 'https://rickandmortyapi.com/api/location/' as const;

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private readonly http = inject(HttpClient);
  getAll(params?: SearchData): Observable<List<Location>> {
    return this.http
      .get<RawList<RawLocation>>(url, { params: params })
      .pipe(map(parseLocationList));
  }

  get(id: string): Observable<Location> {
    return this.http
      .get<RawLocation>(`${url}/${id}`)
      .pipe(map((obj) => parseLocation(obj)));
  }
}
