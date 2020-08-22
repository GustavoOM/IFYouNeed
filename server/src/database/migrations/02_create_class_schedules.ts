import Knex from "knex"

export async function up(knex: Knex){
    //Implementação do UUID: https://gist.github.com/shernshiou/d56832fad59a46fba04e08d3145d1479
    let uuidGenerationRaw = knex.client.config.client === 'sqlite3' ? 
  `(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))` :
  `uuid_generate_v4()`;
    return knex.schema.createTable("class_schedule", table => {
        table.increments("id").primary()
        //table.uuid('id').primary().defaultTo(knex.raw(uuidGenerationRaw));

        table.integer("week_day").notNullable()
        table.integer("from").notNullable()
        table.integer("to").notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable()

        table.uuid("class_id")
            .notNullable()
            .references("id")
            .inTable("classes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable("class_schedule")
}