import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidationSchema } from "../validations/Validation";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();

    const onSubmit = (values, actions) => {
        
        const username = values.username;
        const password = values.password;
        
        if (username === import.meta.env.VITE_USERNAME && password === import.meta.env.VITE_USER_PASSWORD) {
            
            toast.success('Logged in Successfully! Redirecting...', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            localStorage.setItem("isAuthenticated", true);
            actions.resetForm();
            setTimeout(() => {
                navigate('/dashboard')
            }, 2000);

        } else {
            toast.error('Username or Password incorrect! Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    
    const { values, handleChange, touched, handleBlur, errors, handleSubmit} = useFormik({
        initialValues:{
         username:"",
         password:""
        },
        validationSchema:loginValidationSchema,
        onSubmit
     })
     
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
      <ToastContainer />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Username" 
                            required="" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            />
                            <span className="text-red-500">{errors.username && touched.username ? errors.username : ""}</span>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required="" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            />
                            <span className="text-red-500">{errors.password && touched.password ? errors.password : ""}</span>
                        </div>
                        
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Login
