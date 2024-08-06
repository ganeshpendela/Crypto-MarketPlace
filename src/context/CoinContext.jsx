import PropTypes from "prop-types";
import React, { createContext, useEffect, useState } from "react";

// Create the context
export const CoinContext = createContext();

// Create the provider component
const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    // Add PropTypes validation
CoinContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
    // Fetch all coins from the API
    const fetchAllCoin = async () => {
        try {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'x-cg-demo-api-key': API_KEY
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setAllCoin(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    const contextValue = {
        allCoin,
        currency,
        setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );

    
};

export default CoinContextProvider;
