import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)

    const handleSignUp = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("name", {
                            required: "Name is required"
                        })} />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", {
                            required: "Email is required"
                        })} />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password at least 6 characters or longer" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }

                        })} />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent my-3 w-full max-w-xs' value='Sign Up' type="submit" />
                </form>
                <p>Already have an account. Please <Link to='/login' className='text-secondary'>Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;