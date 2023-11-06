import { EmailValidatorAdapter } from './validation/email-validator-adapter';
import { EmailValidatorProtocol } from './validation/email-validator-protocol';


function validaEmail(emailValidator: EmailValidatorProtocol, email: string): void {
    if (emailValidator.isEmail(email)) {
        console.log('é valido');
    } else {
        console.log('é inválido');
    }
}

validaEmail(new EmailValidatorAdapter(), 'marthagmail.com');

