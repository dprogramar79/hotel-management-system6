'use strict';

/**
 * pg controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pg.pg');
