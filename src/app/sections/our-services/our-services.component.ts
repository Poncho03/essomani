import { Component } from '@angular/core';
import { ContactPrefillService } from '../../services/contact-prefill.service';

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-our-services',
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {
  constructor(private contactPrefill: ContactPrefillService) {}

  goToContact(serviceTitle: string): void {
    this.contactPrefill.setServiceForContact(serviceTitle);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  readonly services: ServiceItem[] = [
    {
      title: 'Fabricación y Montaje',
      description:
        'Ejecución integral de proyectos metal mecánicos con estándares de calidad superior.',
      image: 'assets/new-img/services/fab_mon.jpeg',
    },
    {
      title: 'Pailería y Estructuras',
      description:
        'Diseño y fabricación de estructuras y equipos industriales de gran envergadura.',
      image: 'assets/new-img/services/pai_est.jpg',
    },
    {
      title: 'Soldadura Especializada',
      description:
        'Procesos MIG, TIG y Arco eléctrico aplicados por personal altamente calificado y certificado.',
      image: 'assets/new-img/services/sol_esp.jpeg',
    },
    {
      title: 'Diseño CAD',
      description:
        'Desarrollo preciso de proyectos industriales en planos y modelos según los requerimientos del cliente.',
      image: 'assets/new-img/services/dis_cad.png',
    },
    {
      title: 'Mantenimiento Industrial',
      description:
        'Reparaciones preventivas y correctivas para asegurar la continuidad operativa.',
      image: 'assets/new-img/services/man_ind.jpeg',
    },
    {
      title: 'Maniobras e izajes',
      description:
        'Planificación y ejecución de izajes industriales, conforme a normas de seguridad y procedimientos operativos.',
      image: 'assets/new-img/services/man_iza.jpeg',
    },
    {
      title: 'Instalación y Puesta en Marcha',
      description:
        'Supervisión experta durante la instalación de equipos y arranque de operaciones.',
      image: 'assets/new-img/services/ins_pue_mar.png',
    },
    {
      title: 'Proyectos Especiales',
      description:
        'Soluciones "llave en mano" desarrolladas desde la ingeniería y diseño, hasta la entrega final.',
      image: 'assets/new-img/services/pro_esp.png',
    },
  ];
}
