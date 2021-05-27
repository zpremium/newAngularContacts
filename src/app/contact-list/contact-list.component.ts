import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

interface Contact {
  name?: string;
  email?: string;
  phoneNumber?: string;
  image?: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = contactList;
  error: string | undefined;
  newContact: Contact = { name: '', email: '', phoneNumber: '', image: '' };
  status = "<3";
  toggle: boolean=true;
  constructor() {}

  ngOnInit() {}

  addContact() {
    // add contact to contacts list

    if (this.newContact.name == '' || this.newContact.phoneNumber == '') {
      this.error =
        'Introduzca el nombre de la persona y/o el número de telefóno';
      return;
    }
    this.contacts.push(this.newContact);
    console.log(this.newContact);

    // clear inputs
    this.clearInputs();
  }
  clearInputs(): void {
    this.newContact = {} as Contact;
  }
  deleteContact(user: Contact) {
    // coge el index del usuario
    let index = this.contacts.indexOf(user);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
    console.log(index);
  }
  addToSummary(contact:Contact[]){
    this.toggle = !this.toggle;
    this.status = this.toggle ? "red" : "black";
}

  editContact() {}
  showContact() {}
}
