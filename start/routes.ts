/* eslint-disable prettier/prettier */
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
| import './routes/customer''
|
*/


import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
Route.get('/resume', async ({ view }) => {
  return view.render('welcome')
})
Route.get('/matching', async ({ view }) => {
  return view.render('welcome')
})
Route.get('/createjobs', async ({ view }) => {
  return view.render('welcome')
})
Route.get('/jobs', 'JobsController.index')
Route.post('/jobs', 'JobsController.store')
// Route.get('react', async ({ request }) => {
//   return view.render('welcome').from('react').select('*').orderBy('id', 'desc')
// })

// Route.get('/demo', async ({ view }) => {
//   return view.render('demo')
// }).as('demo.get')
// Route.post('/demo', async ({ view, request }) => {
//   console.log(request.file('file')?.filePath)
//   return view.render('demo')
// }).as('demo.post')

Route.post('/api/affindas', 'ClientAffindasController.index')
