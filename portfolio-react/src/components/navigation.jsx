import { Link } from 'react-router-dom';

function Navigation() {
    return (
    <nav className="navigation">
        <div className="nav-link">
            <Link to="/">
                About Me
            </Link>
        </div>
        <div className="nav-link">
            <Link to="/portfolio">
                Portfolio
            </Link>
        </div>
        <div className="nav-link">
            <Link to="/contact">
                Contact
            </Link>
        </div>
        <div className="nav-link">
            <Link to="/resume">
                Resume
            </Link>
        </div>
    </nav>
    );
}

export default Navigation;

// How I had it:
// function Navigation() {
//     return (
//     <nav>
//         <ul>
//             <li>
//                 <Link to="/">About Me</Link>
//             </li>
//             <li>
//                 <Link to="portfolio">Portfolio</Link>
//             </li>
//             <li>
//                 <Link to="contact">Contact</Link>
//             </li>
//             <li>
//                 <Link to="resume">Resume</Link>
//             </li>
//         </ul>
//     </nav>
//     );
// }