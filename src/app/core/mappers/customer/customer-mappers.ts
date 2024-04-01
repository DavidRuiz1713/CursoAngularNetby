import { Customer } from '../../interface/customers/customers';
import { CustomerResponse } from '../../models/customers/customers-response';

export class CustomerMapper {
  static map(data: CustomerResponse): Customer {
    return {
      id: data.id,
      name: data.nombre_completo,
      phone: data.telefono,
      email: data.correo_electronico,
      birthday: data.fecha_nacimiento,
      address: data.direccion,
      notes: data.notas,
      picture: data.foto,
      gender: data.genero,
    };
  }
}
