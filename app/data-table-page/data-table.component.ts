import {Component, Input} from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: "app/data-table-page/data-table.component.html"
})
export class DataTableComponent {
  @Input() items: any[];
  @Input() headers: Object[];

  constructor() { }
}
