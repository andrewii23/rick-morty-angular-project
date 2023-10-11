import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Episode, List, RawEpisode, RawList, SearchData } from '../models';
import { parseEpidoseList, parseEpisode } from '../helpers';

const url = 'https://rickandmortyapi.com/api/episode/' as const;

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private readonly http = inject(HttpClient);
  getAll(params?: SearchData): Observable<List<Episode>> {
    return this.http
      .get<RawList<RawEpisode>>(url, { params: params })
      .pipe(map(parseEpidoseList));
  }
  get(id: string): Observable<Episode> {
    return this.http
      .get<RawEpisode>(`${url}/${id}`)
      .pipe(map((obj) => parseEpisode(obj)));
  }
}
