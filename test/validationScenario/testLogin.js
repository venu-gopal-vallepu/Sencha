describe("testLogin", function() {
    var wait = 1000;
    it("should pass valid credentials", function() {
        //ST.wait(8000);
        ST.field('//input[@name="username"]').setValue('divya.aasireddy@walkingtree.in');
        ST.field('//input[@name="password"]').setValue('testing').wait(1000);
        divEl = //img[@data-qtip='FAQ'];
        ST.field("//a[contains(@class,'x-btn signintext')]").click(10,10).wait(function(divEl, done){
            divEl.hasCls('forum faq');
        });
    });
});