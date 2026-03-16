const { Utility } = require("../../utils/Utility");

class Recruitment extends Utility {
    constructor(page) {
        super();
        this.page = page;
        this.firstResumeDownloadButton = page.locator("i.oxd-icon.bi-download").first();
    }

    async downloadFirstCandidateResume() {
        await this.waitForElementToBeVisible(this.firstResumeDownloadButton);
        await this.downloadFile(this.firstResumeDownloadButton);
    }
}
module.exports = { Recruitment };