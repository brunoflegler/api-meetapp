'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])
    const user = await User.create(data)
    await user.preferences().attach(data.preferences)
    return user
  }

  async update ({ auth, request }) {
    const { preferences, ...data } = request.only([
      'name',
      'email',
      'password',
      'preferences'
    ])
    const user = auth.user

    user.merge(data)
    await user.save()

    if (preferences) {
      await user.preferences().sync(preferences)
    }

    return user
  }
}

module.exports = UserController
