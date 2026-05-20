import { Resolve, Route, ActivatedRouteSnapshot } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    // Redirect empty path to '/example'
    // { path: '',  redirectTo: '', pathMatch: ''},
    {
        path: 'angular-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'react-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'vuejs-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'javascript-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'javascript-coding-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {
                path: ':id',
                loadChildren: () =>
                import('app/modules/view-content/view-content.module').then(
                    m => m.ViewContentModule
                ),
            },
            {
                path: '',
                loadChildren: () =>
                    import('app/modules/coding-view/coding-view.module').then(
                        m => m.CodingViewModule
                    ),
            },
        ],
    },
    {
        path: 'javascript-quiz',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'weird-part-of-javascript',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'html-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'css-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'git-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'nodejs-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'java-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'basic-springboot-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'datascience-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'java-multithreading-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'java-microservices-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'playwright-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'python-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'selenium-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'springboot-security-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'springboot-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'springbootJPA-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'agenticAI-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'generativeAI-interview-questions',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'contact-us',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: 'privacy-policy',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/view-content/view-content.module').then(
                m => m.ViewContentModule
            ),
    },
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        loadChildren: () =>
            import('app/modules/example/example.module').then(
                m => m.ExampleModule
            ),
    },
];

export class AppRoutes {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Resolve(route: ActivatedRouteSnapshot) {
        // console.log(route.data);
    }
}
