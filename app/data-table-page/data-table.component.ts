import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: "app/data-table-page/data-table.component.html"
})
export class DataTableComponent {
    @Input() items: any[];
    @Input() headers: Object[];
    @Input() selectedItem: any;
    @Output() itemClick = new EventEmitter<any>();

    constructor() { }

    onItemClick(item: any) {
        console.log('Selecting...');
        this.selectedItem = item;
        this.itemClick.emit(item);
    }
}
