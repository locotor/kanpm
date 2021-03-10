import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class MessageService {
    constructor(
        private snackBar: MatSnackBar
    ) { }

    openMessage(message: string) {
        this.snackBar.open(message, '', {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration: 2000
        });
    }
}
