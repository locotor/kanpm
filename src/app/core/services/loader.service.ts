import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {

    private isGlobalLoading = new BehaviorSubject<boolean>(false);
    public isGlobalLoading$ = this.isGlobalLoading.asObservable();

    public show(): void {
        this.isGlobalLoading.next(true);
    }

    public hide(): void {
        this.isGlobalLoading.next(false);
    }

}
