import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { SearchData } from 'src/app/rick-morty/models';
import { EpisodeListComponent } from 'src/app/rick-morty/episode/episode-list/episode-list.component';
import { EpisodeService } from 'src/app/rick-morty/services/episode.service';

@Component({
  selector: 'app-episode-list-page',
  standalone: true,
  imports: [CommonModule, EpisodeListComponent],
  templateUrl: './episode-list-page.component.html',
  styleUrls: ['./episode-list-page.component.scss'],
})
export class EpisodeListPageComponent {
  private readonly EpisodeService = inject(EpisodeService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.queryParams.pipe(
    switchMap((params) =>
      this.EpisodeService.getAll(params).pipe(
        map((data) => ({
          params,
          data,
        })),
      ),
    ),
  );

  protected doSearchDataChange(searchData: SearchData): void {
    this.router.navigate([], {
      replaceUrl: true,
      queryParams: searchData,
    });
  }
}
