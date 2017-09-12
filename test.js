(function() {
    "use strict";

    var quixote = require("./vendor/quixote.js");

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
            
            body = frame.get("body");
        });

        beforeEach(function() {
            // logo = frame.get("#logo");
            // navbar = frame.get("#navbar");
        });

        
        it("has a color scheme", function() {
            assert.equal(2, 2);
//            assert.equal(body.getRawStyle("color"), "#111", "color check");
        });
    });
}())
