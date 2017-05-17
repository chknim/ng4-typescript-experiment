import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-holder',
  templateUrl: './main-holder.component.html',
  styleUrls: ['./main-holder.component.less']
})
export class MainHolderComponent implements OnInit {
  @Input('title') title: string;

  constructor() {}

  ngOnInit() {}
}
