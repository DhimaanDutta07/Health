import axios from 'axios';
import { validateRegisterData } from './auth.validation';
import { toast } from 'react-hot-toast';

export const register = async (fullName, email, password) => {
    const formData = { fullName, email, password };

    try {
        const validatedData = validateRegisterData(formData);

        const response = await axios.post(
            `${process.env.REACT_APP_API_URL || 'http://localhost:3000'}/auth/signup`,
            validatedData,
            {
                headers: { 'Content-Type': 'application/json' },
                timeout: 10000,
            }
        );
        toast.success('Registration successful!');
        return response.data;

    } catch (error) {
        // Handle API errors
        let errorMessage = 'Registration failed. Please try again.';

        if (error.response?.data?.message) {
            errorMessage = error.response.data.message;
        } else if (error.message && !error.message.includes('{')) {
            errorMessage = error.message;
        }
        console.error('Registration error:', error); // Log the full error for debugging

        // toast.error(errorMessage); // We'll log the error in the calling function, so we won't show a toast here
        throw error;
    }
};
export const login = async (email, password) => {
    const loginData = { email, password };

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL || 'http://localhost:3000'}/auth/login`,
            loginData,
            {
                headers: { 'Content-Type': 'application/json' },
                timeout: 10000,
            }
        );
        const { user, session } = response.data;
        return response.data;

    } catch (error) {
        let errorMessage = 'Login failed. Please check your credentials and try again.';

        if (error.response?.data?.message) {
            errorMessage = error.response.data.message;
        } else if (error.message && !error.message.includes('{')) {
            errorMessage = error.message;
        }
        throw error;
    }
};
export const logout = () => {
    // Clear any stored tokens or user data here if needed
    toast.success('Logged out successfully!');
};