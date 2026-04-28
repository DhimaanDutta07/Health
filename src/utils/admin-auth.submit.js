import axios from 'axios';
import { validateAdminLoginData } from './admin.validation';
import { toast } from 'react-hot-toast';

export const adminLogin = async (email, password) => {
    console.log('Attempting admin login with email:', email); // Debug log
    const formData = { email, password };

    try {
        const validatedData = validateAdminLoginData(formData);

        const response = await axios.post(
            `${process.env.REACT_APP_API_URL || 'http://localhost:3000'}/admin/login`,
            validatedData,
            {
                headers: { 'Content-Type': 'application/json' },
                timeout: 10000,
            }
        );

        toast.success('Admin Login Successful!');

        // FIXED: Use 'response' instead of 'result'
        return response.data;

    } catch (error) {
        let errorMessage = 'Admin login failed. Please try again.';

        if (error.response?.data?.message) {
            errorMessage = error.response.data.message;
        } else if (error.message) {
            errorMessage = error.message;
        }

        toast.error(errorMessage);
        throw error;        // Important: re-throw so the caller can catch it
    }
};