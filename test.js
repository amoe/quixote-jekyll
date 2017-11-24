(function() {
    "use strict";

    describe("Home page", function() {
        // var BACKGROUND_BLUE = "rgb(65, 169, 204)";
        // var WHITE = "rgb(255, 255, 255)";
        // var MEDIUM_BLUE = "rgb(0, 121, 156)";

        // max width for wrapper in minima theme
        var maxWidth = 800 - (30 * 2);
        
        var frame;
        var body;
        var home;
        var header;

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
            home = frame.get(".home");
            header = frame.get("header");
        });

        
        it("has a color scheme", function() {
            assert.equal(2, 2);
            assert.equal(body.getRawStyle("color"), "rgb(17, 17, 17)", "color check");
        });

        it("has the correct width", function() {
            console.log("hello");
            home.assert({width: maxWidth});
        });

        it("uses the right font", function() {
            assert.include(header.getRawStyle("font-family"), "Helvetica");
        });
    });
}())
