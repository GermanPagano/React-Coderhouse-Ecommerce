import { createContext } from "react";

//todo 1. crear el contexto
// darle un valor inicial al contexto
export const cartContext = createContext({ cart: "0" });

//todo 2. inicializar el provider.
// generar un custom provider

function CartProvider(props) {
    const cartLength = 10;
    
  //todo 3. retornar el provider con el context personalizado
  return (
    <cartContext.Provider value={{ cartLength ,  }}>
      {/* //todo 4. renderizamos el contenido del sitio como children */}
      {props.children}
    </cartContext.Provider>
  );
}

export { CartProvider };
