const { expect } = require("@playwright/test");

class Assertions {
    constructor(page) {
        this.page = page;
    }
    //Auto-retrying assertions
    async validateCheckBoxChecked(checkBoxElement, isSoft = false) {
        if (isSoft) {
            await expect.soft(checkBoxElement).toBeChecked();
        } else {
            await expect(checkBoxElement).toBeChecked();
        }
    }

    async validateElementDisabled(element, isSoft = false) {
        if (isSoft) {
            await expect.soft(element).toBeDisabled();
        } else {
            await expect(element).toBeDisabled();
        }
    }

    async validateElementIsEditable(element, isSoft = false) {
        if (isSoft) {
            await expect.soft(element).toBeEditable();
        } else {
            await expect(element).toBeEditable();
        }
    }

    async validateElementIsEnabled(element, isSoft = false) {
        if (isSoft) {
            await expect.soft(element).toBeEnabled();
        } else {
            await expect(element).toBeEnabled();
        }
    }

    async validateElementIsFocused(element, isSoft = false) {
        if (isSoft) {
            await expect.soft(element).toBeFocused();
        } else {
            await expect(element).toBeFocused();
        }
    }

    async validateElementIsHidden(element, isSoft = false) {
        if (isSoft) {
            await expect.soft(element).toBeHidden();
        } else {
            await expect(element).toBeHidden();
        }
    }

    async validateElementIsVisible(element, isSoft = false) {
        if (isSoft) {
            await expect.soft(element).toBeVisible();
        } else {
            await expect(element).toBeVisible();
        }
    }

    async validateElementContainsText(element, text, isSoft = false) {
        if (isSoft) {
            await expect.soft(element).toContainText(text);
        } else {
            await expect(element).toContainText(text);
        }
    }

    async validateElementHasText(element, text, isSoft = false) {
        if (isSoft) {
            await expect.soft(element).toHaveText(text);
        } else {
            await expect(element).toHaveText(text);
        }
    }

    async validatePageHasTitle(title, isSoft = false) {
        if (isSoft) {
            await expect.soft(this.page).toHaveTitle(title);
        } else {
            await expect(this.page).toHaveTitle(title);
        }
    }

    async validatePageURL(url, isSoft = false) {
        if (isSoft) {
            await expect.soft(this.page).toHaveURL(url);
        } else {
            await expect(this.page).toHaveURL(url);
        }
    }
    //Non-retrying assertions
    async validateValueIsSame(actualValue, expectedValue, isSoft = false) {
        if (isSoft) {
            expect.soft(actualValue).toBe(expectedValue);
        } else {
            expect(actualValue).toBe(expectedValue);
        }
    }

    async validateValueIsNotSame(actualValue, expectedValue, isSoft = false) {
        if (isSoft) {
            expect.soft(actualValue).not.toBe(expectedValue);
        } else {
            expect(actualValue).not.toBe(expectedValue);
        }
    }

    async validateValueDefined(value, isSoft = false) {
        if (isSoft) {
            expect.soft(value).toBeDefined();
        } else {
            expect(value).toBeDefined();
        }
    }

    async validateValueIsNotDefined(value, isSoft = false) {
        if (isSoft) {
            expect.soft(value).not.toBeDefined();
        } else {
            expect(value).not.toBeDefined();
        }
    }

    async validateValueIsFalse(value, isSoft = false) {
        if (isSoft) {
            expect.soft(value).toBeFalsy();
        } else {
            expect(value).toBeFalsy();
        }
    }

    async validateValueIsTrue(value, isSoft = false) {
        if (isSoft) {
            expect.soft(value).toBeTruthy();
        } else {
            expect(value).toBeTruthy();
        }
    }

    async validateValueIsNull(value, isSoft = false) {
        if (isSoft) {
            expect.soft(value).toBeNull();
        } else {
            expect(value).toBeNull();
        }
    }

    async validateValueIsNotNull(value, isSoft = false) {
        if (isSoft) {
            expect.soft(value).not.toBeNull();
        } else {
            expect(value).not.toBeNull();
        }
    }

    async validateValueIsUndefined(value, isSoft = false) {
        if (isSoft) {
            expect.soft(value).toBeUndefined();
        } else {
            expect(value).toBeUndefined();
        }
    }

    async validateValueIsNotUndefined(value, isSoft = false) {
        if (isSoft) {
            expect.soft(value).not.toBeUndefined();
        } else {
            expect(value).not.toBeUndefined();
        }
    }

    async validateValueEquals(actualValue, expectedValue, isSoft = false) {
        if (isSoft) {
            expect.soft(actualValue).toEqual(expectedValue);
        } else {
            expect(actualValue).toEqual(expectedValue);
        }
    }

    async validateValueNotEquals(actualValue, expectedValue, isSoft = false) {
        if (isSoft) {
            expect.soft(actualValue).not.toEqual(expectedValue);
        } else {
            expect(actualValue).not.toEqual(expectedValue);
        }
    }

    async validateStringMatches(string, regex, isSoft = false) {
        if (isSoft) {
            expect.soft(string).toMatch(regex);
        } else {
            expect(string).toMatch(regex);
        }
    }

    async validateStringNotMatches(string, regex, isSoft = false) {
        if (isSoft) {
            expect.soft(string).not.toMatch(regex);
        } else {
            expect(string).not.toMatch(regex);
        }
    }

    async validateArrayContains(array, item, isSoft = false) {
        if (isSoft) {
            expect.soft(array).toContain(item);
        } else {
            expect(array).toContain(item);
        }
    }

    async validateArrayNotContains(array, item, isSoft = false) {
        if (isSoft) {
            expect.soft(array).not.toContain(item);
        } else {
            expect(array).not.toContain(item);
        }
    }

    async validateArrayLength(array, length, isSoft = false) {
        if (isSoft) {
            expect.soft(array).toHaveLength(length);
        } else {
            expect(array).toHaveLength(length);
        }
    }

    async validateArrayNotLength(array, length, isSoft = false) {
        if (isSoft) {
            expect.soft(array).not.toHaveLength(length);
        } else {
            expect(array).not.toHaveLength(length);
        }
    }

    async validateGreaterThan(actualValue, expectedValue, isSoft = false) {
        if (isSoft) {
            expect.soft(actualValue).toBeGreaterThan(expectedValue);
        } else {
            expect(actualValue).toBeGreaterThan(expectedValue);
        }
    }

    async validateGreaterThanOrEqual(actualValue, expectedValue, isSoft = false) {
        if (isSoft) {
            expect.soft(actualValue).toBeGreaterThanOrEqual(expectedValue);
        } else {
            expect(actualValue).toBeGreaterThanOrEqual(expectedValue);
        }
    }

    async validateLessThan(actualValue, expectedValue, isSoft = false) {
        if (isSoft) {
            expect.soft(actualValue).toBeLessThan(expectedValue);
        } else {
            expect(actualValue).toBeLessThan(expectedValue);
        }
    }

    async validateLessThanOrEqual(actualValue, expectedValue, isSoft = false) {
        if (isSoft) {
            expect.soft(actualValue).toBeLessThanOrEqual(expectedValue);
        } else {
            expect(actualValue).toBeLessThanOrEqual(expectedValue);
        }
    }

    async validateCloseTo(actualValue, expectedValue, numDigits = 2, isSoft = false) {
        if (isSoft) {
            expect.soft(actualValue).toBeCloseTo(expectedValue, numDigits);
        } else {
            expect(actualValue).toBeCloseTo(expectedValue, numDigits);
        }
    }

    async validateFunctionThrows(fn, isSoft = false) {
        if (isSoft) {
            expect.soft(fn).toThrow();
        } else {
            expect(fn).toThrow();
        }
    }

    async validateFunctionNotThrows(fn, isSoft = false) {
        if (isSoft) {
            expect.soft(fn).not.toThrow();
        } else {
            expect(fn).not.toThrow();
        }
    }

    async validateObjectHasProperty(object, property, isSoft = false) {
        if (isSoft) {
            expect.soft(object).toHaveProperty(property);
        } else {
            expect(object).toHaveProperty(property);
        }
    }

    async validateObjectNotHasProperty(object, property, isSoft = false) {
        if (isSoft) {
            expect.soft(object).not.toHaveProperty(property);
        } else {
            expect(object).not.toHaveProperty(property);
        }
    }

    async validateIsInstanceOf(value, className, isSoft = false) {
        if (isSoft) {
            expect.soft(value).toBeInstanceOf(className);
        } else {
            expect(value).toBeInstanceOf(className);
        }
    }

    async validateIsNotInstanceOf(value, className, isSoft = false) {
        if (isSoft) {
            expect.soft(value).not.toBeInstanceOf(className);
        } else {
            expect(value).not.toBeInstanceOf(className);
        }
    }

}

module.exports = Assertions;