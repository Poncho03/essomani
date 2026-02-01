import { Component } from '@angular/core';

export interface AdvantageItem {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-why',
  imports: [],
  templateUrl: './why.component.html',
  styleUrl: './why.component.scss',
})
export class WhyComponent {
  readonly advantages: AdvantageItem[] = [
    {
      title: 'Calidad Superior',
      description:
        'Estándares rigurosos en cada entrega, asegurando durabilidad y precisión.',
      icon: 'quality',
    },
    {
      title: 'Seguridad Primero',
      description:
        'Protocolos estrictos de seguridad tanto en sitio como en taller.',
      icon: 'shield',
    },
    {
      title: 'Tiempos de Entrega',
      description:
        'Compromiso absoluto con los plazos acordados para no detener su operación.',
      icon: 'clock',
    },
    {
      title: 'Costos Competitivos',
      description:
        'Precios justos y transparentes sin sacrificar la calidad de los materiales.',
      icon: 'currency',
    },
    {
      title: 'Trabajo Bajo Presión',
      description:
        'Capacidad de respuesta ágil ante urgencias y proyectos críticos, sin descuidar la calidad de nuestro trabajo.',
      icon: 'pressure',
    },
    {
      title: 'Relación Honesta',
      description:
        'Trato franco y directo, construyendo confianza a largo plazo con el cliente.',
      icon: 'handshake',
    },
    {
      title: 'Amplia Experiencia',
      description:
        'Trayectoria probada trabajando con grandes empresas nacionales.',
      icon: 'experience',
    },
    {
      title: 'Servicio al Cliente Excepcional',
      description:
        'Velocidad de respuesta, servicio postventa y el asesoramiento a soluciones integrales.',
      icon: 'support',
    },
  ];
}
