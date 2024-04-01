import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octEye } from '@ng-icons/octicons';
import { Customer } from '../../core/interface/customers/customers';
import { CustomerService } from '../../core/services/customer.service';
import { customerComponents } from './components/customer-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'customers',
  standalone: true,
  imports: [CommonModule, NgIconComponent, customerComponents],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
  viewProviders: [provideIcons({ octEye })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent {
  customers = signal<Customer[]>(new CustomerService().getAllCustomers());
  showForm = signal<boolean>(false);

  showFormFn(): void {
    this.showForm.set(!this.showForm());
  }
}
