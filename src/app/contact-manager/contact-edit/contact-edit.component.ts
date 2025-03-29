import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent implements OnInit {
  contactId!: number;
  fName = '';
  lName = '';
  phoneNumber = '';
  email = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr) {
      this.contactId = +idStr;
      const contact = this.contactService.getContactById(this.contactId);
      if (contact) {
        this.fName = contact.fName;
        this.lName = contact.lName;
        this.phoneNumber = contact.phoneNumber;
        this.email = contact.email;
      }
    }
  }

  onUpdate() {
    const updatedContact: Contact = {
      id: this.contactId,
      fName: this.fName,
      lName: this.lName,
      phoneNumber: this.phoneNumber,
      email: this.email,
    };
    this.contactService.updateContact(updatedContact);
    this.router.navigate(['/contacts/list']);
  }

  onCancel() {
    this.router.navigate(['/contacts/list']);
  }
}
