import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode } from '../../models';

@Component({
  selector: 'app-episode-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-view.component.html',
  styleUrls: ['./episode-view.component.scss']
})
export class EpisodeViewComponent {

  @Input({ required: true }) data!: Episode;

}
