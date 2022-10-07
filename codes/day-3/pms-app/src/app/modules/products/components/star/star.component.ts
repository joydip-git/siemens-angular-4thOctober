
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  width = 100
  @Input("rating") ratingValue: number = 0
  constructor() {
    console.log(this.ratingValue)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed')
    this.width = this.ratingValue * 14
  }
  ngOnInit(): void {
    console.log('initiated')
  }

}
