import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MerchPage } from '../merch/merch.page';
import { MapPage } from '../map/map.page';

interface Rocket {
  name: string;
  labStation: string;
  location: string;
  status: string;
  launchDate: string;
  imageUrl: string; // Add the imageUrl property for each rocket
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController){}
  rockets: Rocket[] = [
    {
      name: 'Rocket Name 1',
      labStation: 'Lab/Station Name 1',
      location: 'Location Name 1',
      status: 'Status 1',
      launchDate: 'Launch Date 1',
      imageUrl: 'rocket1.jpg'
    },
    {
      name: 'Rocket Name 2',
      labStation: 'Lab/Station Name 2',
      location: 'Location Name 2',
      status: 'Status 2',
      launchDate: 'Launch Date 2',
      imageUrl: 'rocket2.jpg'
    },
    {
      name: 'Rocket Name 3',
      labStation: 'Lab/Station Name 3',
      location: 'Location Name 3',
      status: 'Status 3',
      launchDate: 'Launch Date 3',
      imageUrl: 'rocket3.jpg'
    },
    {
      name: 'Rocket Name 4',
      labStation: 'Lab/Station Name 4',
      location: 'Location Name 4',
      status: 'Status 4',
      launchDate: 'Launch Date 4',
      imageUrl: 'rocket4.jpg'
    },
    {
      name: 'Rocket Name 5',
      labStation: 'Lab/Station Name 5',
      location: 'Location Name 5',
      status: 'Status 5',
      launchDate: 'Launch Date 5',
      imageUrl: 'rocket5.jpg'
    },
    // Add more rockets to the array as needed
  ];

  goToMerchPage() {
    this.navCtrl.navigateForward('/merch');
  }

  goToMapPage(){
    this.navCtrl.navigateForward('/map')
  }
}
