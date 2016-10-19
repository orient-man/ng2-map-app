import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {RealEstate} from '../models/real-estate';

@Injectable()
export class RealEstateService {
    private _url: string = '/server/realEstates.json';

    constructor(private _http: Http) { }

    setUrl(url: string) {
        this._url = url;
    }

    getAll(): Promise<RealEstate[]> {
        return new Promise<RealEstate[]>((resolve) => {
            this.getJson((json: RealEstate[]) => {
                resolve(json);
            });
        });
    }

    getById(id: number): Promise<RealEstate> {
        return new Promise<RealEstate>((resolve) => {
            this.getJson((json: RealEstate[]) => {
                var foundItem: RealEstate = json.filter((item: any) => {
                    return item.id === id;
                })[0];
                resolve(foundItem);
            });
        });
    }

    private getJson(callback: Function) {
        this._http.get(this._url).subscribe((response: Response) => {
            callback(response.json());
        });
    }
}
