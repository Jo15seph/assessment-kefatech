import { useNavigate } from "react-router-dom";
const NavBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        if(confirm("Are you sure you want to logout?")){
            localStorage.removeItem("isAuthenticated");
            navigate('/');
        }
    }
    return (
        <>
            <div className="header-2">
                <nav className="bg-white py-2 md:py-4">
                    <div className="container px-4 mx-auto md:flex md:items-center">
                        <div className="flex justify-between items-center">
                            <a href="#" className="font-bold text-xl text-indigo-600"> Assessment</a>
                        </div>
                        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                            <button className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar;
