'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  preferences () {
    return this.belongsToMany('App/Models/Preference').pivotModel(
      'App/Models/UserPreference'
    )
  }

  preferenceJoin () {
    return this.hasMany('App/Models/UserPreference')
  }
}

module.exports = User
