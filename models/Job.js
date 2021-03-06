var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

var Job = mongoose.model('Job', jobSchema);

// Seed the job collection
exports.seedJobs = function(){
    Job.find({}).exec(function(err, collection){
        if(collection.length === 0){
            Job.create({title: 'Cook', description: 'You will be making bagels'});
            Job.create({title: 'Waiter', description: 'You will be putting food on peoples tab'});
            Job.create({title: 'Programmer', description: 'You will be mindlessly typing for ..'});
            Job.create({title: 'Axe Maker', description: 'We need many axes made..so many..'});
        }
    });
}