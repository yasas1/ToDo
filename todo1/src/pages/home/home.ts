import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks=[];

  static get parameters(){
    return [ [NavController] ]
  }

  constructor(public nav: NavController, public modalCtrl: ModalController) {
    this.nav=nav;

    this.tasks=[
      {task:'task1', priority:'low' ,status:'pending'},
      {task:'task2', priority:'high' ,status:'done'}
    ]

  }

  showModal(){
    this.nav.push(ModalPage);
  }

}
