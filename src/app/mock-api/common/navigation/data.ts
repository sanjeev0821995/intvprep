/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: '',
        title: 'All Interview Questions',
        subtitle: 'Kill your Interview...🎉',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: '',
                title: 'Courses',
                type: 'basic',
                icon: 'heroicons_outline:academic-cap',
                link: '/',
                // badge: {
                //     title  : 'New',
                //     classes: 'px-2 bg-yellow-300 text-black rounded-full'
                // },
            },
            {
                id: 'agenticAI.basic',
                title: 'Agentic AI Interview Questions',
                type: 'basic',
                link: '/agenticAI-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'angular.basic',
                title: 'Angular Interview Question',
                type: 'basic',
                icon: 'heroicons_outline:code',
                link: '/angular-interview-questions',
            },
            {
                id: 'aws.basic',
                title: 'AWS Interview Questions',
                type: 'basic',
                link: '/aws-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'c#.basic',
                title: 'C# Interview Questions',
                type: 'basic',
                link: '/c-sharp-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'angular.css',
                title: 'CSS Interview Questions',
                type: 'basic',
                link: '/css-interview-questions',
                icon: 'heroicons_outline:code',
                // badge: {
                //     title  : 'New',
                //     classes: 'px-2 bg-yellow-300 text-black rounded-full'
                // }
            },
            {
                id: 'data.science.basic',
                title: 'Data Science Interview Questions',
                type: 'basic',
                link: '/datascience-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'devops.basic',
                title: 'Devops Interview Questions',
                type: 'basic',
                link: '/devops-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'docker.basic',
                title: 'Docker Interview Questions',
                type: 'basic',
                link: '/docker-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'express.basics',
                title: 'ExpressJS Interview Questions',
                type: 'basic',
                link: '/express-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'generativeAI.basic',
                title: 'Generative AI Interview Questions',
                type: 'basic',
                link: '/generativeAI-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'angular.git',
                title: 'Git Interview Questions',
                type: 'basic',
                link: '/git-interview-questions',
                icon: 'heroicons_outline:code',
            },
            {
                id: 'angular.HTML',
                title: 'HTML Interview Questions',
                type: 'basic',
                link: '/html-interview-questions',
                icon: 'heroicons_outline:code',
                // badge: {
                //     title  : 'New',
                //     classes: 'px-2 bg-yellow-300 text-black rounded-full'
                // }
            },
            {
                id: 'java.basic',
                title: 'Java Interview Questions',
                type: 'basic',
                link: '/java-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'java.microservices',
                title: 'Java Micro-services Interview Questions',
                type: 'basic',
                link: '/java-microservices-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'java.multithreading',
                title: 'Java Multi-threading Interview Questions',
                type: 'basic',
                link: '/java-multithreading-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'javascript.basic',
                title: 'JavaScript Interview Question',
                type: 'basic',
                icon: 'heroicons_outline:code',
                link: '/javascript-interview-questions',
            },
            {
                id: 'javascript.basic',
                title: 'JavaScript Coding Question',
                type: 'basic',
                icon: 'heroicons_outline:code',
                link: '/javascript-coding-interview-questions',
                // badge: {
                //     title: 'New',
                //     classes: 'px-2 bg-yellow-300 text-black rounded-full',
                // },
            },
            {
                id: 'javascript.javascript-quiz',
                title: 'JavaScript Quiz',
                type: 'basic',
                icon: 'heroicons_outline:code',
                link: '/javascript-quiz',
            },
            {
                id: 'javascript.weird-part-of-javascript',
                title: 'Weird Part of javascript',
                type: 'basic',
                icon: 'heroicons_outline:code',
                link: '/weird-part-of-javascript',
            },
            {
                id: 'jenkins.basic',
                title: 'Jenkins Interview Questions',
                type: 'basic',
                link: '/jenkins-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'mongoDB.basic',
                title: 'MongoDB Interview Questions',
                type: 'basic',
                link: '/mongoDB-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'mySQL.basic',
                title: 'MySQL Interview Questions',
                type: 'basic',
                link: '/mySQL-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'nextJS.basics',
                title: 'NextJS Interview Questions',
                type: 'basic',
                link: '/nextJS-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'node.basics',
                title: 'NodeJS Interview Questions',
                type: 'basic',
                link: '/nodejs-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'playwright.basic',
                title: 'Playwright Interview Questions',
                type: 'basic',
                link: '/playwright-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'postgreSQL.basic',
                title: 'PostgreSQL Interview Questions',
                type: 'basic',
                link: '/postgreSQL-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'python.basic',
                title: 'Python Interview Questions',
                type: 'basic',
                link: '/python-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'react.basic',
                title: 'ReactJS Interview Question',
                type: 'basic',
                icon: 'heroicons_outline:code',
                link: '/react-interview-questions',
            },
            {
                id: 'selenium.basic',
                title: 'Selenium Interview Questions',
                type: 'basic',
                link: '/selenium-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'java.springboot.basic',
                title: 'Basic Spring-Boot Interview Questions',
                type: 'basic',
                link: '/basic-springboot-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'java.springboot.advanced',
                title: 'Spring-Boot Interview Questions',
                type: 'basic',
                link: '/springboot-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'java.springboot.security',
                title: 'Spring-Boot Security Interview Questions',
                type: 'basic',
                link: '/springboot-security-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'java.springbootJPA',
                title: 'Spring-Boot JPA Interview Questions',
                type: 'basic',
                link: '/springbootJPA-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'tailwind.CSS',
                title: 'Tailwind CSS Interview Questions',
                type: 'basic',
                link: '/tailwindCSS-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'testNG.basic',
                title: 'TestNG Interview Questions',
                type: 'basic',
                link: '/testNG-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'typescript.basic',
                title: 'Typescript Interview Questions',
                type: 'basic',
                link: '/typescript-interview-questions',
                icon: 'heroicons_outline:code',
                badge: {
                    title: 'New',
                    classes: 'px-2 bg-yellow-300 text-black rounded-full',
                },
            },
            {
                id: 'vue.basic',
                title: 'VueJS Interview Question',
                type: 'basic',
                icon: 'heroicons_outline:code',
                link: '/vuejs-interview-questions',
            },
            // {
            //     id: 'apps.Testing',
            //     title: 'Testing',
            //     type: 'collapsable',
            //     icon: 'heroicons_outline:code',
            //     children: [
            //         {
            //             id: 'react.basic',
            //             title: 'ReactJS Interview Question',
            //             type: 'basic',
            //             icon: 'heroicons_outline:code',
            //             link: '/react-interview-questions',
            //         },
            //         {
            //             id: 'tesing.selenium',
            //             title: 'selenium 2',
            //             type: 'basic',
            //             link: '/selenium-2',
            //         },
            //     ],
            // },
            // {
            //     id: 'apps.react',
            //     title: 'React',
            //     type: 'collapsable',
            //     icon: 'heroicons_outline:code',
            //     children: [
            //         {
            //             id: 'react.basic',
            //             title: 'React Basic Question',
            //             type: 'basic',
            //             link: '/react-interview-questions',
            //         },+
            //         {
            //             id: 'react.advance',
            //             title: 'React Advance Question',
            //             type: 'basic',
            //             link: '/advance-react-interview-questions',
            //         },
            //     ],
            // },
            // {
            //     id: 'apps.vue',
            //     title: 'Vue',
            //     type: 'collapsable',
            //     icon: 'heroicons_outline:code',
            //     children: [
            //         {
            //             id: 'vue.basic',
            //             title: 'Vue Basic Question',
            //             type: 'basic',
            //             link: '/vuejs-interview-questions',
            //         },
            //         {
            //             id: 'vue.advance',
            //             title: 'Vue Advance Question',
            //             type: 'basic',
            //             link: '/advance-vuejs-interview-questions',
            //         },
            //     ],
            // },
            // {
            //     id: 'apps.javascript',
            //     title: 'JavaScript',
            //     type: 'collapsable',
            //     icon: 'heroicons_outline:code',
            //     children: [
            //         {
            //             id: 'javascript.basic',
            //             title: 'JavaScript Basic Question',
            //             type: 'basic',
            //             link: '/javascript-interview-questions',
            //         },
            //         {
            //             id: 'javascript.advance',
            //             title: 'JavaScript Advance Question',
            //             type: 'basic',
            //             link: '/advance-javascript-interview-questions',
            //         },
            //         {
            //             id: 'javascript.basic',
            //             title: 'JavaScript Coding Question',
            //             type: 'basic',
            //             link: '/javascript-coding-interview-questions',
            //             badge: {
            //                 title: 'New',
            //                 classes:
            //                     'px-2 bg-yellow-300 text-black rounded-full',
            //             },
            //         },
            //         {
            //             id: 'javascript.javascript-quiz',
            //             title: 'JavaScript Quiz',
            //             type: 'basic',
            //             link: '/javascript-quiz',
            //         },
            //         {
            //             id: 'javascript.weird-part-of-javascript',
            //             title: 'Weird Part of javascript',
            //             type: 'basic',
            //             link: '/weird-part-of-javascript',
            //         },
            //     ],
            // },

            // {
            //     id      : 'apps.html',
            //     title   : 'Html',
            //     type    : 'collapsable',
            //     icon    : 'heroicons_outline:code',
            //     children: [
            //         {
            //             id: 'html.basic',
            //             title: 'HTML Interview Question',
            //             type: 'basic',
            //             link: '/html-interview-questions',
            //         }
            //     ],
            // },
            // {
            //     id      : 'apps.css',
            //     title   : 'CSS',
            //     type    : 'collapsable',
            //     icon    : 'heroicons_outline:code',
            //     children: [
            //         {
            //             id: 'angular.basic',
            //             title: 'CSS Interview Question',
            //             type: 'basic',
            //             link: '/css-interview-questions',
            //         }
            //         // {
            //         //     id: 'css.test',
            //         //     title: 'Test Yourself',
            //         //     type: 'basic',
            //         //     link: '/css/test',
            //         // },
            //     ],
            // },
        ],
    },
];
