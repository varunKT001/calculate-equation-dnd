import React, { useContext, useEffect, useState } from 'react';
import { apiUrl } from '../data';

const GlobalContext = React.createContext();

export const GlobalContextProvider = (props) => {
  const [operands, setOperands] = useState([]);
  const [comparator, setComparator] = useState('');
  const [equation, setEquation] = useState([]);
  const [rhs, setRHS] = useState('');

  const fetchAlphabets = async () => {
    try {
      const response = await fetch(apiUrl);
      const { data } = await response.json();
      setOperands(data.alphabets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlphabets();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        operands,
        comparator,
        setComparator,
        equation,
        setEquation,
        rhs,
        setRHS,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
