import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrls: ['./time-bar.component.css']
})

export class TimeBarComponent implements OnInit {

  @Input('value') value: number;
  @Input('range') range: number;
  @Input('markers') markers: any[];
  @Output() onChange = new EventEmitter<number>()
  @HostListener('mouseup') 
    onMouseup() { 
     this.tipsVisible = false; 
    } 
  @HostListener('mousedown') 
    onMousedown() {
     this.tipsVisible = true;
    } 
  private tipsVisible: boolean;
  private timeBar: any;
  
  change() {
    console.log(this.value)
    this.onChange.emit(this.value);
  }
  constructor() {
    this.timeBar = {
      min: 1900,
      max: 2500
    }
    this.value = 1910
    this.tipsVisible = false
    console.log(this.markers)
  }

  ngOnInit() {
    
  }

}
