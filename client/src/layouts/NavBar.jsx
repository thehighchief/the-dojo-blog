import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    
    return (
        <div className="nav-bar">
            <header>
                <h1 className="logo">The Dojo blog</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="newblog">Newblog</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
 
export default NavBar;