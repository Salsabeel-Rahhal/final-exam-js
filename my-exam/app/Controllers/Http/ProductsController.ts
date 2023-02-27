import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async getAll() {
    var result = await Product.all()
    return result
  }
  public async getProductLineId(ctx: HttpContextContract) {
    var result = await Product.query().preload('ProductLineId')
    return result
  }
  public async getId(ctx: HttpContextContract) {
    var id = ctx.params.id
    var result = await Product.findOrFail(id)
    return result
  }
  public async create(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      product_dode: schema.string(),
      product_name: schema.string(),
      product_line_id: schema.number(),
      product_scale: schema.string(),
      product_vendor: schema.string(),
      product_description: schema.string(),
      quantity_in_stock: schema.number(),
      price: schema.number(),
      msrp: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var product = new Product()
    product.id = fields.id
    product.productDode = fields.product_dode
    product.productName = fields.product_name
    product.productLineId = fields.product_line_id
    product.productScale = fields.product_scale
    product.productVendor = fields.product_vendor
    product.productDescription = fields.product_description
    product.quantityInStock = fields.quantity_in_stock
    product.price = fields.price
    product.msrp = fields.msrp
    var result = await product.save()
    return result
  }
  public async update(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      product_dode: schema.string(),
      product_name: schema.string(),
      product_line_id: schema.number(),
      product_scale: schema.string(),
      product_vendor: schema.string(),
      product_description: schema.string(),
      quantity_in_stock: schema.number(),
      price: schema.number(),
      msrp: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id
    var product = await Product.findOrFail(id)
    product.productDode = fields.product_dode
    product.productName = fields.product_name
    product.productLineId = fields.product_line_id
    product.productScale = fields.product_scale
    product.productVendor = fields.product_vendor
    product.productDescription = fields.product_description
    product.quantityInStock = fields.quantity_in_stock
    product.price = fields.price
    product.msrp = fields.msrp
    var result = await product.save()
    return result
  }
  public async destroy(ctx: HttpContextContract) {
    var ProductLineId = ctx.params.product_line_id;
    if (ProductLineId == null) {
      var id = ctx.params.id;
      var product = await product.findOrFail(id);
      await product.delete();
      return { message: 'The product has been deleted!' };
    } else {
      return { message: 'The product has use is another' };
  }
}