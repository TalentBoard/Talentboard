import { NgModule } from '@angular/core';
import { AngularFireFunctions } from './functions';
import 'firebase/functions';
export class AngularFireFunctionsModule {
}
AngularFireFunctionsModule.decorators = [
    { type: NgModule, args: [{
                providers: [AngularFireFunctions]
            },] },
];
//# sourceMappingURL=functions.module.js.map