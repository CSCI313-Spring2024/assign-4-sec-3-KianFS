import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
})
export class ContactAddComponent {
  fName = '';
  lName = '';
  phoneNumber = '';
  email = '';

  constructor(private contactService: ContactService, private router: Router) {}

  onAdd() {
    const newContact: Contact = {
      fName: this.fName,
      lName: this.lName,
      phoneNumber: this.phoneNumber,
      email: this.email,
    };
    this.contactService.addContact(newContact);
    this.router.navigate(['/contacts/list']);
  }

  onCancel() {
    this.router.navigate(['/contacts/list']);
  }
}
