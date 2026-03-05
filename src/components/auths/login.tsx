import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Login = () => {
    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const handleSumit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!(formData.email && formData.password)) {
            toast.error('Please fill in all fields');
            return;
        }
        toast.success('Login successful');
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }
    return (
        <div className="flex-col items-center justify-center h-screen min-w-full bg-black text-white text-center transition-background duration-500 hover:bg-gray-800">
            <div className="form flex-col items-center justify-center max-w-[50%] mx-auto pt-40">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
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
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full p-5 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-5 focus:ring-blue-500"
                />
                <button className="w-[50%] p-5 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300" onClick={handleSumit}>
                    Login
                </button>
            </div>
            <p>
                Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span>
            </p>
        </div>
    )
}

export default Login;
