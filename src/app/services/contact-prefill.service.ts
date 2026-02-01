import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Servicio para pasar el nombre del servicio seleccionado desde "Solicitar información"
 * hasta la sección de contacto, sin usar rutas.
 */
@Injectable({ providedIn: 'root' })
export class ContactPrefillService {
  private selectedService = new BehaviorSubject<string | null>(null);

  setServiceForContact(serviceName: string): void {
    this.selectedService.next(serviceName);
  }

  getSelectedService$() {
    return this.selectedService.asObservable();
  }
}
