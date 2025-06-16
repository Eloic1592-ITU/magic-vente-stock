import React, {useEffect, useState} from "react";
import Basket from "../components/Basket";
import {useAuth} from "../contexts/AuthContext.jsx";
import { useEffect, useState } from "react";
import { getProduitDuJour } from "../services/api";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduitDuJour } from "../services/api";

function HomePage() {
    const {currentUser} = useAuth();
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const {logout} = useAuth();
    const navigate = useNavigate();
  
   const [produitDuJour, setProduitDuJour] = useState(null);

    useEffect(() => {
        const fetchProduit = async () => {
            try {
                const produit = await getProduitDuJour();
                setProduitDuJour(produit);
            } catch (error) {
                console.error("Erreur lors du chargement du produit du jour :", error);
            }
        };
        fetchProduit();
    }, []);

    if (!produitDuJour) {
        return <div>Chargement du produit du jour...</div>;
    }

    useEffect(() => {
        setUser(currentUser);
    }, [currentUser]);
    const [produitDuJour, setProduitDuJour] = useState(null);

    useEffect(() => {
        const fetchProduit = async () => {
            try {
                const produit = await getProduitDuJour();
                setProduitDuJour(produit);
            } catch (error) {
                console.error("Erreur lors du chargement du produit du jour :", error);
            }
        };
        fetchProduit();
    }, []);

    if (!produitDuJour) {
        return <div>Chargement du produit du jour...</div>;
    }

    const item = {
        itemName: produitDuJour.libelle,
        itemPrice: produitDuJour.prix,
        itemStock: produitDuJour.quantiteEnStock,
        itemImage: produitDuJour.image,
    };

    const disconnect = () => {
        try {
            logout();
            navigate('/login');
            // eslint-disable-next-line no-unused-vars
       } catch (e) {
            setError('Erreur lors de la déconnexion');
        }
    };

    return (
        <div
            className="h-screen w-screen xl:h-[900px] bg-[length:100%_100%] bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: "url(/img/home-page/homePageBg.png)",
                fontFamily: "Inknut Antiqua, serif",
            }}
        >
            <button
                onClick={disconnect}
                className="mt-4 bg-[#3c2e1e] text-[#f6c669] font-semibold px-4 py-2 hover:cursor-pointer"
                style={{ fontFamily: "Inknut Antiqua, serif" }}
            >
                Se deconnecter
            </button>

            {error && <div className="error-message" style={{fontFamily: "Inknut Antiqua, serif"}}>{error}</div>}

            {/* titre  */}
            <div className="w-full flex justify-center py-10 flex-col items-center">
                <img
                    className="w-28"
                    src="/img/home-page/logo.png"
                    alt="logoGondorChic"
                />
                <p className="text-3xl font-semibold">CHIC</p>
                <div className="grid w-fit">
                    <div className="mb-5">
                        <h1 className="text-7xl font-semibold">GONDOR</h1>
                    </div>
                    <div className="flex justify-center">
                        <img className="w-2/3" src="/img/home-page/line.png" alt="line"/>
                    </div>
                </div>
            </div>

            {/* texte de bienvenue */}
            <div className="grid grid-cols-12">
                <div className="ml-48 col-span-6">
                    {user ? (
                        <p className="text-5xl text-black leading-16">
                            Bienvenue cher <br/>
                            <span className="text-amber-900">{user.userId}</span>
                        </p>
                    ) : (
                        <p className="text-5xl text-black leading-16">Chargement...</p>
                    )}
                    <p className="text-2xl text-black leading-10 mt-10">
                        Le produit du jour est le{" "}
                        <span className="text-amber-900">{item.itemName}</span> <br></br>au
                        prix de{" "}
                        <span className="text-amber-900">{item.itemPrice} gondariary.</span>
                    </p>
                    <div className="flex items-center my-10">
                        <p className="text-black text-2xl mr-10">Quantité en stock:</p>
                        <div className="flex items-center border-4 px-2 py-1 text-black border-amber-900">
                            {item.itemStock}
                        </div>
                    </div>
                </div>
                <div className="col-span-6  flex flex-col items-center justify-center ml-20">
                    {/* daily product image */}
                    <img
                        src={item.itemImage}
                        className="h-60 w-fit"
                        alt="daily product"
                    />
                    <Basket/>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <img
                    className="relative bottom-60"
                    src="/img/home-page/epee.png"
                    alt="epee"
                />
            </div>
        </div>
    );
}

export default HomePage;
