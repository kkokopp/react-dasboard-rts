import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState(""); // 1 = admin, 2 = perawat
    const navigate = useNavigate();

    const handleRegisterButton = () => {
        navigate("/register");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`USername: ${username} Password: ${password} Role: ${role}`);
        if(username === "admin" && password === "admin" && role === "1") {
            navigate("/admin/dashboard");
        }else if(username === "perawat" && password === "perawat" && role === "2") {
            navigate("/perawat");
        }
    };

    return (
        <div className="h-full w-full bg-neutral-200 dark:bg-neutral-700">
        <div className="flex flex-grow h-screen w-screen p-5 lg:px-40 xl:px-40">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* <!-- Left column container--> */}
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      {/* <!--Logo--> */}
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo" />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Aplikasi RTS
                        </h4>
                      </div>

                      <div className="flex items-center justify-center">
                        <form>
                          {/* <!--Username input--> */}
                          <div className="flex relative mb-4 items-center" data-te-input-wrapper-init>
                              <span className="me-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                  </svg>
                              </span>
                              <div className="input-container relative w-full">                                
                                  <input
                                    type="text"
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="peer block min-h-[auto] w-full rounded border-blue-800 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 input-transformed"
                                    id="username"
                                    placeholder="Username" />
                                  <label
                                    htmlFor="username"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary label-transform"
                                    >Username
                                  </label>
                              </div>
                          </div>
        
                          {/* <!--Password input--> */}
                          <div className="flex items-center relative mb-4" data-te-input-wrapper-init>
                              <span className="me-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                    </svg>                                  
                              </span>
                              <div className="input-container w-full">                                
                                  <input
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="peer block min-h-[auto] w-full rounded border-blue-800 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 input-transformed"
                                    id="password"
                                    placeholder="Password" />
                                  <label
                                    htmlFor="password"
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary label-transform"
                                    >Password
                                  </label>
                              </div>
                          </div>
  
                          {/* <!-- Select Role --> */}
                          <div className="relative mb-4 focus:border-blue-900">
                              <select data-te-select-init className="rounded-lg w-full"
                              onChange={(e) => setRole(e.target.value)}>
                                <option value="" disabled>Select a role...</option>
                                <option value="1">Admin</option>
                                <option value="2">Perawat</option>
                                </select>
                          </div>
        
                          {/* <!--Submit button--> */}
                          <div className="mb-12 pb-1 pt-1 text-center">
                            <button
                                onClick={handleSubmit}
                              className="mb-3 inline-block w-full rounded-lg px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] btn-primary"
                              type="button"
                              data-te-ripple-init
                              data-te-ripple-color="light">
                              Log in
                            </button>
        
                            {/* <!--Forgot password link--> */}
                            <a href="#!">Lupa Password?</a>
                          </div>
        
                          {/* <!--Register button--> */}
                          <div className="flex items-center justify-between pb-6">
                            <p className="mb-0 mr-2">Tidak punya akun?</p>
                            <button
                              type="button"
                              onClick={handleRegisterButton}
                              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                              data-te-ripple-init                              data-te-ripple-color="light">
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
      
                    </div>
                  </div>
      
                  {/* <!-- Right column container with background and description--> */}
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none login-color">
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
}

export default Login;