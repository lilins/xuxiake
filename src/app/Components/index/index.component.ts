import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { City } from '../../Types/City';
import { CityService } from '../../Services/city.service';

declare var AMap: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('container') container: ElementRef
  citys: City[]
  key: string
  map: any
  markers: any[]

  constructor(private cityService: CityService) { }

  setMaker(city) {
    const icon = new AMap.Icon({
      size: new AMap.Size(16, 20),
      imageSize: new AMap.Size(16, 20),
      image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'
    })
    const marker = new AMap.Marker({
      position: [city.coordinate.longitude, city.coordinate.latitude],
      icon: icon,
      offset: new AMap.Pixel(-8, -20)
    });

    marker.setTitle(city.name);
    let content = ''
    city.usedNames.forEach(item => {
      content += `[${item.startDate}]${item.name}<br/>`
    })
    marker.setLabel({
      // offset: new AMap.Pixel(0, 0),
      content: `${city.name}<br/>${content}`
    });
    return marker
  }

  removeMarkers() {
    this.map.remove(this.markers);
  }

  onChange(value){
    this.removeMarkers()
    this.markers = this.citys
      .filter(item => {
        return item.usedNames.find( event => {
        return parseInt(event.startDate) < value
      })})
      .map(item => this.setMaker(item))
    this.map.add(this.markers)
  }

  ngOnInit() {
    this.cityService.getCity()
      .subscribe(citys => this.citys = citys);
    this.key = '62727399336d1159ed35502b99c1d6ed';
    this.markers = []
  }

  ngAfterViewInit() {
    this.map = new AMap.Map(this.container.nativeElement, {
      resizeEnable: true, //是否监控地图容器尺寸变化
      zoom: 4, //初始化地图层级
      // center: [116.397428, 39.90923] //初始化地图中心点
    });
    this.markers = this.citys.map(item => this.setMaker(item))
    this.map.add(this.markers)
  }

}
