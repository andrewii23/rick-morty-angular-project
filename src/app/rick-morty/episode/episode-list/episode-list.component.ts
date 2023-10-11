import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Episode, List, SearchData } from '../../models';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit{
  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    this.animationService.InitialAnimation();
  }

  private readonly fb = inject(FormBuilder).nonNullable;

  protected readonly formGroup = this.fb.group({
    name: ['', { updateOn: 'submit' }],
    page: [''],
  });
  @Input({ required: true }) data!: List<Episode>;

  @Input() set searchData(searchData: SearchData) {
    this.formGroup.setValue({
      name: '',
      page: '',
      ...searchData,
    });
  }

  @Output() readonly searchDataChange = new EventEmitter<SearchData>();

  private emitSearchData(): void {
    const value = this.formGroup.value;
    this.searchDataChange.emit({
      ...(value.name ? { name: value.name } : null),
      ...(value.page && value.page !== '1' ? { page: value.page } : null),
    });
  }

  protected get pages(): number {
    return Math.ceil(this.data.info.count / 10);
  }

  protected getId(url: URL): string {
    return url.pathname.replace(/\/$/, '').split('/').pop() ?? '';
  }

  protected doSearchDataChange(): void {
    this.formGroup.controls.page.setValue('');
    this.emitSearchData();
  }

  protected doPageChange(url: URL | null): void {
    if (url === null) {
      return;
    }
    this.formGroup.controls.page.setValue(url.searchParams.get('page') ?? '');
    this.emitSearchData();
  }
}
