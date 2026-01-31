import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  form = {
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  };

  onSubmit(): void {
    // TODO: integrar con backend o servicio de correo
    console.log('Formulario enviado:', this.form);
  }
}
