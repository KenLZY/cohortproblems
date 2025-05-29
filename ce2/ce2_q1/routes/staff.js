const express = require('express');
const staffmodel = require('../models/staff.js');
const deptmodel = require('../models/dept.js');
var router = express.Router();


/* insert a staff, should have used POST instead of GET */
router.get('/add/:id/:name/:code', async function(req, res, next) {
    // retrieve the parameters first
    const id = req.params.id;
    const name = req.params.name;
    const code = req.params.code;
    // create a new document to be inserted into the staff collection
    const document = new staffmodel.Staff(id, name, code);
    // insert the document into the collection
    await staffmodel.insertMany([document])
    // now, return in JSON, the documents in the collection
    const allStaff = await staffmodel.all();
    res.send(`${JSON.stringify(allStaff)}`)
});

/* GET staff listing. */

router.get('/all/', async function(req, res, next) {
    const allStaff = await staffmodel.all();
    res.send(`${JSON.stringify(allStaff)}`);
});


module.exports = router;
