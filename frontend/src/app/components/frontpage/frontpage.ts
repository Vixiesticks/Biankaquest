import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComicDataService } from '../../services/comic';
import Comic from '../../interfaces/comic';
import { FormControl } from '@angular/forms';
import { filter,debounceTime,distinctUntilChanged} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  imports: [],
  templateUrl: './frontpage.html',
  styleUrl: './frontpage.css',
})
export class Frontpage {
  comics: Array<Comic> = [];
  subscriptionComics!: Subscription;

  constructor(private _comicDataService: ComicDataService) {}

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }
}
