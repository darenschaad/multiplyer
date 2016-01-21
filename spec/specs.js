describe("multiplier", function(){
  it("will take two user inputs, one as the countTo and one as the countBy.", function(){
    expect(multiplier(3,20)).to.equal("3,6,9,12,15,18");
  });

  it("will take two user inputs, one as the countTo and one as the countBy.", function(){
    expect(multiplier(5,20)).to.equal("5,10,15,20");
  });
});
