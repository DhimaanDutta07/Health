import { toast } from 'react-hot-toast';

export const validateAdminLoginData = (data) => {
  const errors = {};

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // if (!data.password || data.password.length < 8) {
  //   errors.password = 'Password must be at least 8 characters';
  // }

  if (Object.keys(errors).length > 0) {
    const firstError = Object.values(errors)[0];
    toast.error(firstError);
    throw new Error(JSON.stringify(errors));
  }

  return {
    email: data.email.toLowerCase().trim(),
    password: data.password,
  };
};