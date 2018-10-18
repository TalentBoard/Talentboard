import { ModuleWithProviders } from '@angular/core';
import { GlobalConfig } from './toastr-config';
export declare class ToastrModule {
    constructor(parentModule: ToastrModule);
    static forRoot(config?: Partial<GlobalConfig>): ModuleWithProviders;
}
