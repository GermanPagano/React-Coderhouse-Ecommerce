import { createContext , useState } from "react";

//todo 1. crear el contexto
// darle un valor inicial al contexto
export const cartContext = createContext({ cart: [] });

//todo 2. inicializar el provider.
// generar un custom provider

function CartProvider(props) {
    const [cart, setCart]= useState([])
    
    const test = () => { console.log('test')}

    const AddToCart = (itemToAdd) => {
        // forma en 3 pasos de copiar y añadir un elemento al array.
        // let newCart = [...cart]
        // newCart.push(itemToAdd)
        // setCart(newCart)
        //
        // verifico que el item añadido exista o no en cart, y si existe le añado 1
        const existItem= cart.find( item => item.id === itemToAdd.id );
        existItem ? (
          existItem.quantity += itemToAdd.quantity
        ):
        (
          //forma resumida , copiamos todo lo de cart , y le agregamos itemToAdd
          setCart( [...cart , itemToAdd] )
        )
    }


    const RemoveToCart = (itemToRemove) => {
      //let deleteThis = cart.find(item => item.id !== itemToRemove.id)
      console.log(itemToRemove.title)
      setCart( cart.filter( item => item.id !== itemToRemove.id) )
    }


    const Clear = () => {
      setCart([])
    }


  //todo 3. retornar el provider con el context personalizado
  return (
    <cartContext.Provider value={{ cart , test , AddToCart ,RemoveToCart , Clear }}>
      {/* //todo 4. renderizamos el contenido del sitio como children */}
      {props.children}
    </cartContext.Provider>
  );
}

export { CartProvider };
