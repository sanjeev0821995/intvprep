import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';

@NgModule()
export class IconsModule {
    /**
     * Constructor
     */
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        if (isPlatformBrowser(this.platformId)) {
            // Register icon sets
            this._matIconRegistry.addSvgIconSet(
                this._domSanitizer.bypassSecurityTrustResourceUrl(
                    'assets/icons/material-twotone.svg'
                )
            );
            this._matIconRegistry.addSvgIconSetInNamespace(
                'mat_outline',
                this._domSanitizer.bypassSecurityTrustResourceUrl(
                    'assets/icons/material-outline.svg'
                )
            );
            this._matIconRegistry.addSvgIconSetInNamespace(
                'mat_solid',
                this._domSanitizer.bypassSecurityTrustResourceUrl(
                    'assets/icons/material-solid.svg'
                )
            );
            this._matIconRegistry.addSvgIconSetInNamespace(
                'iconsmind',
                this._domSanitizer.bypassSecurityTrustResourceUrl(
                    'assets/icons/iconsmind.svg'
                )
            );
            this._matIconRegistry.addSvgIconSetInNamespace(
                'feather',
                this._domSanitizer.bypassSecurityTrustResourceUrl(
                    'assets/icons/feather.svg'
                )
            );
            this._matIconRegistry.addSvgIconSetInNamespace(
                'heroicons_outline',
                this._domSanitizer.bypassSecurityTrustResourceUrl(
                    'assets/icons/heroicons-outline.svg'
                )
            );
            this._matIconRegistry.addSvgIconSetInNamespace(
                'heroicons_solid',
                this._domSanitizer.bypassSecurityTrustResourceUrl(
                    'assets/icons/heroicons-solid.svg'
                )
            );
        }
    }
}
