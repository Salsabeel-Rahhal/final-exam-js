import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer'

export default class Employee extends BaseModel {
  public static table = 'employees'
  @column({ isPrimary: true })
  public id: number
  @column({ serializeAs: 'first_name' })
  public firstName: string
  @column({ serializeAs: 'last_name' })
  public laststName: string
  @column({ serializeAs: 'extension' })
  public extension: string
  @column({ serializeAs: 'email' })
  public email: string
  @column({ serializeAs: 'office_code' })
  public officeCode: string
  @column({ serializeAs: 'reports_to' })
  public reportsTo: number
  @column({ serializeAs: 'job_title' })
  public jobTitle: string
  @belongsTo(() => Customer, {
    foreignKey: 'id',
  })
  public CustomerId: BelongsTo<typeof Customer>
}
