/* eslint-disable id-blacklist */
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AppServiceService } from 'app/mock-api/common/appConfig/app-service.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-coding-view',
    templateUrl: './coding-view.component.html',
    styleUrls: ['./coding-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodingViewComponent implements OnInit, OnDestroy {
    configUrl: string;
    routerSub: Subscription;
    loadingRouteConfig: boolean;
    getConfig: unknown;
    showAlert: boolean = false;
    constructor(
        private activateRoute: ActivatedRoute,
        private title: Title,
        private meta: Meta,
        private appService: AppServiceService
    ) {
    }


    ngOnInit(): void {
        this.appService.destroyLinkForCanonicalURL();
        this.appService.createLinkForCanonicalURL();
        this.activateRoute.data.subscribe((data) => {
            this.getConfig = data?.initialData[0]?.config;
        });
        this.title.setTitle('JavaScript Coding Interview Questions (2023) - Intvprep.');
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
                'Learn and Practice on almost all javascript coding Interview Questions mostly asked in the interview and get the job..',
            },
            {
                property: 'og:image',
                content: 'https://intvprep.com/logo.PNG',
            },
        ]);
    }

    copyTheUrl(uri: string): void {
        const url = `${document.location.href}/${uri}`;
        navigator.clipboard.writeText(url).then(() => {
            console.log('URL COPPIED');
        });
    }

    ngOnDestroy(): void {
    }

}
