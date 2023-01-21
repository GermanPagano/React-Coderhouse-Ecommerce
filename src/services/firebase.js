import { initializeApp } from "firebase/app";
import { getFirestore , collection , getDocs, getDoc, doc ,query , where} from "firebase/firestore"; //  SDK -> soft development kit

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



export default dataBase;
