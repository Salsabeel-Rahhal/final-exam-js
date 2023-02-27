import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Employee from 'App/Models/Employee'
export default class EmployeesController {
  public async getAll() {
    var result = await Employee.all()
    return result
  }

  public async getId(ctx: HttpContextContract) {
    var id = ctx.params.id
    var result = await Employee.findOrFail(id)
    return result
  }
  public async create(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      first_name: schema.string(),
      last_name: schema.string(),
      extension: schema.string(),
      email: schema.string(),
      office_code: schema.string(),
      reports_to: schema.number(),
      job_title: schema.string(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var employee = new Employee()
    employee.id = fields.id
    employee.firstName = fields.first_name
    employee.laststName = fields.last_name
    employee.extension = fields.extension
    employee.email = fields.email
    employee.officeCode = fields.office_code
    employee.reportsTo = fields.reports_to
    employee.jobTitle = fields.job_title
    var result = await employee.save()
    return result
  }
  public async update(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      first_name: schema.string(),
      last_name: schema.string(),
      extension: schema.string(),
      email: schema.string(),
      office_code: schema.string(),
      reports_to: schema.number(),
      job_title: schema.string(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id
    var employee = await Employee.findOrFail(id)
    employee.firstName = fields.first_name
    employee.laststName = fields.last_name
    employee.extension = fields.extension
    employee.email = fields.email
    employee.officeCode = fields.office_code
    employee.reportsTo = fields.reports_to
    employee.jobTitle = fields.job_title
    var result = await employee.save()
    return result
  }
  public async destroy(ctx: HttpContextContract) {
    var id = ctx.params.id
    var employee = await Employee.findOrFail(id)
    await employee.delete()
    return { message: 'The employee has been deleted!' }
  }
}
