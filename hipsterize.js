var lwip = require('lwip');

var hipsterize = function(inputFile, mimetype, outputFile, callback) {
    // lwip takes mimetype without the "image/"
    var type = mimetype.split('/')[1];
    lwip.open(inputFile, type, function(err, image) {
        if (err) {
            callback(err);
            return;
        }
        image.batch()
            .cover(200, 200)
            .lighten(0.3)
            .saturate(-0.4)
            .writeFile(outputFile, function(err) {
                callback(err);
            });
    });
};

module.exports = hipsterize;
