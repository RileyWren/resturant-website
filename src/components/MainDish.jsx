
import appetizer2 from "../assets/appetizer2.jpeg"
import rice from "../assets/blackPlate.jpg"
import meat from "../assets/meat.jpg"
import meat2 from "../assets/meat2.jpg"

import noodles from "../assets/noodles2.jpeg"

const appetizers = [
  {
    name: "Smoked Salmon",
    description: "Basmati rice / mixed vegetables / saffron / whole spices",
    image: appetizer2,
    price: "$13.49"
  },
  {
    name: "Chicken Beef",
    description: "Basmati rice / mixed vegetables / saffron / whole spices",
    image: meat,
    price: "$13.49"
  },
  {
    name: "Spicy Noodles",
    description: "Basmati rice / mixed vegetables / saffron / whole spices",
    image: noodles,
    price: "$13.49"
  }
]

const MainDish = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between m-7 gap-9  text-white">
      {/* Left image, only visible on md+ screens */}
      {/* <div className="hidden md:block flex-shrink-0">
        <img
          className=" sm:max-h-[400px] md:max-h-[450px] object-cover rounded-xl shadow-lg"
          src={rice}
          alt="Main dish"
        />
      </div> */}

      {/* Appetizer list */}
      <div className="flex flex-col gap-8 overflow-y-auto">
        <h3 className="text-3xl font-semibold">Main Dish</h3>
        {appetizers.map((item, index) => (
          <div key={index} className="flex items-start gap-5">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
            <div className="text-sm font-bold">{item.price}</div>
          </div>
        ))}
      </div>
       <div className="hidden md:block flex-shrink-0">
        <img
          className=" sm:max-h-[450px] md:max-h-[450px] object-cover rounded-xl shadow-lg"
          src={meat2}
          alt="Main dish"
        />
      </div>
    </div>
  )
}

export default MainDish
