import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-merch',
  templateUrl: './merch.page.html',
  styleUrls: ['./merch.page.scss'],
})
export class MerchPage implements OnInit {


  constructor(private navCtrl: NavController) { }

  goBackToHomePage() {
    this.navCtrl.navigateBack('/home');
  }

  ngOnInit() {
  }

}
