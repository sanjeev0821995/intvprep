/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/core';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from 'app/mock-api/common/appConfig/app-service.service';
import { Subscription } from 'rxjs';
import Speech from 'speak-tts';
@Component({
    selector: 'app-view-content',
    templateUrl: './view-content.component.html',
    styleUrls: ['./view-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewContentComponent implements OnInit, OnDestroy {
    getConfig: any;
    configUrl: any;
    routerSub: Subscription;
    loadingRouteConfig: boolean;
    html: any;
    result = '';
    speech: any;
    speechData: any;
    path: string;
    id: any;
    canonicalLink: any;
    constructor(
        private activateRoute: ActivatedRoute,
        private title: Title,
        private meta: Meta,
        private appService: AppServiceService
    ) {}

    ngOnInit(): void {
        this.path = this.activateRoute.pathFromRoot[1].snapshot.url[0].path;
        this.appService.destroyLinkForCanonicalURL();
        this.appService.createLinkForCanonicalURL();
        this.id = this.activateRoute?.snapshot?.params['id'];
        if (this.id) {
            this.getConfig = this.getCodingConfig(this.id);
        } else {
            this.activateRoute.data.subscribe((data) => {
                this.getConfig = data?.initialData[0]?.config;
            });
        }
        this.speech = new Speech(); // will throw an exception if not browser supported
        if (this.speech.hasBrowserSupport()) {
            this.speech
                .init({
                    volume: 1,
                    lang: 'en-GB',
                    rate: 1,
                    pitch: 1,
                    voice: 'Google UK English Female',
                    splitSentences: true,
                })
                .then((data) => {
                    this.speechData = data;
                    // data.voices.forEach((voice) => {
                    //     //console.log(voice.name + " " + voice.lang);
                    // });
                })
                .catch((e) => {
                    // console.error("An error occured while initializing : ", e);
                });
        }
    }

    start(ref: any): void {
        this.html = document.getElementById(ref);
        this.result =
            this.html.innerText ||
            this.html.textContent ||
            'Sorry I can\'t speak!';
        this.speech
            .speak({
                text: this.result,
                queue: false,
            })
            .then(() => {
                // console.log("Success !");
            })
            .catch((e) => {
                // console.error("An error occurred :", e);
            });
        this.iterateConfig(ref);
    }

    stop(id?: any): any {
        this.iterateConfig(id);
        this.speech.cancel();
    }

    iterateConfig(id: any): void {
        this.getConfig.forEach((ele) => {
            // eslint-disable-next-line eqeqeq
            if (id != ele.id) {
                ele.Que[0].playButton = true;
                ele.Que[0].pauseButton = false;
            }
        });
    }

    resume(): void {
        this.speech.resume();
    }

    setTitle(title): void {
        this.title.setTitle(title);
    }

    setMetaTag(metaDes, imgUrl = 'https://interviewant.com/logo.PNG'): void {
        this.meta.updateTag({
            name: 'description',
            content: metaDes,
        });
        this.meta.updateTag({
            property: 'og:site_name',
            content: 'Interview Ant',
        });
        this.meta.updateTag({
            property: 'og:site',
            content: 'Interview Ant',
        });
        this.meta.updateTag({
            property: 'og:description',
            content: metaDes,
        });
        this.meta.updateTag({
            property: 'og:image',
            content: imgUrl,
        });
    }

    getName(): string {
        if (this.path.includes('angular')) {
            this.setTitle(
                'Top 100+ Angular Interview Questions Form Beginner to Experienced(2023) - Interview Ant'
            );
            this.setMetaTag(
                // eslint-disable-next-line max-len
                'Prepare from this comprehensive list of the latest Angular Interview Questions and crack your dream company interview. These angular questions cater to freshers as well as experienced professionals.',
                'https://interviewant.com/logo.PNG'
            );
            this.trackUsers('Angular-interview-Questions');

            return 'angular';
        } else if (this.path.includes('react')) {
            this.setTitle(
                'Top 100+ ReactJS Interview Questions Form Beginner to Experienced(2023) - Interview Ant'
            );
            this.setMetaTag(
                // eslint-disable-next-line max-len
                'Prepare from this list of VueJS Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://interviewant.com/logo.PNG'
            );
            this.trackUsers('React-interview-Questions');

            return 'react';
        } else if (this.path.includes('vue')) {
            this.setTitle(
                'Top 50+ VueJS Interview Questions Form Beginner to Experienced(2023) - Interview Ant'
            );
            this.setMetaTag(
                // eslint-disable-next-line max-len
                'Prepare from this list of VueJS Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://interviewant.com/logo.PNG'
            );
            this.trackUsers('Vue-interview-Questions');

            return 'vue';
        } else if (this.path.includes('javascript')) {
             if (this.path.includes('quiz')) {
                this.setTitle('JavaScript Quiz - Interview Ant');
                this.setMetaTag(
                    // eslint-disable-next-line max-len
                    'Learn and Practice on almost all javascript coding Interview Questions mostly asked in the interview and get the job..',
                    'https://interviewant.com/logo.PNG'
                );
            } else if (this.path.includes('coding')) {
                this.setTitle(
                    'JavaScript Coding Interview Questions (2023) - Interview Ant'
                );
                if (this.id) {
                    this.setTitle(
                        // eslint-disable-next-line quotes
                        `JavaScript ${this.id} Coding Interview Questions (2023) - Interview Ant`
                    );
                }
                this.setMetaTag(
                    // eslint-disable-next-line max-len
                    'Learn and Practice on almost all javascript coding Interview Questions mostly asked in the interview and get the job..',
                    'https://interviewant.com/logo.PNG'
                );
            } else if (this.path.includes('weird')) {
                this.setTitle(
                    'Weird Part of JavaScript Questions (2023) - Interview Ant'
                );
                this.setMetaTag(
                    // eslint-disable-next-line max-len
                    'Learn and Practice on almost all javascript coding Interview Questions mostly asked in the interview and get the job..',
                    'https://interviewant.com/logo.PNG'
                );
            } else {
                this.setTitle(
                    'Top 50+ javaScript Interview Questions Form Beginner to Experienced(2023) - Interview Ant'
                );
                this.setMetaTag(
                    // eslint-disable-next-line max-len
                    'Learn and Practice on almost all javascript Questions for freshers and experienced candidates and ace your Interview.',
                    'https://interviewant.com/logo.PNG'
                );
            }
            this.trackUsers('JavaScript-interview-Questions');

            return 'javascript';
        } else if (this.path.includes('html')) {
            this.setTitle(
                'Top 30+ HTML and HTML5 Interview Questions (2023) - Interview Ant'
            );
            this.setMetaTag(
                'Prepare from this list of HTML & HTML5 Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://interviewant.com/logo.PNG'
            );
            this.trackUsers('Html-interview-Questions');

            return 'html';
        } else if (this.path.includes('css')) {
            this.setTitle(
                'Top 20+ CSS Interview Questions (2023) - Interview Ant'
            );
            this.setMetaTag(
                'Find top CSS interview questions asked. Explore basic, intermediate, and advanced level questions.',
                'https://interviewant.com/logo.PNG'
            );
            this.trackUsers('CSS-interview-Questions');

            return 'css';
        } else if (this.path.includes('node')) {
            this.setTitle(
                'Most Asked NodeJs Interview Questions (2023) - Interview Ant'
            );
            this.setMetaTag(
                'Prepare from this list of NodeJs Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://interviewant.com/logo.PNG'
            );
            this.trackUsers('nodejs-interview-Questions');

            return 'nodejs';
        } else if (this.path.includes('git')) {
            this.setTitle(
                'Top 10+ Commonly Asked GIT Interview Questions (2023) - Interview Ant'
            );
            this.setMetaTag(
                'Prepare from this list of Git Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://interviewant.com/logo.PNG'
            );
            this.trackUsers('git-interview-Questions');

            return 'git';
        } else if (this.path.includes('contact-us')) {
            this.setTitle('Contact Us - Interview Ant');
            this.trackUsers('contact-us');

            return 'contact-us';
        } else if (this.path.includes('privacy-policy')) {
            this.setTitle('Privacy Policy - Interview Ant');
            this.trackUsers('privacy-policy');

            return 'privacy-policy';
        }
    }

    trackUsers(title): void {
        window['gtag']('event', 'page_view', {
            page_title: title,
        });
    }

    getCodingConfig(name: any): any {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const config = require('../../../mock-api/common/coding-config/coding-ques.json');
        for (const [key, value] of Object.entries(config)) {
            if (name === key) {
                return value;
            }
        }
    }

    ngOnDestroy(): void {}
}
