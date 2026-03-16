const { Utility } = require("../../utils/Utility");

class Admin extends Utility {
    constructor(page) {
        super();
        this.page = page;
        this.leftNavOption = (leftNavOption) => page.getByRole('link', { name: leftNavOption, exact: true });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.addUserButton = page.getByText('Add');
    }

    async clickOnLeftNavOption(leftNavOption) {
        await this.leftNavOption(leftNavOption).click();
        await this.searchButton.waitFor({ state: 'visible' });
    }

    async addUser(testData) {
        await this.page.getByRole('button').filter({ hasText: 'Add' }).click();
    }
}
module.exports = { Admin };