import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Productline extends BaseModel {
  public static table = 'productlines'
  @column({ isPrimary: true })
  public id: number
  @column({ serializeAs: 'product_line' })
  public productLine: string
  @column({ serializeAs: 'text_description' })
  public textDescription: string
  @column({ serializeAs: 'html_description' })
  public htmlDescription: string
  @column({ serializeAs: 'image' })
  public image: Blob
}
