import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Customer from 'App/Models/Customer'

export default class CustomersController {
  public async getAll() {
    var result = await Customer.all()
    return result
  }
  public async getEmployeeId(ctx: HttpContextContract) {
    var result = await Customer.query().preload('EmployeeId')
    return result
  }
  public async getId(ctx: HttpContextContract) {
    var id = ctx.params.id
    var result = await Customer.findOrFail(id)
    return result
  }
  public async create(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      customer_name: schema.string(),
      contact_first_name: schema.string(),
      contact_last_name: schema.string(),
      phone_number: schema.string(),
      address_line1: schema.string(),
      address_line2: schema.string(),
      city: schema.string(),
      state: schema.string(),
      postal_code: schema.string(),
      country: schema.string(),
      employee_id: schema.number(),
      credit_limit: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var customer = new Customer()
    customer.id = fields.id
    customer.customerName = fields.customer_name
    customer.contactFirstName = fields.contact_first_name
    customer.contactLastName = fields.contact_last_name
    customer.phoneNumber = fields.phone_number
    customer.addressLine1 = fields.address_line1
    customer.addressLine2 = fields.address_line2
    customer.city = fields.city
    customer.state = fields.state
    customer.postalCode = fields.postal_code
    customer.country = fields.country
    customer.employeeId = fields.employee_id
    customer.creditLimit = fields.credit_limit
    var result = await customer.save()
    return result
  }
  public async update(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      customer_name: schema.string(),
      contact_first_name: schema.string(),
      contact_last_name: schema.string(),
      phone_number: schema.string(),
      address_line1: schema.string(),
      address_line2: schema.string(),
      city: schema.string(),
      state: schema.string(),
      postal_code: schema.string(),
      country: schema.string(),
      employee_id: schema.number(),
      credit_limit: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id
    var customer = await Customer.findOrFail(id)
    customer.customerName = fields.customer_name
    customer.contactFirstName = fields.contact_first_name
    customer.contactLastName = fields.contact_last_name
    customer.phoneNumber = fields.phone_number
    customer.addressLine1 = fields.address_line1
    customer.addressLine2 = fields.address_line2
    customer.city = fields.city
    customer.state = fields.state
    customer.postalCode = fields.postal_code
    customer.country = fields.country
    customer.employeeId = fields.employee_id
    customer.creditLimit = fields.credit_limit
    var result = await customer.save()
    return result
  }
  public async destroy(ctx: HttpContextContract) {
    var id = ctx.params.id
    var customer = await Customer.findOrFail(id)
    await customer.delete()
    return { message: 'The customer has been deleted!' }
  }
}
