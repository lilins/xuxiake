import { Component, OnInit } from '@angular/core';
import { City } from '../../Types/City';
import { CityService } from '../../Services/city.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  citys: City[]

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCity()
    .subscribe(citys => this.citys = citys);
  }

}
