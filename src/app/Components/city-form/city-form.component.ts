import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {

  constructor() { }
  vm: any
  profileForm = new FormGroup({
    cityName: new FormControl('')
  })
  ngOnInit() {
    this.vm = {
      cityNameLabel: '城市名称'
    }
  }
}
