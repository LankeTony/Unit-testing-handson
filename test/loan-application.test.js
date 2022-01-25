import { html, fixture, expect } from '@open-wc/testing';
import '../src/dashboard/Dashboard.js'
import '../loan-application.js';

const el = await fixture(html`<dash-board></dash-board>`);
describe('LoanApplication', () => {

  it('check accessible', () => {
    expect(el).to.be.accessible;
  });

});
