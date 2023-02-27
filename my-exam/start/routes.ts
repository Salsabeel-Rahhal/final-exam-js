/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'CustomersController.getAll')
  Route.get('/:id', 'CustomersController.getId')
  Route.post('/', 'CustomersController.login')
  Route.put('/:id', 'CustomersController.logout')
  Route.delete('/:id', 'CustomersController.create')
}).prefix('/customers')

Route.group(() => {
  Route.get('/', 'EmployeesController.getAll')
  Route.get('/:id', 'EmployeesController.getId')
  Route.post('/', 'EmployeesController.create')
  Route.put('/:id', 'EmployeesController.update')
  Route.delete('/:id', 'EmployeesController.destroy')
}).prefix('/employees')

Route.group(() => {
  Route.get('/', 'OfficesController.getAll')
  Route.get('/:id', 'OfficesController.getId')
  Route.post('/', 'OfficesController.create')
  Route.put('/:id', 'OfficesController.update')
  Route.delete('/:id', 'OfficesController.destroy')
}).prefix('/offices')

Route.group(() => {
  Route.get('/', 'OrderdetailsController.getAll')
  Route.get('/:id', 'OrderdetailsController.getId')
  Route.post('/', 'OrderdetailsController.create')
  Route.put('/:id', 'OrderdetailsController.update')
  Route.delete('/:id', 'OrderdetailsController.destroy')
}).prefix('/orderdetails')

Route.group(() => {
  Route.get('/', 'OrdersController.getAll')
  Route.get('/:id', 'OrdersController.getId')
  Route.post('/', 'OrdersController.create')
  Route.put('/:id', 'OrdersController.update')
  Route.delete('/:id', 'OrdersController.destroy')
}).prefix('/orders')

Route.group(() => {
  Route.get('/', 'PaymentsController.getAll')
  Route.get('/:id', 'PaymentsController.getId')
  Route.post('/', 'PaymentsController.create')
  Route.put('/:id', 'PaymentsController.update')
  Route.delete('/:id', 'PaymentsController.destroy')
}).prefix('/payments')

Route.group(() => {
  Route.get('/', 'ProductlinesController.getAll')
  Route.get('/:id', 'ProductlinesController.getId')
  Route.post('/', 'ProductlinesController.create')
  Route.put('/:id', 'ProductlinesController.update')
  Route.delete('/:id', 'ProductlinesController.destroy')
}).prefix('/productlines')

Route.group(() => {
  Route.get('/', 'ProductsController.getAll')
  Route.get('/:id', 'ProductsController.getId')
  Route.post('/', 'ProductsController.create')
  Route.put('/:id', 'ProductsController.update')
  Route.delete('/:id', 'ProductsController.destroy')
}).prefix('/products')
