import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { List, Character, RawList, RawCharacter, SearchData } from '../models';
import { parseCharacterList, parseCharacter } from '../helpers';

const url = 'https://rickandmortyapi.com/api/character/' as const;

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly http = inject(HttpClient);
  getAll(params?: SearchData): Observable<List<Character>> {
    return this.http
      .get<RawList<RawCharacter>>(url, { params: params })
      .pipe(map(parseCharacterList));
  }

  get(id: string): Observable<Character> {
    return this.http
      .get<RawCharacter>(`${url}/${id}`)
      .pipe(map((obj) => parseCharacter(obj)));
  }
}
