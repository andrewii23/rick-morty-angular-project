import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { SearchData } from 'src/app/rick-morty/models';
import { LocationListComponent } from 'src/app/rick-morty/location/location-list/location-list.component';
import { LocationService } from 'src/app/rick-morty/services/location.service';

@Component({
  selector: 'app-location-list-page',
  standalone: true,
  imports: [CommonModule, LocationListComponent],
  templateUrl: './location-list-page.component.html',
  styleUrls: ['./location-list-page.component.scss'],
})
export class LocationListPageComponent {
  private readonly LocationService = inject(LocationService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.queryParams.pipe(
    switchMap((params) =>
      this.LocationService.getAll(params).pipe(
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
