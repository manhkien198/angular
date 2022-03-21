import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-con',
  templateUrl: './con.component.html',
  styleUrls: ['./con.component.scss'],
})
export class ConComponent implements OnInit {
  @Input() name: string = '';
  public tks: string = '';
  @Output() conGoi: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  public goiCha() {
    console.log('goi cha');
    this.conGoi.emit(this.name);
  }
  public choTien(amount: number) {
    this.tks = `con la ${this.name} con cam on cha cho con ${amount}`;
  }
}
