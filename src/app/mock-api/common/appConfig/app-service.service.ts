import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppServiceService {
    constructor(
        private http: HttpClient,
        @Inject(DOCUMENT) private doc,
    ) {}

    getConfig(name: any): any {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const fileName = name ? name : 'app-config';
        const config = require(`./${fileName}.json`);
        for (const [key, value] of Object.entries(config)) {
            if (name === key) {
                return of({ config: value });
            }
        }
    }

    createLinkForCanonicalURL(): void {
        const link: HTMLLinkElement = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);
        link.setAttribute('href', this.doc.URL);
    }

    destroyLinkForCanonicalURL(): void {
        const els = this.doc.querySelectorAll("link[rel='canonical']");
        for (let i = 0, l = els.length; i < l; i++) {
            const el = els[i];
            el.remove();
        }
    }
}
