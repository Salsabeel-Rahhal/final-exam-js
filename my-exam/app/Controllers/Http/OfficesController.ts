import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Office from 'App/Models/Office'
export default class OfficesController {
  public async getAll() {
    var result = await Office.all()
    return result
  }
  public async getId(ctx: HttpContextContract) {
    var id = ctx.params.id
    var result = await Office.findOrFail(id)
    return result
  }
  public async create(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.string(),
      city: schema.string(),
      phone: schema.string(),
      address_line1: schema.string(),
      address_line2: schema.string(),
      state: schema.string(),
      country: schema.string(),
      postal_code: schema.string(),
      territory: schema.string(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var Office = new Office()
    Office.create(ctx.request.all())
    var result = Office.save()
    return result
  }
  public async update(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.string(),
      city: schema.string(),
      phone: schema.string(),
      address_line1: schema.string(),
      address_line2: schema.string(),
      state: schema.string(),
      country: schema.string(),
      postal_code: schema.string(),
      territory: schema.string(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id
    var Office = await Office.findOrFail(id)
    Office.city = fields.city
    Office.phone = fields.phone
    Office.addressLine1 = fields.address_line1
    Office.addressLine2 = fields.address_line2
    Office.state = fields.state
    Office.country = fields.country
    Office.postalCode = fields.postal_code
    Office.territory = fields.territory
    var result = await Office.save()
    return result
  }
  public async destroy(ctx: HttpContextContract) {
    var id = ctx.params.id
    var Office = await Office.findOrFail(id)
    await Office.delete()
    return { message: 'The office has been deleted!' }
  }
}
