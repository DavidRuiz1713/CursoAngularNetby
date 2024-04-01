export class CategoryResponse {
  id: number;
  nombre_categoria: string;
  descripcion_categoria: string;
  estado: string;

  constructor(data: { [key: string]: unknown }) {
    this.id = data['id'] as number;
    this.nombre_categoria = data['nombre_categoria'] as string;
    this.descripcion_categoria = data['descripcion_categoria'] as string;
    this.estado = data['estado'] as string;
  }
}
