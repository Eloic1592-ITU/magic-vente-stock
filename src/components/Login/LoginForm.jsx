import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from "../../contexts/AuthContext.jsx";

function LoginForm() {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {login} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!pseudo || !password) {
            setError('Veuillez remplir tous les champs');
            return;
        }

        try {
            setLoading(true);
            await login(pseudo, password);
            navigate('/');
            // eslint-disable-next-line no-unused-vars
        } catch (e) {
            setError('Email ou mot de passe incorrect');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="w-[300px] h-[600px] rounded-sm bg-no-repeat bg- bg-center relative bg-[length:100%_100%] flex flex-col items-center justify-center p-6 bg-white"
            style={{
                backgroundImage: "url('/img/login-page/cadreForm.png')",
            }}
        >
            <div className="flex flex-col items-center text-[#b98d44]">
                {/* Logo */}
                <img src="/img/login-page/LogoGondorChic.png" alt="logo"/>

                {/* Titre */}
                <p
                    className="mt-4 font-semibold text-center"
                    style={{fontFamily: "Inknut Antiqua, serif"}}
                >
                    Connectez-vous avec <br/> votre compte
                </p>
            </div>

            {error && <div className="error-message">{error}</div>}

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 mt-6">
                <div className="flex flex-col">
                    <label
                        className="text-[#b98d44] font-semibold"
                        style={{fontFamily: "Inknut Antiqua, serif"}}
                    >
                        Pseudo
                    </label>
                    <input
                        type="text"
                        id="pseudo"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                        placeholder="Entrez votre pseudo..."
                        className="border border-[#b98d44] bg-[#e7e3d9] p-2"
                    />
                </div>

                <div className="flex flex-col">
                    <label
                        className="text-[#b98d44] font-semibold"
                        style={{fontFamily: "Inknut Antiqua, serif"}}
                    >
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Entrez votre mot de passe..."
                        className="border border-[#b98d44] bg-[#e7e3d9] p-2"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-[#3c2e1e] text-[#f6c669] font-semibold py-2"
                    style={{fontFamily: "Inknut Antiqua, serif"}}
                    disabled={loading}
                >
                    {loading ? 'Connexion en cours...' : "S’identifier"}
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
