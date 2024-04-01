import { Menu } from '../../interface/menu/menu';
import { MenuResponse } from '../../models/menu/menu-response';

export class MenuMapper {
  static map(data: MenuResponse): Menu {
    return {
      id: data.id,
      nombre_plato: data.nombre_plato,
      descripcion_plato: data.descripcion_plato,
      id_categoria: data.id_categoria,
      precio_venta: data.precio_venta,
      costo_produccion: data.costo_produccion,
      ingredientes: data.ingredientes,
      alergenos: data.alergenos,
      imagen_plato: data.imagen_plato,
    };
  }

  static toJson(data: MenuResponse): Menu {
    return {
      id: data.id,
      nombre_plato: data.nombre_plato,
      descripcion_plato: data.descripcion_plato,
      id_categoria: data.id_categoria,
      precio_venta: data.precio_venta,
      costo_produccion: data.costo_produccion,
      ingredientes: data.ingredientes,
      alergenos: data.alergenos,
      imagen_plato: data.imagen_plato,
    };
  }
}
