const { Utility } = require('../../utils/Utility');
const { expect } = require('@playwright/test');
const Assertions = require('../../utils/Assertions');

class OrangeHRMSalesPage extends Utility {
    constructor(page) {
        super();
        this.page = page;
        this.assertions = new Assertions();
        this.contactSalesButton = page.getByRole('button', { name: 'Contact Sales' }).first();
    }

    async validateContactSalesPresent() {
        await this.contactSalesButton.waitFor({ state: 'visible' });
        this.assertions.validateElementIsVisible(this.contactSalesButton);
    }
}
module.exports = { OrangeHRMSalesPage };
