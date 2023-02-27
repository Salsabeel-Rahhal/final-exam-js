import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import Product from './Product'

export default class Orderdetail extends BaseModel {
  public static table = 'orderdetails'
  @column({ isPrimary: true })
  public id: number
  @column({ serializeAs: 'order_id' })
  public orderId: number
  @column({ serializeAs: 'quantity' })
  public quantity: number
  @column({ serializeAs: 'price' })
  public price: number
  @column({ serializeAs: 'order_line_number' })
  public orderLineNumber: number
  @column({ serializeAs: 'product_id' })
  public productId: number
  @belongsTo(() => Order, {
    foreignKey: 'orderId',
  })
  public OrderId: BelongsTo<typeof Order>
  @belongsTo(() => Product, {
    foreignKey: 'productId',
  })
  public ProductId: BelongsTo<typeof Product>
}
