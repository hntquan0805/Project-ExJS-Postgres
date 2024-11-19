const { User } = require('../models');

exports.registerUser = async (req, res) => {
  const formDataObject = req.body;
  formDataObject.name = formDataObject.name.trim();
  formDataObject.email = formDataObject.email.trim();

  const err = { name: '', email: '', password: '', confirmPassword: '' };

  if (formDataObject.name === '') {
    err.name = 'Name is required';
    return res.status(400).json(err); // Use return here
  }

  if (formDataObject.email === '') {
    err.email = 'Email is required';
    return res.status(400).json(err); // Use return here
  }

  if (formDataObject.password === '') {
    err.password = 'Password is required';
    return res.status(400).json(err); // Use return here
  }

  if (formDataObject.password.length < 6) {
    err.password = 'Password must be at least 6 characters';
    return res.status(400).json(err); // Use return here
  }

  if (formDataObject.confirmPassword === '') {
    err.confirmPassword = 'Password confirmation is required';
    return res.status(400).json(err); // Use return here
  }

  if (formDataObject.password !== formDataObject.confirmPassword) {
    err.confirmPassword = 'Password confirmation does not match';
    return res.status(400).json(err); // Use return here
  }

  const existingUser = await User.findOne({ where: { email: formDataObject.email } });
  if (existingUser) {
    err.email = "Email was already in use";
    return res.status(400).json(err); // Use return here
  }

  // Create the new user
  const userObject = { name: formDataObject.name, email: formDataObject.email, password: formDataObject.password };
  const newUser = await User.create(userObject);

  // Send the success page as a response
  res.status(200).render('users/success', { title: "Sign Up Success", user: newUser, layout: 'layouts/layout' });
}

  // console.log(req.body);
  // try {
  //   const { name, email, password, confirmPassword } = req.body;

  //   if (password !== confirmPassword) {
  //     return res.status(400).render('users/signup', {
  //         title: "Sign Up",
  //         errors: { confirmPassword: 'Password confirmation does not match' },
  //         values: { name, email }
  //     });
  //   }

  //   const existingUser = await User.findOne({ where: { email } });
  //   if (existingUser) {
  //     return res.status(400).render('users/signup', {
  //       title: "Sign Up",
  //       errors: { email: 'Email already in use' },
  //       values: { name, email }
  //     });
  //   }

  //   const newUser = await User.create({ name, email, password });
  //   res.render('users/success', { title: "Sign Up Success", user: newUser , layout : 'layouts/layout'});
  // } catch (error) {
  //   console.error('Error registering user:', error);
  //   res.status(500).render('users/signup', {
  //     title: "Sign Up",
  //     errors: { general: 'Error registering user. Please try again later.' },
  //     values: { name, email }
  //   });
  // }
// };