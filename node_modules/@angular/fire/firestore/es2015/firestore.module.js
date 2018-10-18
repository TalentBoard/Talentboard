import { NgModule } from '@angular/core';
import { AngularFirestore, EnablePersistenceToken } from './firestore';
import 'firebase/firestore';
export class AngularFirestoreModule {
    static enablePersistence() {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: EnablePersistenceToken, useValue: true },
            ]
        };
    }
}
AngularFirestoreModule.decorators = [
    { type: NgModule, args: [{
                providers: [AngularFirestore]
            },] },
];
//# sourceMappingURL=firestore.module.js.map