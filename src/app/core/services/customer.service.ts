import { customers } from '../const-data/customers';
import { Customer } from '../interface/customers/customers';
import { CustomerMapper } from '../mappers/customer/customer-mappers';
import { CustomerResponse } from '../models/customers/customers-response';

export class CustomerService {
  getAllCustomers(): Array<Customer> {
    const customerResponse = customers.map(
      (customer) => new CustomerResponse(customer)
    );
    const customerMapper = customerResponse.map((customer) =>
      CustomerMapper.map(customer)
    );
    return customerMapper;
  }
}
