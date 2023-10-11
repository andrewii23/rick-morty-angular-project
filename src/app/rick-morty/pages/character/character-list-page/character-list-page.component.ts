import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { SearchData } from 'src/app/rick-morty/models';
import { CharacterService } from 'src/app/rick-morty/services/character.service';
import { CharacterListComponent } from 'src/app/rick-morty/character/character-list/character-list.component';

@Component({
  selector: 'app-character-list-page',
  standalone: true,
  imports: [CommonModule, CharacterListComponent],
  templateUrl: './character-list-page.component.html',
  styleUrls: ['./character-list-page.component.scss'],
})
export class CharacterListPageComponent {
  private readonly CharacterService = inject(CharacterService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.queryParams.pipe(
    switchMap((params) =>
      this.CharacterService.getAll(params).pipe(
        map((data) => ({
          params,
          data,
        })),
      ),
    ),
  );

  protected doSearchDataChange(searchData: SearchData): void {
    console.debug('work');
    this.router.navigate([], {
      replaceUrl: true,
      queryParams: searchData,
    });
  }
}
