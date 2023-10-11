import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '../../models';

@Component({
  selector: 'app-location-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.scss'],
})
export class LocationViewComponent {
  @Input({ required: true }) data!: Location;
}
