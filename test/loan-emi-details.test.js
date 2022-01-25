import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';


const el = await fixture(html`<loanemi-details></loanemi-details>`);
const form = el.shadowRoot.querySelectorAll('lion-button');

describe('Loan EMI details', () => {
  
   it('check accessible', () => {
    expect(el).to.be.accessible;
  });

});
