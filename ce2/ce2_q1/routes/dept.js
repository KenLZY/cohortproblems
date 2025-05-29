const express = require('express');
const deptmodel = require('../models/dept.js');
const staffmodel = require('../models/staff.js');
var router = express.Router();


router.get('/add/:code', async function(req, res, next) {
    // Step 1: retrieve the parameter :code
    const code = req.params.code;
    // Step 2: create the document to be put into the collection
    const document = new deptmodel.Dept(code);
    // Step 3: insert it into the collection
    await deptmodel.insertMany([document]);
    // this line will return all documents within the collection deptmodel
    const allDepartments = await deptmodel.all()
    res.send(`${JSON.stringify(allDepartments)}`); // TODO: Fixme
});



/* GET dept listing. */

router.get('/all/', async function(req, res, next) {
    const allDepartments = await deptmodel.all();
    res.send(`${JSON.stringify(allDepartments)}`); // TODO: Fixme
});


router.get('/all/withstaff/', async function(req, res, next) {
    // retrieve all staff with a department
    const staffWithDept = await staffmodel.find({}, {dept:!null});
    const deptMap = {};

    for (const staff of staffWithDept) {
        const deptCode = staff.dept;

        if (!deptMap[deptCode]) {
            deptMap[deptCode] = {
                staffs: []
            };
        }

        deptMap[deptCode].staffs.push({id: staff.id, name: staff.name, dept:staff.dept});

    }
    res.send(`${JSON.stringify(deptMap)}`);
})


module.exports = router;
