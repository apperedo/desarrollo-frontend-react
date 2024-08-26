import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const form = useSelector(state => state.form);
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
            </ul>
            <div className="bienvenido">
                {form.formData.username && <span>Bienvenido {form.formData.username}</span>}
                {form.formData.email && <span>: {form.formData.email}</span>}
            </div>
        </nav>
    );
};

export default Navbar;