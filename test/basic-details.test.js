import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanBasicDetails/BasicDetails.js';
import Sinon from 'sinon';

const el = await fixture(html`<basic-details></basic-details>`);
const form = el.shadowRoot.querySelectorAll('lion-button');
const amount = el.shadowRoot.querySelector('lion-input-amount').querySelectorAll('.validators');


describe('BasicDetails.js', () => {
  //const basicDetail = new BasicDetails();

  	it('should be greater than 10000', () => {
  			const testOne = amount;
  			console.log(amount)
  			expect(testOne).to.equal(10000);
  			
  	});

  it('check for spy', () => {
    const abc = Sinon.spy(el, "_toDashboard");
    form[0].click();
    expect(abc.calledOnce).to.be.false;
  });

   it('check accessible', () => {
    expect(el).to.be.accessible;
  });

   it('check for capture', () => {
    const fun = Sinon.spy(el, "_captureDetails");
    form[1].click();
    expect(fun.calledOnce).to.be.true;
  });

    it('number to words', () => {
    const val = 10005;
    let num = 10005;
    // const func = el._numToWord(val,num);
    el._numToWord(val, num);
    //console.log(func);
    expect(num).to.equal(10005.00);
  });

 });