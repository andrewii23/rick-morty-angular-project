import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CharacterViewComponent } from 'src/app/rick-morty/character/character-view/character-view.component';
import { CharacterService } from 'src/app/rick-morty/services/character.service';

@Component({
  selector: 'app-character-view-page',
  standalone: true,
  imports: [CommonModule, CharacterViewComponent],
  templateUrl: './character-view-page.component.html',
  styleUrls: ['./character-view-page.component.scss'],
})
export class CharacterViewPageComponent {
  private readonly charService = inject(CharacterService);
  private readonly route = inject(ActivatedRoute);
  protected readonly data$ = this.route.params.pipe(
    switchMap((params) => this.charService.get(params['id'])),
  );
}
