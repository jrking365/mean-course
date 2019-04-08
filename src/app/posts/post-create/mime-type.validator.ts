import { AbstractControl } from '@angular/forms';
<<<<<<< HEAD
import { Observable } from 'rxjs';

export const mimeType =
(control: AbstractControl): Promise<{[key: string]: any}> | Observable<{[key: string]: any}> => {

};
=======
import { Observable, Observer } from 'rxjs';

export const mimeType = (control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
    const file = control.value.file as File;
    const fileReader = new FileReader();
    const frObs = Observable.create((observer: Observer<{ [key: string]: any }>) => {
        fileReader.addEventListener("loadend", () => {

        });
        fileReader.readAsArrayBuffer(file);
    })
};
>>>>>>> 15ff5fddd91515e8e19363ebeff5418edb155171
