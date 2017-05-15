import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { SidebarEntry } from '../models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  @Input('entries') entries: [SidebarEntry];

  @Output('onSelect') onSelect: EventEmitter<string> = new EventEmitter<string>();

  selectedEntry: string;

  ngOnInit() {}

  select(event, id) {
    this.selectedEntry = id;
  }
}
