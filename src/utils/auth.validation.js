import { toast } from 'react-hot-toast';

export const validateRegisterData = (data) => {
  const errors = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.password || data.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  } else if (!/[A-Z]/.test(data.password)) {
    errors.password = 'Password must contain at least one uppercase letter';
  } else if (!/[a-z]/.test(data.password)) {
    errors.password = 'Password must contain at least one lowercase letter';
  } else if (!/[0-9]/.test(data.password)) {
    errors.password = 'Password must contain at least one number';
  } else if (!/[^A-Za-z0-9]/.test(data.password)) {
    errors.password = 'Password must contain at least one special character';
  }

  if (data.phoneNumber && !/^\+?[1-9]\d{1,14}$/.test(data.phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid phone number';
  }

  if (Object.keys(errors).length > 0) {
    const firstError = Object.values(errors)[0];
    toast.error(firstError);
    throw new Error(JSON.stringify(errors));
  }

  return {
    fullName: data.fullName.trim(),
    email: data.email.toLowerCase().trim(),
    password: data.password,
    phoneNumber: data.phoneNumber ? data.phoneNumber.trim() : undefined,
  };
};
export const validateLoginData = (data) => {
  const errors = {};

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  }

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