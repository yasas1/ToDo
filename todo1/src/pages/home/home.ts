import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks=[];

  static get parameters(){
    return [ [NavController] ]
  }

  constructor(public nav: NavController) {
    this.nav=nav;

    this.tasks=[
      {task:'task1', priority:'low' ,status:'pending'},
      {task:'task2', priority:'high' ,status:'done'}
    ]

  }

}
