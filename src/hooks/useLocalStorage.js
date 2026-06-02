import { useState, useEffect } from 'react';

// PASO: Implementar el custom hook useLocalStorage
// Debe funcionar igual que useState pero persistir en localStorage
// Referencia: ver hooks-personalizados/useLocalStorage/useLocalStorage.jsx

const useLocalStorage = (clave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    try {
      const item = localStorage.getItem(clave);
      return item ? JSON.parse(item) : valorInicial;
    } catch {
      return valorInicial;
    }
  });

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);

  return [valor, setValor];
};

export default useLocalStorage;

