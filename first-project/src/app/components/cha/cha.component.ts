import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss'],
})
export class ChaComponent implements OnInit {
  @ViewChild('thangTeo') thangTeo: ConComponent | undefined;
  @ViewChild('thangTi') thangTi: ConComponent | undefined;
  public chaMsg: string = '';
  constructor() {}

  ngOnInit(): void {}
  public conGoi(name: string) {
    this.chaMsg = `Chao con - ${name}`;
  }
  public choTien() {
    this.thangTeo?.choTien(10);
    this.thangTi?.choTien(10);
  }
}
