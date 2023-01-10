import RDR2 from "../assets/img/games-img/principal/Red-Dead-Redemption-2.jpg";
import DeadSpace from "../assets/img/games-img/principal/dead-space-2613-poster.jpg";
import AssasinsValhalla from "../assets/img/games-img/principal/Assassins-Creed-Valhalla.jpg";
import ForzaHorizon5 from "../assets/img/games-img/principal/Forza-Horizon-5-Premium-Edition.jpg";
import SpiderMan from "../assets/img/games-img/principal/Marvels-SpiderMan-Miles-Morales.jpg";
import AlanWake from "../assets/img/games-img/principal/Alan-Wake-Remastered.jpg";
import Mafia from "../assets/img/games-img/principal/Mafia-Edicion-Definitiva.jpg";
import CyberPunk from "../assets/img/games-img/principal/Cyberpunk-2077.jpg";

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
    stock: 10,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    imgUrl: CyberPunk,
    console: "XBOX",
    title: "CyberPunk 2077",
    category: "Accion | rol ",
    description:
      "Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad. Podrás personalizar las mejoras cibernéticas, las habilidades y el estilo de juego del personaje para dar forma a un mundo y a una historia que depende de tus decisiones.",
    price: 656.25,
    stock: 10,
  }
];

const CatchProductsOfMock = () => {
  return (
    // promesa que intentara devolvernos los productos de la base de datos , en este caso el mock
    new Promise((resolve) => {
      // el setTime emula la demora de la respuesta del Servidor
      setTimeout(() => {
        //el setTime tiene como return la respuesta con los productos del Json
        resolve(products);
        //mje que me avisa que la devolucion esta siendo exitosa
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
    //verifico que el id seleccionado que pase por parametro este en idSelected
    console.log("el id seleccionado es el " + idSelected);
    // la constante reqProd , recorre los productos y trae solo el producto.id que es igual al seleccionado
    const reqProd = products.find((item) => item.id === Number(idSelected));
    // muestro en consola el producto elegido ( completo )
    console.log(reqProd);
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

export { getProduct, getProductCategory };
export default CatchProductsOfMock;
