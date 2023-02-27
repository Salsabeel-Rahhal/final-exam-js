import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Orderdetail from 'App/Models/Orderdetail'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class OrderdetailsController {
  public async getAll() {
    var result = await Orderdetail.all()
    return result
  }
  public async getOrderId(ctx: HttpContextContract) {
    var result = await Orderdetail.query().preload('OrderId')
    return result
  }
  public async getId(ctx: HttpContextContract) {
    var id = ctx.params.id
    var result = await Orderdetail.findOrFail(id)
    return result
  }
  public async create(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      order_id: schema.number(),
      quantity: schema.number(),
      price: schema.number(),
      order_line_number: schema.number(),
      product_id: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var orderdetail = new Orderdetail()
    orderdetail.id = fields.id
    orderdetail.orderId = fields.order_id
    orderdetail.quantity = fields.quantity
    orderdetail.price = fields.price
    orderdetail.orderLineNumber = fields.order_line_number
    orderdetail.productId = fields.product_id
    var result = await orderdetail.save()
    return result
  }
  public async update(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      order_id: schema.number(),
      quantity: schema.number(),
      price: schema.number(),
      order_line_number: schema.number(),
      product_id: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id
    var orderdetail = await Orderdetail.findOrFail(id)
    orderdetail.orderId = fields.order_id
    orderdetail.quantity = fields.quantity
    orderdetail.price = fields.price
    orderdetail.orderLineNumber = fields.order_line_number
    orderdetail.productId = fields.product_id
    var result = await orderdetail.save()
    return result
  }
  public async destroy(ctx: HttpContextContract) {
    var id = ctx.params.id
    var orderdetail = await Orderdetail.findOrFail(id)
    await orderdetail.delete()
    return { message: 'The orderdetail has been deleted!' }
  }
}
