/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    userId: {     
			type: 'integer',
			required: true,
			primaryKey: true,
		},
    userName: {     
			type: 'string',
			required: true,
		}
  }
};
