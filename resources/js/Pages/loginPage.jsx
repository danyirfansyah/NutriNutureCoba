import '../../css/login.css';
// import { Link, Head, usePage } from '@inertiajs/react';
import { Head, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import React, { useEffect } from 'react';
import { loginPage } from '../loginPage';

const halamanLogin = () => {
    useEffect(() => {
        loginPage();
    }, []);

    const { errors } = usePage().props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const storeLogin = async (e) => {
        e.preventDefault();

        Inertia.post('/login', {

            email: email,
            password: password,
        });
    }
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-...Kunci-Integrity-Anda..." crossorigin="anonymous" />
            <h2>hello welcome! Please login first!! </h2>
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action={storeLogin}>
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        {errors.email && (
                            <div className="alert alert-danger">
                                {errors.email}
                            </div>
                        )}
                        <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        {errors.password && (
                            <div className="alert alert-danger">
                                {errors.password}
                            </div>
                        )}
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="ghost" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default halamanLogin;



