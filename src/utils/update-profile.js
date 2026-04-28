import axios from "axios";

export const updateProfile = async (uuid, formData) => {
    try {
        const response = await axios.patch(
            `${process.env.REACT_APP_API_URL || 'http://localhost:3000'}/users/update/${uuid}`,
            formData
        );

        // Return the success boolean from the server response
        return response.data.success;
    } catch (error) {
        // Log the error for debugging
        console.error("Error updating profile:", error.response?.data || error.message);

        // Return false so the calling component knows the update failed
        return false;
    }
};