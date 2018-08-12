import { element, browser } from "protractor";

describe('Calculator', () => {
    it('fill in form', () => {
        element.(by.css('[aria-labelledby="lbl-0"]')).sendKeys(90);
        element.(by.css('[aria-labelledby="lbl-1"]')).sendKeys(186);
        element.(by.buttonText('Calculate')).click();
        browser.sleep(1000);

    expect(element(by.css('.card-content'))
    .getText())
    .toContain('Person: Weight 90 kg, Height 186 cm')

    expect(element(by.css('.card-content'))
    .getText())
    .toContain('You are Overweight')

    });
});

