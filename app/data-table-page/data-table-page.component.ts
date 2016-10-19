import {Component} from '@angular/core';
import {RealEstateService} from "../services/real-estate.service";
import {RealEstate} from "../models/real-estate";

@Component({
    selector: 'data-table-page',
    templateUrl: "app/data-table-page/data-table-page.component.html"
})
export class DataTablePageComponent {
    realEstates: RealEstate[];
    selected: RealEstate;
    tableHeaders: Object[];

    constructor(private service: RealEstateService) {
        this.tableHeaders = [
            {value: "type", text: "Typ"},
            {value: "street", text: "Ulica"},
            {value: "builtAt", text: "Data wybudowania"},
            {value: "price", text: "Cena"},
            {value: "lat", text: "Szerokość"},
            {value: "lng", text: "Długość"}
        ];

        this.service.getAll().then((data) => {
            console.log("data table PAGE", data);
            this.realEstates = <RealEstate[]>data;
        }, function (error) {
            console.log(error);
        });
    }

    onRealEstateClick(realEstate: RealEstate) {
        console.log("data table PAGE, selected:", realEstate);
        this.selected = realEstate;
    }
}
