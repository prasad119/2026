const { Utility } = require("../../utils/Utility");

class Login extends Utility {
    constructor(page) {
        super();
        this.page = page;
        this.userNameField = page.getByRole('textbox', { name: 'Username', exact: true });
        this.passwordField = page.getByPlaceholder('Password', { exact: true });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async loginToApplication(username, password) {
        await this.userNameField.waitFor({ state: 'visible' });
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
module.exports = { Login };