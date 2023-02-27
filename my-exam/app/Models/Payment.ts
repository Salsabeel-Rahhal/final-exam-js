import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer'

export default class Payment extends BaseModel {
  public static table = 'payments'
  @column({ isPrimary: true })
  public customerId: number
  @column({ isPrimary: true })
  public checkNumber: number
  @column({ serializeAs: 'payment_date' })
  public paymentDate: Date
  @column({ serializeAs: 'amount' })
  public amount: number
  @belongsTo(() => Customer, {
    foreignKey: 'customerId',
  })
  public CustomerId: BelongsTo<typeof Customer>
}
