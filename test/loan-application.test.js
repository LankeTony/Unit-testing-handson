import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

 const el = await fixture(html`<dash-board></dash-board>`);
const form = el.shadowRoot.querySelectorAll('lion-button');


describe('LoanApplication', () => {
  it('check accessible', () => {
  		expect(el).to.be.accessible;
	});
});


