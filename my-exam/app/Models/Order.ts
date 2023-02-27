import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer'

export default class Order extends BaseModel {
  public static table = 'orders'
  @column({ isPrimary: true })
  public id: number
  @column({ serializeAs: 'order_date' })
  public orderDate: Date
  @column({ serializeAs: 'required_date' })
  public requiredDate: Date
  @column({ serializeAs: 'shipped_date' })
  public shippedDate: Date
  @column({ serializeAs: 'status' })
  public status: string
  @column({ serializeAs: 'comments' })
  public comments: string
  @column({ serializeAs: 'customer_id' })
  public customerId: number
  @belongsTo(() => Customer, {
    foreignKey: 'customerId',
  })
  public CustomerId: BelongsTo<typeof Customer>
}
