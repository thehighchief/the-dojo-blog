import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    
    return (
        <div className="nav-bar">
            <header>
                <h1>Dojoblog</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="newblog">Newbog</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}
 
export default NavBar;