import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'ShashwatGautam',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'PulkitGupta',
    email: 'user1@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'PrathamGupta',
    email: 'user2@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
