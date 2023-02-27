import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Customer from 'App/Models/Customer'

export default class CustomersController {
  public async getAll(ctx: HttpContextContract) {
    var result = await Customer.all()
    var country = ctx.request.input('country')
    var employeeId = ctx.request.input('employeeId')
    var query = Customer.query()

    if (country) {
      query.where('country', country)
    }
    if (employeeId) {
      query.where('employee_id', employeeId)
    }
    var result = await query
    return result
  }
  public async getEmployeeId(ctx: HttpContextContract) {
    var result = await Customer.query().preload('EmployeeId')
    return result
  }
  public async getId(ctx: HttpContextContract) {
    var id = ctx.params.id
    var result = await Customer.findOrFail(id)
    return result
  }
  public async create(ctx: HttpContextContract) {
    //return  ctx.request.all();
    /*const newSchema = schema.create({
      id: schema.number(),
      customer_name: schema.string(),
      contact_first_name: schema.string(),
      contact_last_name: schema.string(),
      phone_number: schema.string(),
      address_line1: schema.string(),
      address_line2: schema.string(),
      city: schema.string(),
      state: schema.string(),
      postal_code: schema.string(),
      country: schema.string(),
      employee_id: schema.number(),
      credit_limit: schema.number(),*/
    //})
    //const fields = await ctx.request.validate({ schema: newSchema })
    var customer = new Customer()
    /*customer.id = fields.id
    customer.customerName = ctx.request.all().customer_name
    customer.contactFirstName =  ctx.request.all().contact_first_name
    customer.contactLastName =  ctx.request.all().contact_last_name
    customer.phoneNumber =  ctx.request.all().phone_number
    customer.addressLine1 =  ctx.request.all().address_line1
    customer.addressLine2 =  ctx.request.all().address_line2
    customer.city =  ctx.request.all().city
    customer.state =  ctx.request.all().state
    customer.postalCode =  ctx.request.all().postal_code
    customer.country =  ctx.request.all().country
    customer.employeeId = fields.employee_id
    customer.creditLimit = fields.credit_limit*/
    Customer.create(ctx.request.all())
    var result = customer.save()
    return result
  }
  public async update(ctx: HttpContextContract) {
    const newSchema = schema.create({
      id: schema.number(),
      customer_name: schema.string(),
      contact_first_name: schema.string(),
      contact_last_name: schema.string(),
      phone_number: schema.string(),
      address_line1: schema.string(),
      address_line2: schema.string(),
      city: schema.string(),
      state: schema.string(),
      postal_code: schema.string(),
      country: schema.string(),
      employee_id: schema.number(),
      credit_limit: schema.number(),
    })
    const fields = await ctx.request.validate({ schema: newSchema })
    var id = fields.id
    var customer = await Customer.findOrFail(id)
    customer.customerName = fields.customer_name
    customer.contactFirstName = fields.contact_first_name
    customer.contactLastName = fields.contact_last_name
    customer.phoneNumber = fields.phone_number
    customer.addressLine1 = fields.address_line1
    customer.addressLine2 = fields.address_line2
    customer.city = fields.city
    customer.state = fields.state
    customer.postalCode = fields.postal_code
    customer.country = fields.country
    customer.employeeId = fields.employee_id
    customer.creditLimit = fields.credit_limit
    var result = await customer.save()
    return result
  }
  public async destory(ctx: HttpContextContract) {
    var EmployeeId = ctx.params.employee_id
    if (EmployeeId === null) {
      var id = ctx.params.id
      var customer = await Customer.findOrFail(id)
      await customer.delete()
      return { message: 'The customer has been deleted!' }
    } else {
      return { message: 'The customer has use is another' }
    }
  }
}
/*public async create(ctx: HttpContextContract) {
        const newSchema = schema.create({
            customer_id: schema.number(),
            check_number: schema.string(),
            payment_date: schema.date(),
            amount: schema.number(),
           
        });
        var fields =await ctx.request.validate({schema:newSchema});
       
        var employee = new Payment();
        employee.customer_id = fields.customer_id;
        employee.check_number=fields.check_number;
        employee.payment_date=fields.payment_date;
        employee.amount=fields.amount;
        
        // employee.reports_to=fields.reports_to;
       
       
        var result = await employee.save();
        return result;
    }
    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            customer_id: schema.number(),
            check_number: schema.string(),
            payment_date: schema.date(),
            amount: schema.number(),
            id:schema.number(),
           
        });
        var fields =await ctx.request.validate({schema:newSchema});
       
        var id = fields.id;
        var employee = await Payment.findOrFail(id);
        employee.customer_id = fields.customer_id;
        employee.check_number=fields.check_number;
        employee.payment_date=fields.payment_date;
        employee.amount=fields.amount;
        // employee.reports_to=fields.reports_to;
       
       
        var result = await employee.save();


        return { message: "The categories has been updated!" };
            "message": "insert into `customers` (`address_line1`, `address_line2`, `city`, `contact_first_name`,
             `contact_last_name`, `country`, `credit_limit`, `customer_name`, `employee_id`, `id`, `phone_number`, 
             `postal_code`, `state`) 
             
             
             values ('jhgftd45678', 'w3435678iugf', 'amman', 'sal', 'rahhal', 'jhgbiuoi', '343545677', 'salsabeel', '23', '20\\n', 'jhegr764t8798', '435678', 'gfdsewee54678') - Out of range value for column 'credit_limit' at row 1",
    "stack": "Error: insert into `customers` (`address_line1`, `address_line2`, `city`, `contact_first_name`, `contact_last_name`, `country`, `credit_limit`, `customer_name`, `employee_id`, `id`, `phone_number`, `postal_code`, `state`) values ('jhgftd45678', 'w3435678iugf', 'amman', 'sal', 'rahhal', 'jhgbiuoi', '343545677', 'salsabeel', '23', '20\\n', 'jhegr764t8798', '435678', 'gfdsewee54678') - Out of range value for column 'credit_limit' at row 1\n    at Packet.asError (C:\\Users\\user\\Desktop\\flutter by dot.jo\\final-exam-js\\my-exam\\node_modules\\mysql2\\lib\\packets\\packet.js:728:17)\n    at Query.execute (C:\\Users\\user\\Desktop\\flutter by dot.jo\\final-exam-js\\my-exam\\node_modules\\mysql2\\lib\\commands\\command.js:29:26)\n    at Connection.handlePacket (C:\\Users\\user\\Desktop\\flutter by dot.jo\\final-exam-js\\my-exam\\node_modules\\mysql2\\lib\\connection.js:488:32)\n    at PacketParser.onPacket (C:\\Users\\user\\Desktop\\flutter by dot.jo\\final-exam-js\\my-exam\\node_modules\\mysql2\\lib\\connection.js:94:12)\n    at PacketParser.executeStart (C:\\Users\\user\\Desktop\\flutter by dot.jo\\final-exam-js\\my-exam\\node_modules\\mysql2\\lib\\packet_parser.js:75:16)\n    at Socket.<anonymous> (C:\\Users\\user\\Desktop\\flutter by dot.jo\\final-exam-js\\my-exam\\node_modules\\mysql2\\lib\\connection.js:101:25)\n    at Socket.emit (node:events:513:28)\n    at addChunk (node:internal/streams/readable:324:12)\n    at readableAddChunk (node:internal/streams/readable:297:9)\n    at Socket.Readable.push (node:internal/streams/readable:234:10)",
    "code": "ER_WARN_DATA_OUT_OF_RANGE"
    }*/
