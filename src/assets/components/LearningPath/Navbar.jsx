import React, { useState } from "react"
import {Link} from "react-router-dom"



function Navbar() {

    const [isMenuOpen, setMenuIsOpen] = useState(false); 
    const [isContactOpen, setContactIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!isMenuOpen);
        setContactIsOpen(false)
    };

    const toggleContact = () => {
        setContactIsOpen(!isContactOpen)
        setMenuIsOpen(false)
    }

    const [isLearning, setIsLearning] = useState(false)

    function learning() {
        setIsLearning(!isLearning)
    }

    return(
        <div className="flex justify-between items-center bg-white min-h-24 px-4 fixed top-0 left-0 right-0 lg:px-10 xl:px-14 2xl:px-36">
            <div className="text-2xl"><span className="text-primary">S</span>yntax<span className="text-primary">S</span>chool</div>
            <ul className="hidden md:block md:ml-30 lg:ml-32">
                <li onMouseEnter={learning} onMouseLeave={() => setIsLearning(false)} className="md:inline-block md:mx-4 relative hover:border-b-2 hover:border-t-2 hover:border-primary rounded-sm duration-200">
                    <a href="./#home">Learning Path</a>
                    <ul className= {`${isLearning? "block" : "hidden"} text-white absolute top-6 left-0 p-2 bg-primary w-full`}>
                        <li><a href="./#home" className="text-xs hover:bg-white hover:text-black hover:px-2 rounded-sm hover:py-1 duration-200">Home</a></li>
                        <li><a href="./#learning" className="text-xs hover:bg-white hover:text-black hover:px-2 rounded-sm hover:py-1 duration-200">Learning</a></li>
                        <li><a href="./#footer" className="text-xs hover:bg-white hover:text-black hover:px-2 rounded-sm hover:py-1 duration-200">Contact</a></li>
                    </ul>
                </li>
                <li className="md:inline-block md:mx-4"><a href="./#learning">Program</a></li>
                <li className="md:inline-block md:mx-4"><a href="./#footer">Challange</a></li>
            </ul>
            <div className="hidden sm:block">
                <a href="" className="mr-4 px-2 py-2 border-2 border-primary hover:text-white hover:bg-primary duration-200">Masuk</a>
                <a href="" className="bg-primary border-2 border-primary text-white px-2 py-2 rounded-sm hover:bg-white hover:text-black duration-200">Daftar</a>
            </div>
            <div className="sm:hidden flex gap-4">
            <button onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <button onClick={toggleContact}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
            </div>

            {/* Sidebar */}

            <div className={`fixed top-0 bg-white bg-secondary w-full h-full flex items-center justify-center flex-col gap-y-6
                
                ${isContactOpen ? "-translate-x-4" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
            <button onClick={toggleContact} className="p-4 text-black absolute top-4 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className="flex flex-col gap-y-6 items-center bg-primary h-5/6 w-10/12 py-5 rounded-2xl">
                    <div className="bg-black w-32 h-32 rounded-full overflow-hidden"></div>
                    <h1 className="text-white">Sign In</h1>
                    <form action="" className="flex flex-col gap-y-4">
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" className="p-2 rounded-xl" placeholder="Username"/>
                        <label htmlFor=""></label>
                        <input type="password" placeholder="Password" className="p-2 rounded-xl"/>
                    </form>
                    <div className="flex gap-x-8 text-white">
                        <div>
                            <input type="radio" name="" id="" className="mr-1"/>Remember me
                        </div>
                        
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="flex gap-x-6">
                        <a href="" className="bg-white border-2 border-primary text-black px-2 py-2 rounded-xl hover:bg-second hover:text-white duration-200 h-fit">Sign In</a>
                        <a href="" className="bg-white border-2 border-primary text-black px-2 py-2 rounded-xl hover:bg-second hover:text-white duration-200 h-fit">Sign Up</a>
                   </div>
                </div>
                
                
            </div>
            <div className={`fixed top-20 right-0 h-full w-64 bg-primary transform ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}>
                
                <button onClick={toggleMenu} className="p-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <nav>
                    <ul className="ml-4 mt-4 text-white">
                        <li className="mb-2 hover:text-black hover:bg-white w-44 hover:px-6 rounded-sm duration-200" onClick={learning}><a href="/#home">Learning Path</a>
                            <ul className={`ml-4 p-1 ${isLearning? "block" : "hidden"}`}>
                                <li className="hover:bg-black hover:text-white hover:px-2"><a href="./#home">Home</a></li>
                                <li className="hover:bg-black hover:text-white hover:px-2"><a href="./#learning"> Learning</a></li>
                                <li className="hover:bg-black hover:text-white hover:px-2"><a href="./#footer">Contact</a></li>
                            </ul>
                        </li>
                        <li className="mb-2 hover:text-black hover:bg-white w-44 hover:px-6 rounded-sm duration-200"><a href="/#learning">Program</a></li>
                        <li className=" hover:text-black hover:bg-white w-44 hover:px-6 rounded-sm duration-200"><a href="/#footer">Challenge</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )

}



export default Navbar