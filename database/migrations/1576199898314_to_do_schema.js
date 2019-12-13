'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToDoSchema extends Schema {
  up () {
    this.create('to_does', (table) => {
      table.increments()
      table.string('title')
      table.integer('activity_id')
      table.string('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('to_does')
  }
}

module.exports = ToDoSchema
