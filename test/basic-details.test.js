import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanBasicDetails/BasicDetails.js';
import Sinon from 'sinon';

const el = await fixture(html`<basic-details></basic-details>`);
const form = el.shadowRoot.querySelectorAll('lion-button');
describe('BasicDetails.js', () => {
  //const basicDetail = new BasicDetails();
  it('check for spy', () => {
    const abc = Sinon.spy(el, "_toDashboard");
    form[0].click();
    expect(abc.calledOnce).to.be.false;
  });
 });