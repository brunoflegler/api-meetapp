'use strict'

const Route = use('Route')

Route.group(() => {
  Route.put('/users/preferences', 'UserController.update')
}).middleware(['auth'])

Route.post('/signup', 'UserController.store')
Route.post('/signin', 'SessionController.store')
