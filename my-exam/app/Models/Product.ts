import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  public static table = 'products'
  @column({ isPrimary: true })
  public id: number
  @column({ serializeAs: 'product_dode' })
  public productDode: string
  @column({ serializeAs: 'product_name' })
  public productName: string
  @column({ serializeAs: 'product_line_id' })
  public productLineId: number
  @column({ serializeAs: 'product_scale' })
  public productScale: string
  @column({ serializeAs: 'product_vendor' })
  public productVendor: string
  @column({ serializeAs: 'product_description' })
  public productDescription: string
  @column({ serializeAs: 'quantity_in_stock' })
  public quantityInStock: number
  @column({ serializeAs: 'price' })
  public price: number
  @column({ serializeAs: 'msrp' })
  public msrp: number
  @hasMany(() => Product, {
    foreignKey: 'productLineId',
  })
  public ProductLineId: HasMany<typeof Product>
}
