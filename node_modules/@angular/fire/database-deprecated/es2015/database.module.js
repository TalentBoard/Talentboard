import { NgModule } from '@angular/core';
import { AngularFireDatabase } from './database';
import 'firebase/database';
export class AngularFireDatabaseModule {
}
AngularFireDatabaseModule.decorators = [
    { type: NgModule, args: [{
                providers: [AngularFireDatabase]
            },] },
];
//# sourceMappingURL=database.module.js.map