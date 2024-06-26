import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldBaseComponent } from '../field-base/field-base.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

enum InputType {
  text = 'text',
  password = 'password',
  number = 'number',
  email = 'email',
}

@Component({
  selector: 'text',
  standalone: true,
  imports: [CommonModule, FieldBaseComponent, ReactiveFormsModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  label = input<string>();
  id = input<string>();
  placeholder = input<string>();
  valueText = input<string>();
  activeNumber = input<boolean>();
  type = input<InputType>();
  maxCharacter = input<number>();
  disabled = input<boolean>();
  styles = input<{ [key: string]: string }>();

  //formulario reactivo
  controlName = input<string>();
  fGroup = input<FormGroup>();
  control = input<FormControl<unknown>>();
}
