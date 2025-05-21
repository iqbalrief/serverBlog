const{User} = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login =  async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ status: 102, message: 'Email tidak ditemukan' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ status: 102, message: 'Password salah' });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.json({ status: 0, token });
  } catch (err) {
    return res.status(500).json({ status: 108, message: err.message });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ status: 102, message: 'Email sudah terdaftar' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = await User.create({
      name,  
      email,
      password: hashedPassword,
    });

    
    return res.status(201).json({
      status: 0,
      message: 'Registrasi berhasil',
      user
    });
  } catch (err) {
    return res.status(500).json({ status: 108, message: err.message });
  }
};

module.exports ={
    login,
    register
}