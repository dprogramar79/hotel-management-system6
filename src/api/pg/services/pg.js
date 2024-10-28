'use strict';

/**
 * pg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pg.pg');
