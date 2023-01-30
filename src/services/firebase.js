import { initializeApp } from "firebase/app";
import { getFirestore , collection , getDocs, getDoc, doc ,query , where, addDoc} from "firebase/firestore"; //  SDK -> soft development kit
import algoliasearch from 'algoliasearch/lite'
// para actualizar los productos debo descomentar este import y luego la funcion de la linea 97 a 107.
// import { products } from '../services/productsDB'


// inizializo algolia
const APPLICATION_ID = 'A4REJH6ERF'
const SEARCH_API_KEY = 'edb7cb65fbc2aaec208b165d0c6ece29'
const ALGOLIA_INDEX = 'prod_of_ecommerce'

const client = algoliasearch( APPLICATION_ID , SEARCH_API_KEY)
const index = client.initIndex(ALGOLIA_INDEX)

const firebaseConfig = {
    apiKey: "AIzaSyDBvFqBKHbFIiWbk-aWRUibHwqGz_YaCfM",
    authDomain: "coderhouse-ecommerce-gaming.firebaseapp.com",
    projectId: "coderhouse-ecommerce-gaming",
    storageBucket: "coderhouse-ecommerce-gaming.appspot.com",
    messagingSenderId: "338743471227",
    appId: "1:338743471227:web:f66b00e386f92cf9d546de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

// obtener todos los productos de la bd
export async function CatchProducts (){
  //obtener todos los 'documentos' de firestore
  //1- referencia a nuestra coleccion
  const productsRef = collection(dataBase, 'products')
  //2 - obtenemos todos los docts de 'products' ( getDocs)
  const snapshot = await getDocs( productsRef )
  const products = snapshot.docs.map( (elem) =>{
    let product = elem.data();
    product.id = elem.id;
    return product
  })

  return products
  }  
  
// obtener los productos por ID
export async function getProduct(idSelected) {
  const productsRef = collection(dataBase, 'products')
  const docRef = doc(productsRef, idSelected)
  const snapshot = await getDoc(docRef);
  return {...snapshot.data(), id: snapshot.id}
}

// obtener los productos por categoria
export async function getProductByConsole(ItemConsole){
  const productsRef = collection(dataBase, 'products');
  const q  = query( productsRef , where( "console", "==" , ItemConsole ) )
  const snapshot = await getDocs(q)
  const products = snapshot.docs.map( (elem) =>{
    let product = elem.data();
    product.id = elem.id;
    return product
  })
  console.log(products)
  return products
  }
  

// funcion para buscar por palabra en los productos , utilize la extension de Algolia
export async function getProductByName(ItemName){
  const { hits } = await index.search( ItemName,{
    hitsPerPage: 3
  })
  const products = hits.map(({objectID, price, img, ...rest}) => ({
    id: objectID,
    price: price,
    img: img,
    ...rest
  }))
  return products
}



export async function createOrder(order){
  const orderRef = collection(dataBase, 'order')
// creo la orden añadiendo 
  let resolveCreateOrder = await addDoc( orderRef , order );
  return resolveCreateOrder.id
  
}



// Para cargar los productos des-comentar esta funcion y regargar pagina
// los productos los cargo desde el archivo productsDB 'products'

// export async function DataMockToDb(){
//     Promise.all(
//       products.map( async (post)=> {
//         const resp = await (
//           delete post.id,
//           addDoc(collection(dataBase, 'products'), post));
//         return console.log(resp.title);
//     })
//     )
// }
// DataMockToDb()



export default dataBase;
