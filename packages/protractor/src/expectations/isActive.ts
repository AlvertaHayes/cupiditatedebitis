import { Expectation } from '@serenity-js/assertions';
import { ElementFinder, WebElement } from 'protractor';
import { ElementFinderExpectation } from './ElementFinderExpectation';

/**
 * @desc
 *  Expectation that the element is active.
 *
 * @returns {Expectation<boolean, ElementFinder>}
 *
 * @see {@link @serenity-js/assertions~Ensure}
 * @see {@link @serenity-js/assertions~Check}
 * @see {@link Wait}
 */
export function isActive(): Expectation<boolean, ElementFinder> {
    return ElementFinderExpectation.forElementTo('become active', (actual: ElementFinder) =>
        actual.getWebElement().then(element =>
            element.getDriver().switchTo().activeElement().then((active: WebElement) =>
                actual.equals(active),
            ),
        ),
    );
}
