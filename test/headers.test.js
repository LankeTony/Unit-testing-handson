import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';
import Sinon  from 'sinon';

const el = await fixture(html`<loan-header></loan-headers>`);
const form = el.shadowRoot.querySelectorAll('button');
describe('loan-header', () => {
  
  it('check for spy', () => {
    const abc = Sinon.spy(el, "localeChanged");
    form[0].click();
    expect(abc.calledOnce).to.be.true;
  });

it('check accessible', () => {
  expect(el).to.be.accessible;
});


it('check for spy', async() => {
  form[0].click();
  expect(form[0]).to.have.class('bg-btn-color');
});

it('check for the color change of button', async() => {
  form[0].click();
  expect(form[1]).to.have.class('btn-cursor');
});

it('check for the color change of button', async() => {
  form[1].click();
  expect(form[1]).to.have.class('bg-btn-color');
});


});