import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContactsService } from './../services/contacts.service';

@Injectable()
export class ContactResolver implements Resolve<any>{

    constructor(private contactService: ContactsService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let id = parseInt(route.paramMap.get('id'));
        return this.contactService.getContactById(id);
    }
}