import { NgModule } from '@angular/core';
import { AngularFirestore, EnablePersistenceToken } from './firestore';
import 'firebase/firestore';
var AngularFirestoreModule = (function () {
    function AngularFirestoreModule() {
    }
    AngularFirestoreModule.enablePersistence = function () {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: EnablePersistenceToken, useValue: true },
            ]
        };
    };
    AngularFirestoreModule.decorators = [
        { type: NgModule, args: [{
                    providers: [AngularFirestore]
                },] },
    ];
    return AngularFirestoreModule;
}());
export { AngularFirestoreModule };
//# sourceMappingURL=firestore.module.js.map