import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactPrefillService } from '../../services/contact-prefill.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-contact-section',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, OnDestroy {
  form = {
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  };

  readonly maxLength = {
    nombre: 100,
    email: 254,
    empresa: 200,
    mensaje: 2000
  };

  private destroy$ = new Subject<void>();

  constructor(private contactPrefill: ContactPrefillService) {}

  ngOnInit(): void {
    this.contactPrefill.getSelectedService$()
      .pipe(takeUntil(this.destroy$))
      .subscribe(serviceName => {
        if (serviceName) {
          this.form.mensaje = `Hola, quisiera información sobre el servicio "${serviceName}".`;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    // TODO: integrar con backend o servicio de correo
    console.log('Formulario enviado:', this.form);
  }
}
