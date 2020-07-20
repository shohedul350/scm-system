const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../../models/adminModel');
const errorFormator = require('../../utilis/errorFormator');
const Authenticate = require('../../middleware/authenticate');

// @route get api/admin
// @desc get All admin
// @access privet
router.get('/admin', Authenticate, async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    res.status(200).json(admin);
  } catch (err) {
    next(err);
  }
});

// @route post api/admin/register
// @desc Register admin
// @access Public
router.post('/admin/register',

  // chech data

  [check('UserName', 'Name is it require')
    .not()
    .isEmpty(),
  check('email', 'please include valid email')
    .isEmail(),

  check('password', 'please enter a password with 6 or more characters').isLength({ min: 6 }),

  ],

  (req, res) => {
    console.log(req.body);
    // const errors = validationResult(req).formatWith(errorFormator);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({
    //     error: errors.mapped(),
    //   });
    // }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {
      UserName, email, password,
    } = req.body;

    Admin.findOne({ email })
      .then((admin) => {
        if (admin) {
          return res.status(500).json({ msg: 'admin already exists' });
        }

        // password bcrypt

        bcrypt.hash(password, 11, (err, hash) => {
          if (err) {
            return res.status(500).send('Server Error ');
          }

          const newAdmin = new Admin({
            UserName,
            email,
            password: hash,
          });
          newAdmin.save()
            .then(() => {
              res.status(201).json({
                msg: 'Admin Created Successfully',
              });
            })
            .catch(() => {
              res.status(500).send('server Error');
            });
          return 0;
        });
        return 0;
      })
      .catch(() => {
        res.status(500).send('server Error');
      });
    return 0;
  });

// @route post api/admin/login
// @desc Authentication & get token
// @access Public

router.post('/admin/login',
  [
    check('email', 'please include valid email').isEmail(),

    check('password', 'password is requerd').exists(),
  ],

  (req, res) => {
    const errors = validationResult(req).formatWith(errorFormator);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.mapped(),
      });
    }
    const { email, password } = req.body;

    Admin.findOne({ email })
      .then((admin) => {
        if (!admin) {
          return res.status(400).json({ msg: 'Admin not found' });
        }

        bcrypt.compare(password, admin.password, (err, result) => {
          if (err) {
            res.status(500).json({
              msg: 'server error compare',
            });
          }

          if (!result) {
            return res.status(400).json({
              msg: 'password doesnot match',
            });
          }
          //  create token
          const token = jwt.sign({
            _id: admin._id,
            userName: admin.usrName,
            email: admin.email,

          }, 'SECRET', { expiresIn: '24h' });

          res.status(200).json({
            msg: 'login succesfull',
            token: `Bearer ${token}`,
          });
          return 0;
        });
        return 0;
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ msg: 'server error ' });
      });
    return 0;
  });

module.exports = router;
