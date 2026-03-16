//import all the required page objects here and export them for use in the tests
const { Dashboard } = require('./Dashboard');
const { Admin } = require('./Admin');
const { OrangeHRMSalesPage } = require('./OrangeHRMSalesPage');
const { Recruitment } = require('./Recruitment');

//import all the required utilities here and export them for use in the tests
const { Utility } = require('../../utils/Utility');
const Assertions = require('../../utils/Assertions');

//import all the required constants here and export them for use in the tests
const GlobalConstants = require('../../constants/GlobalConstants.json');

module.exports = {
    Dashboard,
    Admin,
    OrangeHRMSalesPage,
    Recruitment,
    Utility,
    Assertions,
    GlobalConstants
};