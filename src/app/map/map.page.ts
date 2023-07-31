import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import {GoogleMap} from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild('map')
  mapRef!: ElementRef;
  map!: GoogleMap;


  constructor(private navCtrl: NavController) { }

  ionViewDidEnter(){
   this.createMap
  }

  async createMap(){
    this.map= await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
            lat: 33.6,
            lng: -117.9,
        },
        zoom: 8,
      },

    });
  }

  goBackToHomePage() {
    this.navCtrl.navigateBack('/home');
  }
  ngOnInit() {
  }

}
