import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import {GoogleMap, Marker} from '@capacitor/google-maps';
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
   this.createMap();
  }

  async createMap(){
    this.map= await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
            lat: 28.4,
            lng: -80.75,
        },
        zoom: 9,
      },

    });
    this.addMarkers();
  }

  async addMarkers(){
    const markers: Marker[] = [

{
  coordinate: {
    lat:28.52,
    lng:-80.68,
  },
  title: 'localhost',
  snippet: '',
},
{
  coordinate: {
    lat:28.562102,
    lng:-80.577292,
  },
  title: 'localhost',
  snippet: '',
},
{
  coordinate: {
    lat:34.576349,
    lng:-120.632007,
  },
  title: 'localhost',
  snippet: '',
},


    ];

    await this.map.addMarkers(markers);
  }

  goBackToHomePage() {
    this.navCtrl.navigateBack('/home');
  }
  ngOnInit() {
  }

}
