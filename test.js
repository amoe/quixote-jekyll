(function() {
    "use strict";

    describe("Home page", function() {

        var BACKGROUND_BLUE = "rgb(65, 169, 204)";
        var WHITE = "rgb(255, 255, 255)";
        var MEDIUM_BLUE = "rgb(0, 121, 156)";
        
        var frame;
        var body;

        before(function(done) {
            frame = quixote.createFrame({
                src: "/"
            }, done);
        });
        
        after(function() {
            frame.remove();
        });
        
        beforeEach(function(done) {
            frame.reload(done);
        });

        beforeEach(function() {
            body = frame.get(".page-content");
        });

        
        it("has a color scheme", function() {
            assert.equal(2, 2);
            assert.equal(body.getRawStyle("color"), "rgb(17, 17, 17)", "color check");
        });
    });
}())
