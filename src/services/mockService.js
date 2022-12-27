const products =[{
    "id": 1,
    "imgUrl": "http://dummyimage.com/300x200.png/dddddd/000000",
    "text": "Help Desk Operator",
    "title": "Antitrust",
    "category": "Crime|Drama|Thriller",
    "price": 317.79
  }, {
    "id": 2,
    "imgUrl": "http://dummyimage.com/300x200.png/dddddd/000000",
    "text": "Associate Professor",
    "title": "Zen",
    "category": "Drama",
    "price": 618.42
  }, {
    "id": 3,
    "imgUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff",
    "text": "Senior Cost Accountant",
    "title": "Orca: The Killer Whale",
    "category": "Action|Drama|Horror|Thriller",
    "price": 994.55
  }, {
    "id": 4,
    "imgUrl": "http://dummyimage.com/300x200.png/dddddd/000000",
    "text": "Actuary",
    "title": "Pornographer",
    "category": "Drama",
    "price": 656.25
  }, {
    "id": 5,
    "imgUrl": "http://dummyimage.com/300x200.png/dddddd/000000",
    "text": "Staff Scientist",
    "title": "Very Potter Sequel, A",
    "category": "Comedy|Musical",
    "price": 259.09
  }, {
    "id": 6,
    "imgUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff",
    "text": "Recruiting Manager",
    "title": "Bitter Sweetheart",
    "category": "Comedy|Drama",
    "price": 938.16
  }, {
    "id": 7,
    "imgUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff",
    "text": "Payment Adjustment Coordinator",
    "title": "Charlie in The Chinese Cat",
    "category": "Comedy|Crime|Mystery|Thriller",
    "price": 469.98
  }, {
    "id": 8,
    "imgUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff",
    "text": "Automation Specialist IV",
    "title": "Cocaine Cowboys II: Hustlin'",
    "category": "Crime|Documentary",
    "price": 761.74
  },

  ]

const CatchProductsOfMock = ()=>{
    return (
        // promesa que intentara devolvernos los productos de la base de datos , en este caso el mock
       new Promise((resolve) => { 
        // el setTime emula la demora de la respuesta del Servidor
        setTimeout( () => {
            //el setTime tiene como return la respuesta con los productos del Json
            resolve(products)
            //mje que me avisa que la devolucion esta siendo exitosa
            console.log("%c Devolviendo los productos de forma exitosa ", "background-color: green");
        }, 2000 )
       })
        )
}

export default CatchProductsOfMock;