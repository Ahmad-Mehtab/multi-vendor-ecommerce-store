import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { doRegister } from "../@apis/auth";
import { useMutation } from "@tanstack/react-query";
import { DevTool } from "@hookform/devtools";

function SignUp() {
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const userRegistered = useMutation({
      mutationFn: doRegister,
      // onSuccess: (data,error) => {
      // toast.success(data.data.message)
      // },
    });
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
      } = useForm()

      const handleApplication = async (data) => {
        // console.log('data:>>', resume);
        const formData = new FormData();
        // Append other form data
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
            formData.append("avatar", avatar); // Append the file directly to the FormData
            // console.log(formData);
        // for (let value of formData.values()) {
        //   console.log(value);
        // }
        try {
          // setLoading(true)
          // const res = 
          await userRegistered.mutateAsync(formData);
          
          toast.success("added successfully");
        } catch (error) {
          toast.error("some thing went wrong");
        } finally {
          // setLoading(false)
          // reset();
          // navigate('/job/getall')
        }
      };
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register as a new user
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit(handleApplication)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="text"
                      autoComplete="name"
                      required
                      {...register("name", { required: true })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
    
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      {...register("email", { required: true })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
    
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type={visible ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      required
                      {...register("password", { required: true })}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {visible ? (
                      <AiOutlineEye
                        className="absolute right-2 top-2 cursor-pointer"
                        size={25}
                        onClick={() => setVisible(false)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="absolute right-2 top-2 cursor-pointer"
                        size={25}
                        onClick={() => setVisible(true)}
                      />
                    )}
                  </div>
                </div>
    
                <div>
                  <label
                    htmlFor="avatar"
                    className="block text-sm font-medium text-gray-700"
                  ></label>
                  <div className="mt-2 flex items-center">
                    <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                      {avatar ? (
                        <img
                          src={avatar}
                          alt="avatar"
                          className="h-full w-full object-cover rounded-full"
                        />
                      ) : (
                        <RxAvatar className="h-8 w-8" />
                      )}
                    </span>
                    <label
                      htmlFor="file-input"
                      className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <span>Upload a file</span>
                      <input
                        type="file"
                        name="avatar"
                        id="file-input"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => setAvatar(e.target.files[0])}
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
                <div className={`${styles.noramlFlex} w-full`}>
                  <h4>Already have an account?</h4>
                  <Link to="/login" className="text-blue-600 pl-2">
                    Sign In
                  </Link>
                </div>
              </form>
              <DevTool control={control} /> {/* set up the dev tool */}
            </div>
          </div>
        </div>
      );
}

export default SignUp