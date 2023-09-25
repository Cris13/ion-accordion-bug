import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public accordionGroupChange(event: Event): void {
    console.log("accordion changing");
  }

  public clickTest(){
    console.log("CLICK!");
  }

}
