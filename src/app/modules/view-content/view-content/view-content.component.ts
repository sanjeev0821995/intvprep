/* eslint-disable @typescript-eslint/naming-convention */
import { isPlatformBrowser } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
    PLATFORM_ID,
} from '@angular/core';
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
export class ViewContentComponent implements OnInit {
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
    currentYear: any;
    constructor(
        private activateRoute: ActivatedRoute,
        private title: Title,
        private meta: Meta,
        private appService: AppServiceService,
        @Inject(PLATFORM_ID) private platformId: Object, // Inject the platform ID
    ) {}

    ngOnInit(): void {
        this.currentYear = new Date().getFullYear();
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
            "Sorry I can't speak!";
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

    setMetaTag(metaDes, imgUrl = 'https://intvprep.com/logo.PNG'): void {
        this.meta.updateTag({
            name: 'description',
            content: metaDes,
        });
        this.meta.updateTag({
            property: 'og:site_name',
            content: 'Intvprep.',
        });
        this.meta.updateTag({
            property: 'og:site',
            content: 'Intvprep.',
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
                `Top 100+ Angular Interview Questions Form Beginner to Experienced(${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                // eslint-disable-next-line max-len
                'Prepare from this comprehensive list of the latest Angular Interview Questions and crack your dream company interview. These angular questions cater to freshers as well as experienced professionals.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('Angular-interview-Questions');

            return 'angular';
        } else if (this.path.includes('react')) {
            this.setTitle(
                `Top 100+ ReactJS Interview Questions Form Beginner to Experienced(${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                // eslint-disable-next-line max-len
                'Prepare from this list of ReactJS Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('React-interview-Questions');

            return 'react';
        } else if (this.path.includes('nextJS')) {
            this.setTitle(
                `Top 50+ NextJS Interview Questions Form Beginner to Experienced(${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                // eslint-disable-next-line max-len
                'Prepare from this list of NextJS Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('NextJS-interview-Questions');

            return 'nextjs';
        } else if (this.path.includes('vue')) {
            this.setTitle(
                `Top 50+ VueJS Interview Questions Form Beginner to Experienced(${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                // eslint-disable-next-line max-len
                'Prepare from this list of VueJS Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('Vue-interview-Questions');

            return 'vue';
        } else if (this.path.includes('javascript')) {
            if (this.path.includes('quiz')) {
                this.setTitle('JavaScript Quiz - Intvprep.');
                this.setMetaTag(
                    // eslint-disable-next-line max-len
                    'Learn and Practice on almost all javascript coding Interview Questions mostly asked in the interview and get the job..',
                    'https://intvprep.com/logo.PNG',
                );
            } else if (this.path.includes('coding')) {
                this.setTitle(
                    `JavaScript Coding Interview Questions (${this.currentYear}) - Intvprep.`,
                );
                if (this.id) {
                    this.setTitle(
                        // eslint-disable-next-line quotes
                        `JavaScript ${this.id} Coding Interview Questions (${this.currentYear}) - Intvprep.`,
                    );
                }
                this.setMetaTag(
                    // eslint-disable-next-line max-len
                    'Learn and Practice on almost all javascript coding Interview Questions mostly asked in the interview and get the job..',
                    'https://intvprep.com/logo.PNG',
                );
            } else if (this.path.includes('weird')) {
                this.setTitle(
                    `Weird Part of JavaScript Questions (${this.currentYear}) - Intvprep.`,
                );
                this.setMetaTag(
                    // eslint-disable-next-line max-len
                    'Learn and Practice on almost all javascript coding Interview Questions mostly asked in the interview and get the job..',
                    'https://intvprep.com/logo.PNG',
                );
            } else {
                this.setTitle(
                    `Top 50+ javaScript Interview Questions Form Beginner to Experienced(${this.currentYear}) - Intvprep.`,
                );
                this.setMetaTag(
                    // eslint-disable-next-line max-len
                    'Learn and Practice on almost all javascript Questions for freshers and experienced candidates and ace your Interview.',
                    'https://intvprep.com/logo.PNG',
                );
            }
            this.trackUsers('JavaScript-interview-Questions');

            return 'javascript';
        } else if (this.path.includes('html')) {
            this.setTitle(
                `Top 40+ HTML and HTML5 Interview Questions (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare from this list of HTML & HTML5 Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('Html-interview-Questions');

            return 'html';
        } else if (this.path.includes('css')) {
            this.setTitle(
                `Top 20+ CSS Interview Questions (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Find top CSS interview questions asked. Explore basic, intermediate, and advanced level questions.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('CSS-interview-Questions');

            return 'css';
        } else if (this.path.includes('tailwindCSS')) {
            this.setTitle(
                `Top 50+ Tailwind CSS Interview Questions (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Find top Tailwind CSS interview questions asked. Explore basic, intermediate, and advanced level questions.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('tailwindCSS-interview-Questions');

            return 'tailwind-css';
        } else if (this.path.includes('node')) {
            this.setTitle(
                `Most Asked NodeJs Interview Questions (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare from this list of NodeJs Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('nodejs-interview-Questions');

            return 'nodejs';
        } else if (this.path.includes('express')) {
            this.setTitle(
                `Top 100+ ExpressJs Interview Questions (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare from this list of ExpressJs Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('express-interview-Questions');

            return 'express';
        } else if (this.path.includes('mongoDB')) {
            this.setTitle(
                `Top 100+ MongoDB Interview Questions (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare from this list of MongoDB Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('mongoDB-interview-Questions');

            return 'mongoDB';
        } else if (this.path.includes('postgreSQL')) {
            this.setTitle(
                `Top 50+ postgreSQL Interview Questions (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare from this list of PostgreSQL Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('postgreSQL-interview-Questions');

            return 'postgreSQL';
        } else if (this.path.includes('git')) {
            this.setTitle(
                `Top 50+ Commonly Asked GIT Interview Questions (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare from this list of Git Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('git-interview-Questions');

            return 'git';
        } else if (this.path.includes('c-sharp')) {
            this.setTitle(
                `Top 50+ C# Interview Questions (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare from this list of C# Interview Questions asked at top companies for freshers and experienced candidates and ace your Interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('c-sharp-interview-Questions');

            return 'csharp';
        } else if (this.path.includes('java-interview-questions')) {
            this.setTitle(
                `Top 200+ Java Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Java Questions and Answers for freshers and experienced candidates to crack your next Java developer interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('java-interview-questions');

            return 'java';
        } else if (
            this.path.includes('java-microservices-interview-questions')
        ) {
            this.setTitle(
                `Top 50+ Java Microservices Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Java Microservices Interview Questions and Answers for freshers and experienced candidates to crack your next microservices interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('java-microservices-interview-questions');

            return 'java';
        } else if (
            this.path.includes('java-multithreading-interview-questions')
        ) {
            this.setTitle(
                `Top 50+ Java Multithreading Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Java Multithreading Interview Questions and Answers for freshers and experienced candidates to crack your next Java interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('java-multithreading-interview-questions');

            return 'java';
        } else if (this.path.includes('basic-springboot-interview-questions')) {
            this.setTitle(
                `Top 50+ Basic Springboot Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Basic Springboot Questions and Answers for freshers and experienced candidates to crack your next developer interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('basic-springboot-interview-questions');

            return 'springboot';
        } else if (this.path.includes('springboot-interview-questions')) {
            this.setTitle(
                `Top 80+ Springboot Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Springboot Interview Questions and Answers for freshers and experienced candidates to crack your next Springboot developer interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('springboot-interview-questions');

            return 'springboot';
        } else if (
            this.path.includes('springboot-security-interview-questions')
        ) {
            this.setTitle(
                `Top 50+ Springboot Security Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Springboot Security Interview Questions and Answers for freshers and experienced candidates to crack your next Spring Security interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('springboot-security-interview-questions');

            return 'springboot';
        } else if (this.path.includes('springbootJPA-interview-questions')) {
            this.setTitle(
                `Top 50+ Springboot JPA Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Springboot JPA Interview Questions and Answers for freshers and experienced candidates to crack your next Springboot JPA interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('springbootjpa-interview-questions');

            return 'springboot';
        } else if (this.path.includes('mySQL-interview-questions')) {
            this.setTitle(
                `Top 150+ MySQL Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked MySQL Interview Questions and Answers for freshers and experienced candidates to crack your next automation testing interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('mySQL-interview-questions');

            return 'mySQL';
        } else if (this.path.includes('testNG-interview-questions')) {
            this.setTitle(
                `Top 100+ TestNG Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked TestNG Interview Questions and Answers for freshers and experienced candidates to crack your next automation testing interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('testNG-interview-questions');

            return 'java';
        } else if (this.path.includes('devops-interview-questions')) {
            this.setTitle(
                `Top 50+ Devops Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Devops Interview Questions and Answers for freshers and experienced candidates to crack your next automation testing interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('devops-interview-questions');

            return 'devops';
        } else if (this.path.includes('jenkins-interview-questions')) {
            this.setTitle(
                `Top 100+ Jenkins Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Jenkins Interview Questions and Answers for freshers and experienced candidates to crack your next automation testing interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('jenkins-interview-questions');

            return 'jenkins';
        } else if (this.path.includes('aws-interview-questions')) {
            this.setTitle(
                `Top 100+ AWS Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked AWS Interview Questions and Answers for freshers and experienced candidates to crack your next automation testing interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('aws-interview-questions');

            return 'aws';
        } else if (this.path.includes('docker-interview-questions')) {
            this.setTitle(
                `Top 100+ Docker Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Docker Interview Questions and Answers for freshers and experienced candidates to crack your next automation testing interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('docker-interview-questions');

            return 'docker';
        } else if (this.path.includes('typescript-interview-questions')) {
            this.setTitle(
                `Top 100+ Typescript Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Typescript Interview Questions and Answers for freshers and experienced candidates to crack your next automation testing interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('typescript-interview-questions');

            return 'typeScript';
        } else if (this.path.includes('selenium-interview-questions')) {
            this.setTitle(
                `Top 50+ Selenium Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Selenium Interview Questions and Answers for freshers and experienced candidates to crack your next automation testing interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('selenium-interview-questions');

            return 'selenium';
        } else if (this.path.includes('playwright-interview-questions')) {
            this.setTitle(
                `Top 50+ Playwright Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Playwright Interview Questions and Answers for freshers and experienced candidates to crack your next automation testing interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('playwright-interview-questions');

            return 'playwright';
        } else if (this.path.includes('python-interview-questions')) {
            this.setTitle(
                `Top 150+ Python Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Python Questions and Answers for freshers and experienced candidates to crack your next Python developer interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('python-interview-questions');

            return 'python';
        } else if (this.path.includes('generativeAI-interview-questions')) {
            this.setTitle(
                `Top 200+ Generative AI Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Generative AI Interview Questions and Answers for freshers and experienced candidates to crack your next AI interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('generativeAI-interview-questions');

            return 'generativeAI';
        } else if (this.path.includes('agenticAI-interview-questions')) {
            this.setTitle(
                `Top 70+ Agentic AI Interview Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Agentic AI Interview Questions and Answers for freshers and experienced candidates to crack your next AI interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('agenticAI-interview-questions');

            return 'agenticAI';
        } else if (this.path.includes('datascience-interview-questions')) {
            this.setTitle(
                `Top 150+ Data Science Questions and Answers for Freshers & Experienced (${this.currentYear}) - Intvprep.`,
            );
            this.setMetaTag(
                'Prepare the most asked Data Science Questions and Answers for freshers and experienced candidates to crack your next data science interview.',
                'https://intvprep.com/logo.PNG',
            );
            this.trackUsers('datascience-intreview-questions');

            return 'datascience';
        } else if (this.path.includes('contact-us')) {
            this.setTitle('Contact Us - Intvprep.');
            this.trackUsers('contact-us');

            return 'contact-us';
        } else if (this.path.includes('privacy-policy')) {
            this.setTitle('Privacy Policy - Intvprep.');
            this.trackUsers('privacy-policy');

            return 'privacy-policy';
        }
    }

    trackUsers(title): void {
        if (isPlatformBrowser(this.platformId)) {
            window['gtag']('event', 'page_view', {
                page_title: title,
            });
        }
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
}
