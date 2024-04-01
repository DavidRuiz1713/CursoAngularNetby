import { Categories } from '../../interface/categories/categories';
import { CategoryResponse } from '../../models/categories/categories-response';

export class CategoriesMapper {
  static map(data: CategoryResponse): Categories {
    return {
      id: data.id,
      name: data.nombre_categoria,
      description: data.descripcion_categoria,
      state: data.estado,
    };
  }
  static toJson(data: Categories): CategoryResponse {
    return {
      descripcion_categoria: data.description,
      estado: data.state,
      nombre_categoria: data.name,
      id: data.id,
    };
  }
}
