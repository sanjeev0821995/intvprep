import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from 'app/mock-api/common/appConfig/app-service.service';

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent implements OnInit, OnDestroy {
    getConfig: any;
    showAlert: boolean = false;
    /**
     * Constructor
     */
    constructor(
        private activateRoute: ActivatedRoute,
        private title: Title,
        private meta: Meta,
        private appService: AppServiceService
    ) {}
    ngOnInit(): void {
        this.appService.destroyLinkForCanonicalURL();
        this.appService.createLinkForCanonicalURL();
        this.title.setTitle('Intvprep.');
        this.meta.addTags([
            {
                name: 'description',
                content:
                    'Learn and Practice on almost all coding interview questions asked historically and get referred to the best tech companies.',
            },
            {
                property: 'og:site_name',
                content: 'Intvprep.',
            },
            {
                property: 'og:site',
                content: 'Intvprep.',
            },
            {
                property: 'og:description',
                content:
                    'Learn and Practice on almost all coding interview questions asked historically and get referred to the best tech companies.',
            },
            {
                property: 'og:image',
                content: 'https://intvprep.com/logo.PNG',
            },
        ]);

        this.activateRoute.data.subscribe((data) => {
            this.getConfig = data?.initialData[0]?.config;
        });
    }

    copyTheUrl(uri: string): void {
        const url = `${this.fetchURL(document.location.href)}${uri}`;
        navigator.clipboard.writeText(url).then(() => {
            this.showAlert = true;
            setTimeout(() => (this.showAlert = false), 2000);
        });
    }

    fetchURL(url): string {
        return url.substr(0, url.lastIndexOf('/'));
    }

    ngOnDestroy(): void {
    }
}
