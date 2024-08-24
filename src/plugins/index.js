
const { getUUID } = require('./get-id.plugin');
const {getAge} = require('./get-age.plugin');
const { http } = require('../plugins/http-client.plugin');


module.exports = {
    getUUID,
    getAge,
    http,
}