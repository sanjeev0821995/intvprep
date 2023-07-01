/* eslint-disable id-blacklist */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AppServiceService } from 'app/mock-api/common/appConfig/app-service.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-view-deep-content',
    templateUrl: './view-deep-content.component.html',
    styleUrls: ['./view-deep-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewDeepContentComponent implements OnInit {
    configUrl: string;
    routerSub: Subscription;
    loadingRouteConfig: boolean;
    getConfig: unknown;
    constructor(
        private configService: AppServiceService,
        private route: Router
    ) {
        // this.routerSub = this.route.events.subscribe((event) => {
        //     if (event instanceof NavigationStart) {
        //         console.log(this.loadingRouteConfig);
        //     } else if (event instanceof NavigationEnd) {
        //         this.configUrl = event.url.split('/').join('_');
        //         this.getConfig = this.configService.getConfig(this.configUrl);
        //     }
        // });
    }


    ngOnInit(): void {

    }

    redirectTo(url: any): void {
        this.route.navigate(['angular/deep_dive', url?.routeTo]);
        localStorage.setItem('detailed_content', JSON.stringify(url?.detailed_content));
    }

    selectColor(): string {
        const number = Math.floor(Math.random() * (10 - 1) + 1);
        switch (number) {
            case 1: return 'bg1';
                break;
            case 2: return 'bg2';
                break;
            case 3: return 'bg3';
                break;
            case 4: return 'bg4';
                break;
            case 5: return 'bg5';
                break;
            case 6: return 'bg6';
                break;
            case 7: return 'bg7';
                break;
            case 8: return 'bg8';
                break;
            case 9: return 'bg9';
                break;
            case 10: return 'bg10';
                break;
            default: return 'bg';
        }
    }
}
