import User from '../models/UserModel.js';
import Manager from '../models/ManagerProfile.js';
import Employee from '../models/EmployeeProfile.js';
import asyncHandler from 'express-async-handler';

//desc get manager details
// @route   GET /api/manager
//@access protected and restricted
const getProfileInfo = asyncHandler(async (req, res) => {
  const profile = await Manager.findOne({ user: req.user._id });

  if (profile) {
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('not found');
  }
});

//desc post manager info
// @route POST /api/manager
//@access protected and restricted
const managerProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { name, email, phone, store } = req.body;

    const profileFields = {
      name,
      email,
      store,
      phone,
    };

    let managerProfile = await Manager.findOneAndUpdate(
      { user: req.user._id },
      { $set: profileFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    await managerProfile.save();
    return res.json(managerProfile);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//desc post manager info
// @route POST /api/manager/employees
//@access protected and restricted
const createEmployee = asyncHandler(async (req, res) => {
  const manager = await Manager.findOne({ user: req.user._id });
  if (manager) {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const employee = await User.create({
      email,
      password,
      isManager: false,
    });

    await employee.save();
    if (employee) {
      manager.employees.push(employee._id);
      await manager.save();
    }

    //return manager info
    res.json(manager);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//desc  remove employee
// @route Delete /api/manager/employees
//@access protected and restricted
const removeEmployee = asyncHandler(async (req, res) => {
  const manager = await Manager.findOne({ user: req.user._id });
  let employeeUser = await User.findById(req.params.id);

  if (manager && employeeUser) {
    await Manager.updateOne(
      { user: req.user._id },
      { $pull: { employees: req.params.id } }
    );

    await User.deleteOne({ _id: req.params.id });
    res.json('User removed');
  } else {
    res.status(404);
    throw new Error('user not found');
  }
});

//desc get all employees
//@ route GET /api/manager/employees
//@access protected and restricted
const getEmployees = asyncHandler(async (req, res) => {
  const manager = await Manager.findOne({ user: req.user._id });

  let employeeList = [];

  if (manager) {
    manager.employees.map((employee) => {
      employeeList.push(employee);
    });
    let employees = await Employee.find({ user: { $in: employeeList } });

    res.json(employees);
  } else {
    res.status(404);
    throw new Error('user not found');
  }
});

export {
  managerProfile,
  getProfileInfo,
  createEmployee,
  removeEmployee,
  getEmployees,
};
