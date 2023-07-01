import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppServiceService } from 'app/mock-api/common/appConfig/app-service.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-view-test',
    templateUrl: './view-test.component.html',
    styleUrls: ['./view-test.component.scss'],
})
export class ViewTestComponent implements OnInit {
    getConfig: any;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    local_page_number: number = 1;
    routerSub: Subscription;
    configUrl: string;

    constructor(
        private configService: AppServiceService,
        private route: Router
    ) {
        this.routerSub = this.route.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.configUrl = event.url.split('/').join('_');
                this.getConfig = this.configService.getConfig(this.configUrl);
                console.log(this.getConfig);
            }
        });
    }

    ngOnInit(): void {
        //this.getConfig = this.configService.getConfig("angular_test");
    }

    gotoPrevious(): void {
        if (this.local_page_number > 1) {
            this.local_page_number = this.local_page_number - 1;
        }
    }

    gotoNext(): void {
        this.local_page_number = this.local_page_number + 1;
        this.getConfig.forEach((element) => {
            console.log(element.prop);
            console.log(element.correct_option);
        });
    }
}
