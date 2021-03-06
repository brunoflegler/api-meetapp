'use strict'

const Schema = use('Schema')

class UserPreferencesSchema extends Schema {
  up () {
    this.create('user_preferences', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('preference_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('preferences')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_preferences')
  }
}

module.exports = UserPreferencesSchema
