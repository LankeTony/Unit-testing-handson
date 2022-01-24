
describe('BasicDetails', function () {
  it('should be less than 10000', function () {

  	  it('check for spy', () => {
    const abc = Sinon.spy(el, "_toDashboard");
    form[0].click();
    expect(abc.calledOnce).toBeTruthy;
  
  });

  it('should not be greater than 100000', function () {
/*      var one2 = document.forms["form-basic"]["amount"].value;
	  one2 = 10000;
    expect(one2).not.toBe(10000);*/
  });
});
