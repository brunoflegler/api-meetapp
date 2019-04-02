'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeetupsSchema extends Schema {
  up () {
    this.create('meetups', table => {
      table.increments()
      table
        .string('title', 255)
        .notNullable()
        .unique()
      table.text('description', 500)
      table.string('img', 254).notNullable()
      table.string('location', 254).notNullable()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('meetups')
  }
}

module.exports = MeetupsSchema
