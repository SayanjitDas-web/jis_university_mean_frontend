import { Component } from '@angular/core';
import {FormsModule } from "@angular/forms"
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
 message = '';

  sendMessage() {
    if (this.message.trim()) {
      console.log('User Message:', this.message);
      this.message = '';
    }
  }
}
