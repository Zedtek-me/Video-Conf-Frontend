import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import RequestHandler from '../../utils/requests.tsx';
import { API_URL } from '../../settings.tsx';



const SignUp = () => {
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password1: '',
        password2: ''   
    });
    const navigate = useNavigate();
    const handleSumit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!(formData.email && formData.password1 && formData.password2)) {
            toast.error('Please fill in all fields');
            return;
        }
        if(formData.password1 !== formData.password2) {
            toast.error('Passwords do not match');
            return;
        }
        console.log(`base url to make the request::: ${API_URL}`);
        const responseData = await new RequestHandler(API_URL).post('/auth/signup', {
            email: formData.email,
            password: formData.password1,
            first_name: formData.firstName,
            last_name: formData.lastName
        });
        console.log("response data from the backend::: ", responseData);
        if(responseData.error) {
            toast.error(responseData.error);
            return;
        }
        toast.success('SignUp successful');
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }
    return (
        <div className="flex-col items-center justify-center h-screen min-w-full bg-black text-white text-center transition-background duration-500 hover:bg-gray-800 pt-40">
            <div className="form flex-col items-center justify-center max-w-[50%] mx-auto">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full p-5 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-5 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full p-5 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-5 focus:ring-blue-500"
                />
                <input 
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-5 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-5 focus:ring-blue-500"
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={formData.password1}
                    onChange={(e) => setFormData({ ...formData, password1: e.target.value })}
                    className="w-full p-5 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-5 focus:ring-blue-500"
                />
                <input 
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.password2}
                    onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
                    className="w-full p-5 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-5 focus:ring-blue-500"
                />
                <button className="w-[50%] p-5 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300" onClick={handleSumit}>
                    Sign Up
                </button>
            </div>
            <p>
                Have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/login')}>Login</span>
            </p>
        </div>
    )
};

export default SignUp;
