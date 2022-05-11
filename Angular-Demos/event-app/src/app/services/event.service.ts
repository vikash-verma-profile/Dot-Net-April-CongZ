import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable()
export class EventService {
    private _eventUrl = "https://reqres.in/api/products";
    private _specialEventsUrl = ""

    constructor(private http: HttpClient) {
    }

    getEvents() {
        return this.http.get<any>(this._eventUrl)
    }

    getSpecialEvents() {
        return this.http.get<any>(this._specialEventsUrl)
    }
}