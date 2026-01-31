import { Component } from '@angular/core';

interface Proyecto {
  titulo: string;
  empresa: string;
  lugar: string;
  ano: string;
  descripcion: string;
  imagenes: string[];
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  modalAbierto = false;
  proyectoIndex = 0;
  imagenIndex = 0;
  proyectoSeleccionado: Proyecto | null = null;

  proyectos: Proyecto[] = [
    { titulo: 'Tanques industriales', empresa: 'Totis', lugar: 'Orizaba, Veracruz', ano: '2024', descripcion: 'Fabricación e instalación de tanques de acero inoxidable para proceso alimenticio. Incluyó pailería, soldadura certificada y montaje in situ.', imagenes: ['https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Montaje de maquinaria industrial', empresa: 'Jarritos', lugar: 'Córdoba, Veracruz', ano: '2024', descripcion: 'Montaje y alineación de maquinaria de producción. Incluyó bases de anclaje, nivelación y puesta en marcha.', imagenes: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Transportadores de banda', empresa: 'Empresa Alimenticia', lugar: 'Xalapa, Veracruz', ano: '2023', descripcion: 'Diseño y montaje de sistema de transportadores de banda en acero inoxidable, grado alimenticio.', imagenes: ['https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Estructuras metálicas', empresa: 'Industria XYZ', lugar: 'Ixtaczoquitlán, Veracruz', ano: '2023', descripcion: 'Estructura metálica para nave industrial: columnas, vigas y entrepisos en acero al carbón.', imagenes: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Soldadura certificada', empresa: 'Pemex', lugar: 'Coatzacoalcos, Veracruz', ano: '2023', descripcion: 'Trabajos de soldadura con calidad radiografiada en tubería y equipos a presión.', imagenes: ['https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Equipos a presión', empresa: 'Grupo Bimbo', lugar: 'Puebla, Puebla', ano: '2024', descripcion: 'Fabricación de tanques herméticos a presión para proceso industrial.', imagenes: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Tolvas acero inoxidable', empresa: 'Lala', lugar: 'Veracruz, Veracruz', ano: '2023', descripcion: 'Tolvas de recepción y dosificación en acero inoxidable, grado alimenticio.', imagenes: ['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Ductos industriales', empresa: 'Cemex', lugar: 'Veracruz, Veracruz', ano: '2023', descripcion: 'Fabricación e instalación de ductos y chimeneas en placa de acero al carbón.', imagenes: ['https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Transportador helicoidal', empresa: 'Alimentos ABC', lugar: 'Orizaba, Veracruz', ano: '2024', descripcion: 'Montaje de transportador helicoidal en acero inoxidable para manejo de producto alimenticio.', imagenes: ['https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Tanques grado alimenticio', empresa: 'Herdez', lugar: 'Córdoba, Veracruz', ano: '2024', descripcion: 'Tanques de almacenamiento en acero inoxidable con acabado sanitario.', imagenes: ['https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Reparación maquinaria', empresa: 'Nestlé', lugar: 'Xalapa, Veracruz', ano: '2023', descripcion: 'Reparación y reacondicionamiento de maquinaria de producción en planta.', imagenes: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Pailería especializada', empresa: 'ArcelorMittal', lugar: 'Veracruz, Veracruz', ano: '2023', descripcion: 'Piezas especiales en placa y lámina: conos, reducciones y estructuras de soporte.', imagenes: ['https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Soldadura radiografiada', empresa: 'CFE', lugar: 'Veracruz, Veracruz', ano: '2023', descripcion: 'Soldaduras con estándar de calidad radiografiada en tubería y equipos.', imagenes: ['https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Montaje extractores', empresa: 'Kimberly-Clark', lugar: 'Ixtaczoquitlán, Veracruz', ano: '2024', descripcion: 'Instalación de extractores y ductos de ventilación industrial.', imagenes: ['https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Tanques almacenamiento', empresa: 'Braskem', lugar: 'Coatzacoalcos, Veracruz', ano: '2024', descripcion: 'Tanques de almacenamiento de producto químico con recubrimiento especial.', imagenes: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Transportadores cangilones', empresa: 'Maseca', lugar: 'Orizaba, Veracruz', ano: '2023', descripcion: 'Sistema de elevación por cangilones y transportadores asociados.', imagenes: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Tubería acero al carbón', empresa: 'Refinería', lugar: 'Minatitlán, Veracruz', ano: '2023', descripcion: 'Tubería de proceso en acero al carbón, soldadura certificada.', imagenes: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Equipos sanitarios', empresa: 'Jumex', lugar: 'Córdoba, Veracruz', ano: '2024', descripcion: 'Equipos en acero inoxidable con acabado sanitario para industria de bebidas.', imagenes: ['https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Montaje compresores', empresa: 'Industria automotriz', lugar: 'Puebla, Puebla', ano: '2024', descripcion: 'Montaje y alineación de compresores y equipos auxiliares.', imagenes: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] },
    { titulo: 'Fabricación especial', empresa: 'Cliente privado', lugar: 'Ixtaczoquitlán, Veracruz', ano: '2024', descripcion: 'Fabricación de piezas especiales según diseño del cliente para proyecto industrial.', imagenes: ['https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'] }
  ];

  abrirModal(index: number): void {
    this.proyectoIndex = index;
    this.imagenIndex = 0;
    this.proyectoSeleccionado = this.proyectos[index] ?? null;
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
  }

  imgAnterior(): void {
    if (!this.proyectoSeleccionado?.imagenes.length) return;
    this.imagenIndex = this.imagenIndex <= 0 ? this.proyectoSeleccionado.imagenes.length - 1 : this.imagenIndex - 1;
  }

  imgSiguiente(): void {
    if (!this.proyectoSeleccionado?.imagenes.length) return;
    this.imagenIndex = this.imagenIndex >= this.proyectoSeleccionado.imagenes.length - 1 ? 0 : this.imagenIndex + 1;
  }

  proyectoAnterior(): void {
    if (this.proyectoIndex > 0) {
      this.proyectoIndex--;
      this.imagenIndex = 0;
      this.proyectoSeleccionado = this.proyectos[this.proyectoIndex] ?? null;
    }
  }

  proyectoSiguiente(): void {
    if (this.proyectoIndex < this.proyectos.length - 1) {
      this.proyectoIndex++;
      this.imagenIndex = 0;
      this.proyectoSeleccionado = this.proyectos[this.proyectoIndex] ?? null;
    }
  }
}
