import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: "app/data-table-page/data-table.component.html"
})
export class DataTableComponent<T> {
    @Input() items: T[];
    @Input() headers: Object[];
    @Input() selectedItem: T;
    @Output() itemClick = new EventEmitter<T>();

    constructor() { }

    onItemClick(item: T) {
        console.log('Selecting...');
        this.selectedItem = item;
        this.itemClick.emit(item);
    }
}
