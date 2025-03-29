import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contacts = this.contactService.getAllContacts();
  }

  onEdit(contactId: number | undefined) {
    if (!contactId) return;
    this.router.navigate(['/contacts', 'edit', contactId]);
  }

  onDelete(contactId: number | undefined) {
    if (!contactId) return;
    this.contactService.deleteContact(contactId);
    this.loadContacts();
  }
}
