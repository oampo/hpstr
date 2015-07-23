var path = require('path');
var kue = require('kue');

var hipsterize = require('./hipsterize');

queue = kue.createQueue();

queue.process('hipsterize-avatar', function(job, done) {
    var inputPath = job.data.inputPath;
    var mimetype = job.data.mimetype;
    var outputPath = job.data.outputPath;

    hipsterize(inputPath, mimetype, outputPath, function(err) {
        done(err);
    });
});


