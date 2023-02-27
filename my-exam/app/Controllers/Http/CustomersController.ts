import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Customer from 'App/Models/Customer'

export default class CustomersController {
  public async getAll(ctx: HttpContextContract) {
    var result = await Customer.all()
    var country = ctx.request.input('country')
    var employeeId = ctx.request.input('employeeId')
    var query = Customer.query()

    if (country) {
      query.where('country', country)
    }
    if (employeeId) {
      query.where('employee_id', employeeId)
    }
    var result = await query
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
    Customer.create(ctx.request.all())
    var result = customer.save()
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
    Customer.updateOrCreate(customer, ctx.request.all())
    var result = customer.save()
  }
  public async destory(ctx: HttpContextContract) {
    var EmployeeId = ctx.params.employee_id
    if (EmployeeId === null) {
      var id = ctx.params.id
      var customer = await Customer.findOrFail(id)
      await customer.delete()
      return { message: 'The customer has been deleted!' }
    } else {
      return { message: 'The customer has use is another' }
    }
  }
}
