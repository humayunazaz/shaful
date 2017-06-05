import { FormControl } from '@angular/forms';

export class customValidator{
    static emailValid(control:FormControl){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(control.value)){
        return null;
        } else {
        return { emailValid: true };
        }
  }
}