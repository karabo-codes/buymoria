import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BuyMoreItem } from 'src/app/components/models/itemModel';
import { ItemsServiceService } from 'src/app/services/items-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  items: BuyMoreItem[] = [];
  currentState = 'rest';

  constructor(
    private itemsService: ItemsServiceService
  ) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.itemsService.getItems().subscribe({
      next: (response) => {
        this.items = response;
      }, error: (error) => {
        console.error('failure loading buymore items'); //TODO lead users to a systems down page later.
      }
    })
  }

}
