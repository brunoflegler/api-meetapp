'use strict'

const Schema = use('Schema')

class PreferencesSchema extends Schema {
  up () {
    this.create('preferences', table => {
      table.increments()
      table
        .string('name', 254)
        .notNullable()
        .unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('preferences')
  }
}

module.exports = PreferencesSchema
