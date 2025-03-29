import { Injectable, signal } from '@angular/core';
import { Contact } from './contact.model';

const INITIAL_CONTACTS: Contact[] = [
  {
    id: 1,
    fName: 'John',
    lName: 'Adams',
    phoneNumber: '701-000-1000',
    email: 'john.adams@example.com',
  },
  {
    id: 2,
    fName: 'Mary',
    lName: 'Jane',
    phoneNumber: '701-000-1000',
    email: 'mary.jane@example.com',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts = signal<Contact[]>([...INITIAL_CONTACTS]);
  private _nextId = INITIAL_CONTACTS.length + 1;

  getAllContacts(): Contact[] {
    return this.contacts();
  }

  addContact(newContact: Contact) {
    newContact.id = this._nextId++;
    const updated = [...this.contacts(), newContact];
    this.contacts.set(updated);
  }

  updateContact(updatedContact: Contact) {
    const list = this.contacts().map((c) =>
      c.id === updatedContact.id ? updatedContact : c
    );
    this.contacts.set(list);
  }

  deleteContact(id: number) {
    const filtered = this.contacts().filter((c) => c.id !== id);
    this.contacts.set(filtered);
  }

  getContactById(id: number) {
    return this.contacts().find((c) => c.id === id);
  }
}
