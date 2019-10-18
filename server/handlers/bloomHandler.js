'use strict';

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


        return {
            name,
            wateringFrequency,
            wateringLevel,
            humidity,
            sunlight,
            notes
        };
    }
};
