'use strict';

const knex = require('knex')(require('../knexfile'));

module.exports = {
    add: async (request, h) => {
        const {
            name,
            wateringFrequency,
            wateringLevel,
            humidity,
            sunlight,
            notes
        } = request.payload;

        try {
            await knex('bloom')
                .insert({
                    name,
                    wateringFrequency,
                    wateringLevel,
                    humidity,
                    sunlight,
                    notes
                });
        } catch (err) {
            console.log(err);
            throw new Error('insert failed');
        }

        return h.response().code(201);
    },
    get: async (request, h) => {
        const { id } = request.query;
        return knex.select()
           .from('bloom')
           .where({ id });
    },
    getAll: async (request, h) => {
        return knex.select()
            .from('bloom');
    },
    delete: async (request, h) => {
        console.log(request);
        const { id, name } = request.payload;

        try {
            await knex('bloom')
                .where({
                    name,
                    id
                }).del();
        } catch (err) {
            console.log(err);
            throw new Error('delete failed');
        }

        return h.response().code(200);
    }
};
