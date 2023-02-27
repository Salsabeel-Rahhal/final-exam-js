import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Productline from 'App/Models/Productline'

export default class ProductlinesController {
  public async getAll() {
    var result = await Productline.all()
    return result
  }
  public async getId(ctx: HttpContextContract) {
    var id = ctx.params.id
    var result = await Productline.findOrFail(id)
    return result
  }
  public async create(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      product_line: schema.string(),
      text_description: schema.string(),
      html_description: schema.string(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var productLine = new Productline()
    productLine.productLine = fields.product_line
    productLine.textDescription = fields.text_description
    productLine.htmlDescription = fields.html_description
    var result = await productLine.save()
    return result
  }
  public async update(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      product_line: schema.string(),
      text_description: schema.string(),
      html_description: schema.string(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id
    var productLine = await Productline.findOrFail(id)
    productLine.productLine = fields.product_line
    productLine.textDescription = fields.text_description
    productLine.htmlDescription = fields.html_description
    var result = await productLine.save()
    return result
  }
  public async destroy(ctx: HttpContextContract) {
    var id = ctx.params.id
    var productLine = await Productline.findOrFail(id)
    await productLine.delete()
    return { message: 'The productLine has been deleted!' }
  }
}
