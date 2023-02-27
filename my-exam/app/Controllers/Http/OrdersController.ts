import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Order from 'App/Models/Order'

export default class OrdersController {
  public async getAll() {
    var result = await Order.all()
    return result
  }
  public async getCustomerId(ctx: HttpContextContract) {
    var result = await Order.query().preload('CustomerId')
    return result
  }
  public async getId(ctx: HttpContextContract) {
    var id = ctx.params.id
    var result = await Order.findOrFail(id)
    return result
  }
  public async create(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      order_date: schema.date(),
      required_date: schema.date(),
      shipped_date: schema.date(),
      status: schema.string(),
      comments: schema.string(),
      customer_id: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var order = new Order()
    order.id = fields.id
    order.orderDate = fields.order_date
    order.requiredDate = fields.required_date
    order.shippedDate = fields.shipped_date
    order.status = fields.status
    order.comments = fields.comments
    order.customerId = fields.customer_id
    var result = await order.save()
    return result
  }
  public async update(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      order_date: schema.date(),
      required_date: schema.date(),
      shipped_date: schema.date(),
      status: schema.string(),
      comments: schema.string(),
      customer_id: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id
    var order = await Order.findOrFail(id)
    order.orderDate = fields.order_date
    order.requiredDate = fields.required_date
    order.shippedDate = fields.shipped_date
    order.status = fields.status
    order.comments = fields.comments
    order.customerId = fields.customer_id
    var result = await order.save()
    return result
  }
  public async destroy(ctx: HttpContextContract) {
    var id = ctx.params.id
    var order = await Order.findOrFail(id)
    await order.delete()
    return { message: 'The order has been deleted!' }
  }
}
