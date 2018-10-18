import { NgModule } from '@angular/core';
import { AngularFireFunctions } from './functions';
import 'firebase/functions';
var AngularFireFunctionsModule = (function () {
    function AngularFireFunctionsModule() {
    }
    AngularFireFunctionsModule.decorators = [
        { type: NgModule, args: [{
                    providers: [AngularFireFunctions]
                },] },
    ];
    return AngularFireFunctionsModule;
}());
export { AngularFireFunctionsModule };
//# sourceMappingURL=functions.module.js.map