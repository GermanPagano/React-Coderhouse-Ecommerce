import RDR2 from "../assets/img/games-img/principal/Red-Dead-Redemption-2.jpg";
import DeadSpace from "../assets/img/games-img/principal/dead-space-2613-poster.jpg";
import AssasinsValhalla from "../assets/img/games-img/principal/Assassins-Creed-Valhalla.jpg";
import ForzaHorizon5 from "../assets/img/games-img/principal/Forza-Horizon-5-Premium-Edition.jpg";
import SpiderMan from "../assets/img/games-img/principal/Marvels-SpiderMan-Miles-Morales.jpg";
import AlanWake from "../assets/img/games-img/principal/Alan-Wake-Remastered.jpg";
import Mafia from "../assets/img/games-img/principal/Mafia-Edicion-Definitiva.jpg";
import CyberPunk from "../assets/img/games-img/principal/Cyberpunk-2077.jpg";
import Mk11 from "../assets/img/games-img/principal/Mortal-Kombat-11-Ultimate-Edition-193x288.jpg";
import Tsubasa from "../assets/img/games-img/principal/Captain-Tsubasa-Rise-of-New-Champions.jpg";
import Uncharted from "../assets/img/games-img/principal/Uncharted-4-Legacy-of-Thieves-Collection.jpg";
import KartTracers from "../assets/img/games-img/principal/Nickelodeon-Kart-Racers-3-Slime-Speedway.jpg";
import GodOfWar from "../assets/img/games-img/principal/God-of-War.jpg";
import Scorn from "../assets/img/games-img/principal/Scorn-Deluxe-Edition.jpg";
import FootballManager from "../assets/img/games-img/principal/football-manager-2021-1.jpg";
import PES21 from "../assets/img/games-img/principal/eFootball-PES-2021.jpg";
import CartelTycoon from "../assets/img/games-img/principal/Cartel-Tycoon.jpg";

const products = [
  {
    id: 1,
    imgUrl: RDR2,
    console: "PC",
    title: "Red Dead Redemption II",
    category: "Accion | Aventura ",
    description:
      "Arthur Morgan y la banda de Van der Linde son forajidos en busca y captura. Mientras los agentes federales y los mejores cazarrecompensas de la nación les pisan los talones, la banda deberá abrirse camino por el abrupto territorio del corazón de América y sobrevivir a base de robos y peleas. Arthur deberá elegir entre sus propios ideales y la lealtad a la banda que lo vio crecer.",
    price: 317.79,
    stock: 10,
  },
  {
    id: 2,
    imgUrl: DeadSpace,
    console: "PC",
    title: "Dead Space",
    category: "Shooter | Supervivencia | Terror",
    description:
      "DEAD SPACE ES EL DEBUT DE EA DENTRO DEL GÉNERO DE LOS SURVIVAL HORROR. DURANTE EL JUEGO ASUMIREMOS EL CONTROL DE ISAAC CLARKE, UN INGENIERO DE ESTRUCTURAS ESPACIALES ENVUELTO EN UNA ANGUSTIOSA AVENTURA, CUANDO SU COMPAÑÍA RECIBE UNA MISTERIOSA LLAMADA DE SOCORRO DE UNA NAVE ESPACIAL PERDIDA.",
    price: 618.42,
    stock: 9,
    discount: 50,
  },
  {
    id: 3,
    imgUrl: AssasinsValhalla,
    console: "PC",
    title: "Assasins Creed Valhalla",
    category: "Action | Rol ",
    description:
      "Ponte en la piel de una leyenda vikinga en busca de gloria. Saquea a tus enemigos, haz prosperar tu asentamiento y consolida tu poder político. En Assassin’s Creed Valhalla, te pondrás en la piel de Eivor, una leyenda vikinga en busca de gloria. Explora la Inglaterra de los años oscuros mientras saqueas a tus enemigos, haces prosperar tu asentamiento y consolidas tu poder político.",
    price: 994.55,
    stock: 1,
  },
  {
    id: 4,
    imgUrl: ForzaHorizon5,
    console: "PS4",
    title: "Forza Horizon V",
    category: "Carrera",
    description:
      "Forza Horizon 5 es un juego de simulación de carreras ¡Tu aventura definitiva en Horizon te espera! Explora paisajes dinámicos y en constante evolución del mundo abierto de México con una acción de conducción ilimitada y divertida en cientos de los mejores coches del mundo. Esta es tu aventura Horizon Lidera impresionantes expediciones a través de los paisajes dinámicos y en constante evolución del mundo abierto de México con una acción de conducción ilimitada y divertida en cientos de los mejores coches del mundo.",
    price: 656.25,
    stock: 10,
    discount: 20,
  },
  {
    id: 5,
    imgUrl: SpiderMan,
    console: "PS4",
    title: "Spiderman Miles Morales",
    category: "Accion | Lucha ",
    description:
      "Luego de los eventos de Marvel's Spider-Man Remasterizado, el adolescente Miles Morales intenta adaptarse a la vida en su nuevo hogar intentando seguir los pasos de su mentor, Peter Parker, como el nuevo Spider-Man. Pero cuando una terrible lucha de poder amenaza con destruir su hogar, el aspirante a héroe comprende que un gran poder conlleva una gran responsabilidad. Para lograr salvar la ciudad de Nueva York de Marvel, Miles deberá cargar con la responsabilidad de ser Spider-Man.",
    price: 656.25,
    stock: 10,
    discount: 5,
  },
  {
    id: 6,
    imgUrl: AlanWake,
    console: "PS4",
    title: "Alan Wake Remastered",
    category: "Accion | Terror",
    description:
      "Alan Wake Remastered es un juego de acción y terror. Alan se ve forzado a cuestionar su cordura viendo como, página a página, la historia se vuelve realidad frente a él: una presencia hostil de oscuridad sobrenatural se está apoderando de todos los que encuentra, volviéndolos en su contra. No le queda más remedio que enfrentarse a las fuerzas de la oscuridad armado únicamente con su linterna, una pistola y lo que queda de su destrozada mente. Su viaje de pesadilla para encontrar respuestas al alucinante misterio al que se enfrenta le llevará a las aterradoras profundidades de la noche.",
    price: 656.25,
    stock: 10,
  },
  {
    id: 7,
    imgUrl: Mafia,
    console: "PS4",
    title: "Mafia",
    category: "Aventura",
    description:
      "Primera parte de la saga Mafia. Lost Heaven, Illinois. Años 30. Prospera como gánster durante la Ley Seca en esta reinvención del clásico. Un encontronazo con la mafia introduce al taxista Tommy Angelo en los peligrosos bajos fondos. A pesar de su reticencia inicial, Tommy no tarda en descubrir que las ventajas de unirse a la familia Salieri son demasiadas como para dejarlas pasar.",
    price: 656.25,
    stock: 2,
  },
  {
    id: 8,
    imgUrl: CyberPunk,
    console: "XBOX",
    title: "CyberPunk 2077",
    category: "Accion | rol ",
    description:
      "Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones.",
    price: 656.25,
    stock: 10,
  },
  {
    id: 9,
    imgUrl: Mk11,
    console: "XBOX",
    title: "Mortal Kombat 11",
    category: "Accion | lucha ",
    description:
      "Las nuevas variantes de los personajes te ofrecen un control de tus kombatientes sin precedentes, ya que podrás personalizarlos como tú quieras. El motor gráfico, además de mostrar con gran detalle cada destrucción craneal y ocular, te acercará tanto al kombate que casi podrás sentirlo. Y eso no es todo: las cinemáticas del modo Historia te traen a los kombatientes klásicos y a nuevos personajes, que continuarán esta épica saga creada hace 25 años.",
    price: 656.25,
    stock: 10,
  },
  {
    id: 10,
    imgUrl: Tsubasa,
    console: "PS4",
    title: "Captain Tsubasa",
    category: "Accion | anime ",
    description:
      "Captain Tsubasa: Rise of New Champions es un juego de fútbol de novedoso, pero con la acción trepidante y los tiros imposibles de siempre. Crea personajes con nuevas aptitudes y habilidades y usa tu «dream team» en partidos sin conexión y en red. Compite con amigos en partidos sin conexión de hasta 4 jugadores. Revive momentos del anime o forma parte del mundo de Captain Tsubasa.",
    price: 656.25,
    stock: 10,
    discount: 80,
  },
  {
    id: 11,
    imgUrl: Uncharted,
    console: "PC",
    title: "Uncharted 4",
    category: "Accion | rol ",
    description:
      "En Uncharted 4 Legacy of Thieves Collection busca tu fortuna y deja tu marca en el mapa en UNCHARTED: Colección Legado de ladrones. Descubre la emocionante narrativa de estilo cinematográfico y las exitosas y más importantes escenas de acción de la franquicia UNCHARTED, repletas de la astucia, el ingenio y los mejores momentos de los queridos ladrones, Nathan Drake y Chloe Frazer.",
    price: 656.25,
    stock: 1,
  },
  {
    id: 12,
    imgUrl: KartTracers,
    console: "XBOX",
    title: "Nickelodeon Kart Racers 3",
    category: "Carrera | Multijugador ",
    description:
      "Nickelodeon Kart Racers 3 Slime Speedway está reconstruido y reimaginado desde cero, ¡Nickelodeon Kart Racers regresa más grande y mejor que nunca! Incluye un reparto de voces de más de 40 personajes icónicos. ¡Derrapa, desliza y acelera en tu camino hasta la meta en pistas inspiradas en las legendarias animaciones de Nickelodeon como SpongeBob SquarePants, Teenage Mutant Ninja Turtles, Avatar: The Last Airbender y más!.",
    price: 656.25,
    stock: 10,
  },
  {
    id: 13,
    imgUrl: GodOfWar,
    console: "PS4",
    title: "God Of War",
    category: "Accion | aventura ",
    description:
      "Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora como un hombre en los dominios de los dioses y monstruos nórdicos. En este mundo cruel e implacable debe luchar para sobrevivir… y enseñar a su hijo a hacerlo también.",
    price: 656.25,
    stock: 10,
  },
  {
    id: 14,
    imgUrl: Scorn,
    console: "XBOX",
    title: "Scorn Deluxe Edition",
    category: "Aventura | terror ",
    description:
      "Scorn Deluxe Edition es un juego de terror atmosférico en primera persona ambientado en un universo escalofriante de formas extrañas y realidad sombría. Está diseñado en torno a la idea de haber sido arrojado al mundo. Aislado y perdido dentro de este mundo onírico, explorarás diferentes regiones conectadas entre sí de una manera no lineal. El propio ambiente tenebroso e inquietante es un personaje como tal.",
    price: 656.25,
    stock: 10,
  },
  {
    id: 15,
    imgUrl: FootballManager,
    console: "PC",
    title: "Football Manager 2021",
    category: "Deportes",
    description:
      "Football Manager 2021 es un juego de simulación. El mánager es el corazón de cualquier club de fútbol. Y Football Manager 2021 trae experiencias de gestión dinámicas y auténticas, además de detalles espectaculares pensados especialmente para ti. ¡Te brindamos las herramientas para que llegues a lo más alto! Dispones de más de 50 países y 2500 clubes de todos los niveles de la pirámide del fútbol, así que las posibilidades son infinitas. Tú decides, mánager.",
    price: 656.25,
    stock: 10,
  },
  {
    id: 16,
    imgUrl: PES21,
    console: "PC",
    title: "eFootball PES 2021",
    category: "Deportes ",
    description:
      "eFootball PES 2021 Season Update incluye todas las características que hicieron que PES fuera merecedor del premio «Best Sports Game» en el E3 de 2019 ¡y muchas más! La saga PES, nacida en 1995, cumple este año un cuarto de siglo. Te invitamos a que vuelvas a pisar el terreno de juego con nosotros en una nueva temporada que estará repleta de emociones. Además de contener los datos más recientes de jugadores y clubes, el juego incluye también el exclusivo modo UEFA EURO 2020™, donde tus amigos y tú podréis simular algunas de las rivalidades más encarnizadas del deporte rey.",
    price: 100,
    stock: 100,
  },
  {
    id: 17,
    imgUrl: CartelTycoon,
    console: "XBOX",
    title: "Cartel Tycoon",
    category: "Accion || estrategia ",
    description:
      "Cartel Tycoon es un juego de estrategia y está ambientado en una Latinoamérica ficticia de los años 80 y cuenta la historia de una época en la que la cocaína dominó Estados Unidos y el mundo entero. Unos señores de la droga, absurdamente ricos, gobiernan sus imperios gloriosos a la par que crean miles de puestos de trabajo, pero, a pesar de todo, la violencia es una constante en este mundo criminal.",
    price: 50,
    stock: 8,
  }
];

const CatchProductsOfMock = () => {
  return (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);

        console.log(
          "%c Devolviendo los productos de forma exitosa ",
          "background-color: green"
        );
      }, 2000);
    })
  );
};

const getProduct = (idSelected) => {
  return new Promise((resolve, reject) => {
    // la constante reqProd , recorre los productos y trae solo el producto.id que es igual al seleccionado
    const reqProd = products.find((item) => item.id === Number(idSelected));
    // verifico que exista un producto guardado en reqProd y si es true , entonces resuelvo la promesa
    setTimeout(() => {
      reqProd ? resolve(reqProd) : reject("no encontrado");
    }, 1000);
  });
};

const getProductCategory = (ItemConsole) => {
  return new Promise((resolve, reject) => {
    let reqProd = products.filter(item => item.console === ItemConsole);
    setTimeout(() => {
      reqProd ? resolve(reqProd) : reject("La categoria no existe");
    }, 1000);
  })
}


// funcion para buscar productos por el input
  const getProductByName = (ItemName) => {
  return new Promise( (resolve,reject)=>{
    ItemName = ItemName.toLowerCase()
    console.log("Buscando en el mock " + ItemName);
    let reqProd = products.filter((item)=> item.title.toLowerCase() === ItemName )
    
    setTimeout(() => {
      reqProd ? resolve(reqProd): reject('No existe ese nombre')    
    }, 500);
  })
} 


export  { getProduct, getProductCategory , getProductByName  };
export default CatchProductsOfMock;
