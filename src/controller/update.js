// import student model
const Student = require('../model/student');

// post student
exports.postStudent = async (req, res) => {
    const student = new Student({
        npm: req.body.npm,
        nama: req.body.nama
    });
    try {
        await student.save();
        res.send({status: 'OK'});
    }
    catch (err) {
        res.send({status: 'ERROR'});
    }
}

// export postStudent to be used in other files
module.exports = exports;