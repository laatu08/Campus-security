import React, { useEffect ,useContext, useState} from 'react'
import { Link, NavLink,useLocation } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider';

export default function Header() {
 

const {setUserInfo,userInfo}=useContext(UserContext)
  useEffect(() => {
    fetch("http://localhost:5001/profile",{
        credentials:'include'
    }).then((response) => {
      response.json().then((userInfo) => {
        console.log(userInfo)
        setUserInfo(userInfo.username);
      });
    });
  }, []);
console.log(userInfo);
  const logout=()=>{
    fetch('http://localhost:5001/logout',{
        method:'POST',
        credentials:'include'
    }).then(()=>{
        setUserInfo(null);
    })
    
  }

  const username = userInfo;
  console.log(username);
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-100 border-gray-200 px-4 lg:px-1 py-2">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <span className='py-2 px-1 ml-1 text-lg font-semibold text-blue-500 lg:text-3xl'>Uni<span className='font-bold text-purple-500'>Safe</span></span>
                    </Link>
                    {/* {
                        isActive && (
                            <>
                                <div>
                                    <Link>ID Card</Link>
                                    <Link>Map</Link>
                                    <Link>Help</Link>
                                </div>
                            </>
                        )
                    } */}
                    <div className="flex items-center lg:order-2">
                    {
    username ? (
        <Link
            className="text-white bg-gradient-to-t from-violet-600 to-purple-400 hover:bg-sky-50 hover:ring-2 hover:ring-sky-300 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm lg:text-lg px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition duration-200"
            onClick={logout}
        >
            Log Out
        </Link>
    ) : (
        <Link
            to="/login"
            className="text-white bg-gradient-to-t from-violet-600 to-purple-400 hover:bg-sky-50 hover:ring-2 hover:ring-sky-300 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm lg:text-lg px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition duration-200"
        >
            Log In
        </Link>
    )
}

                       
                    </div>
                    {/* <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    ?
                                </NavLink>
                            </li>
                        </ul>
                    </div> */}
                    </div>
            </nav>
        </header>
    );
}