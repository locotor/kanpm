import { AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export abstract class FormBase {

    protected valueFormatValidatorFactory(re: RegExp): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const forbidden = re.test(control.value);
            return forbidden ? null : { valueFormat: { value: control.value } };
        };
    }

    protected passwordConfirmValidator(group: FormGroup): ValidationErrors | null {
        const password = group.get('password');
        const passwordConfirm = group.get('passwordConfirm');

        return password
            && passwordConfirm
            && password.value === passwordConfirm.value
            ? null : { passwordConfirm: { value: passwordConfirm.value } };
    }

}
