import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';



const el = await fixture(html`<loanemi-details></loanemi-details>`);
const form = el.shadowRoot.querySelectorAll('lion-button');
describe('Loan EMI details', () => {
  
  it('check accessible', () => {
    expect(el).to.be.accessible;
  });

  it('check for capture', () => {
    const fun = Sinon.spy(el, "_toBasicDetails");
    form[0].click();
    expect(fun.calledOnce).to.be.true;
  });

  
  it('check for capture', () => {
    const fun = Sinon.spy(el, "_toCustomer");
    form[1].click();
    expect(fun.calledOnce).to.be.true;
  });
  // Write test cases inside this block
});
