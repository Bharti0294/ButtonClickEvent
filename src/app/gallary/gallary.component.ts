import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  more: any;

  constructor() { }
  msg: string | undefined;
  clickMore() {
    this.msg = 'Kerala hill station Tour Packages. From the snow-clad peaks of the Himalayas to verdant forests in the Western Ghats, hills are a dominant ';
    return this.msg;
  }
  msg1: string | undefined;
  clickEvent() {
    this.msg1 = 'Kullu Manali - A Beautiful Hill Station for Tourists to Visit in Himachal Pradesh ... Honeymoon is a special time in a couple.';
    return this.msg1;
  }

  msg2: string | undefined;
  clickMsg() {
    this.msg2 = 'Ranipuram hills is an attractive destination located in the Kasaragod district. The region, once known as Madathumala, shares it borders with Karnataka';
    return this.msg2;
  }

  ngOnInit(): void {
  }

}
