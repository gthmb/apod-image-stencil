import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'apod-request'
})

export class ApodRequest {

    @Prop() apiKey: string;

    @Prop() hd: boolean;

    @Prop() date: string;

    @Event() requestComplete: EventEmitter;

    @Event() requestError: EventEmitter;

    requestUrl: string;

    dateFormat: RegExp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

    componentWillLoad() {
        this.requestUrl = 'https://api.nasa.gov/planetary/apod?api_key=' + this.apiKey;

        if( this.hd ) {
            this.requestUrl += '&hd=True'
        }

        if( this.date && this.dateFormat.test(this.date) ){
            this.requestUrl += '&date=' + this.date;
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", () => {
            if(oReq.status >= 400) {
                this.requestError.emit( new Error('apod request error') );
                return;
            }
            const data = JSON.parse(oReq.responseText);
            this.requestComplete.emit( data );
        });
        oReq.addEventListener("error", (evt) => {
            this.requestError.emit( evt.error );
        });
        oReq.open("GET", this.requestUrl);
        oReq.send();
    }
}