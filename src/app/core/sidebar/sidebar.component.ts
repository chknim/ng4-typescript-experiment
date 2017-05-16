import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { SidebarEntry } from '../models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  @Input('entries') entries: [SidebarEntry];
  @Input('bgColor') bgColor: string;
  @Input('textColor') textColor: string;
  @Input('selectBgColor') selectBgColor: string;
  @Input('selectTextColor') selectTextColor: string;

  @Output('onEntrySelect') onEntrySelect: EventEmitter<string> = new EventEmitter<string>();

  private selectedEntry: string;

  ngOnInit() {}

  select(event, id) {
    this.selectedEntry = id;
    this.onEntrySelect.emit(id);
  }

  getEntryStyle(id): any {
    const style = {};
    if (id === this.selectedEntry) {
      style['background-color'] = this.selectBgColor;
      style['color'] = this.selectTextColor;
    } else {
      style['background-color'] = 'inherit';
      style['color'] = this.textColor;
    }
    return style;
  }

  getEntryIcon(icon): any {
    return 'glyphicon-' + icon;
  }
}
