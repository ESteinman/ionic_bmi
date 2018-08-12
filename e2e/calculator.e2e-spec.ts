import { element } from "protractor";

describe('Calculator', () => {
    it('fill in form', () => {
        element.(by.css('[aria-labelledby="lbl-0"]')).sendKeys(90);
        element.(by.css('[aria-labelledby="lbl-1"]')).sendKeys(186);
        element.(by.buttonText('Calculate')).click();
    }
})