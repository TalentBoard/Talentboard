import { DatabaseReference } from '../interfaces';
import { database } from 'firebase';
export declare function createRemoveMethod<T>(ref: DatabaseReference): (item?: string | database.Reference | database.DataSnapshot | undefined) => any;
