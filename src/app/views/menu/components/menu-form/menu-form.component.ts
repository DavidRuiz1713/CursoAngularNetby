import { Component, EventEmitter, Output } from '@angular/core';
import { Menu } from '../../../../core/interface/menu/menu';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { fieldsComponents } from '../../../../shared/fields/fields-components';

type FormData = {
  [key in keyof Menu]: FormControl<Menu[key] | unknown>;
};
@Component({
  selector: 'menu-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...fieldsComponents],
  templateUrl: './menu-form.component.html',
  styleUrl: './menu-form.component.scss',
})
export class MenuFormComponent {
  @Output() addData: EventEmitter<Menu> = new EventEmitter<Menu>();

  form: FormGroup<FormData> = new FormGroup<FormData>({
    id: new FormControl({ value: 0, disabled: true }),
    nombre_plato: new FormControl(),
    descripcion_plato: new FormControl(),
    id_categoria: new FormControl(),
    precio_venta: new FormControl(),
    costo_produccion: new FormControl(),
    ingredientes: new FormControl(),
    alergenos: new FormControl(),
    imagen_plato: new FormControl(),
  });

  constructor() {}

  saveData(): void {
    const data = this.form.getRawValue();
    this.addData.next(data as Menu);
  }
}
