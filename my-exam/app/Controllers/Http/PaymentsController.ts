import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Payment from 'App/Models/Payment'
export default class PaymentsController {
  public async getAll() {
    var result = await Payment.all()
    return result
  }
  public async getCustomerId(ctx: HttpContextContract) {
    var result = await Payment.query().preload('CustomerId')
    return result
  }
  public async getId(ctx: HttpContextContract) {
    var id = ctx.params.id
    var result = await Payment.findOrFail(id)
    return result
  }
  public async create(ctx: HttpContextContract) {
    const newSchema = schema.create({
      customerId: schema.number(),
      check_number: schema.string(),
      payment_date: schema.date(),
      amount: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var payment = new Payment()
    payment.customerId = fields.customerId
    payment.checkNumber = fields.check_number
    payment.paymentDate = fields.payment_date
    payment.amount = fields.amount
    var result = await payment.save()
    return result
  }
  public async update(ctx: HttpContextContract) {
    const newSchema = schema.create({
      customerId: schema.number(),
      check_number: schema.string(),
      payment_date: schema.date(),
      amount: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.customerId
    var payment = await Payment.findOrFail(id)
    payment.checkNumber = fields.check_number
    payment.paymentDate = fields.payment_date
    payment.amount = fields.amount
    var result = await payment.save()
    return result
  }
  public async destroy(ctx: HttpContextContract) {
    var id = ctx.params.id
    var payment = await Payment.findOrFail(id)
    await payment.delete()
    return { message: 'The payments has been deleted!' }
  }
}
