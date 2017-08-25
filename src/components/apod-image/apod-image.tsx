import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'apod-image',
    styleUrl: 'apod-image.scss',
    shadow: true
})
export class ApodImage {

    @Prop() apiKey: string;
    
    @Prop() hd: boolean = false;

    @Prop() date: string;

    @Prop() height: string;

    @Prop() width: string;

    @Event() requestComplete: EventEmitter;
    
    @Event() requestError: EventEmitter;

    @Event() imageLoaded: EventEmitter;

    @State() imageUrl: string;


    componentDidLoad() {
        const req = document.querySelector('apod-request'),

        img = document.querySelector('img');
        img.addEventListener('load', () => {
            this.imageLoaded.emit(img);
            img.classList.add('fade-in')
        })

        req.addEventListener('requestComplete', (data:any) => {
            if( data.detail.media_type === 'image'){
                img.src = data.detail.url;
                this.requestComplete.emit( data );
            } else {
                this.requestError.emit( new Error("media is not an image") );
            }
            
        });

        req.addEventListener('requestError', (err) => {
            this.requestError.emit( err );
        });
    }

    render() {

        let imageProps = {
            width: null,
            height: null
        }

        if( this.width ) {
            imageProps.width = this.width
        }

        if( this.height ) {
            imageProps.height = this.height
        }

        return [
            <apod-request api-key={this.apiKey} hd={this.hd} date={this.date}></apod-request>, 
            <img style={imageProps}></img>
        ]
    }
}