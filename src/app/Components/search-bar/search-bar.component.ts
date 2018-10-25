import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input('value') value: number;
  @Input('range') range: number;
  @Input('markers') markers: any[];
  @Output() onChange = new EventEmitter<number>()

  constructor() { }

  change() {
    this.onChange.emit(this.value);
  }
  ngOnInit() {

  }

}
