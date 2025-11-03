import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3 }}>
      <Typography variant="h5" mb={2}>{isLogin ? 'Login' : 'Sign Up'}</Typography>
      <TextField name="email" label="Email" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="password" label="Password" type="password" fullWidth margin="normal" onChange={handleChange} />
      <Button variant="contained" fullWidth sx={{ mt: 2 }}>{isLogin ? 'Login' : 'Sign Up'}</Button>
      <Typography sx={{ mt: 2, cursor: 'pointer' }} onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </Typography>
    </Box>
  );
}