// import appetizer1 from "../assets/appetizer1.jpeg"
// import appetizer2 from "../assets/appetizer2.jpeg"
// import appetizer3 from "../assets/appetizer3.jpeg"
// import appetizer4 from "../assets/appetizer4.jpeg"
// import appetizer5 from "../assets/appetizer5.jpeg"
// import appetizer6 from "../assets/appetizer6.jpeg"
// import rice from '../assets/blackPlate.jpg'
// import meat from '../assets/meat.jpg'
// import noodles from '../assets/noodles2.jpeg'

// const Appetizer = () => {
//   return (
//     <div className="flex justify-between m-7 gap-9 h-screen">
//     <div className="">
//         <img className="h-136" src={rice} />
//     </div>
//     <div>
//         <h3 className="text-white text-2xl m-10">APPETIZERS</h3>
//         <div className="flex text-white m-10">
//             <div className="">
//             <img className="w-20 h-20 rounded-full" src={appetizer2} />
//             </div>
//             <div className="m-10">
//                 <p>smoked salmon</p>
//                 <p>Basmati rice / mixed vegetables / saffron / whole spices</p>
//             </div>
//             <div>$13.49</div>
//         </div>
//         <div className="flex text-white m-10">
//             <div className="">
//             <img className="w-20 h-20 rounded-full" src={meat} />
//             </div>
//             <div className="m-10">
//                 <p>Chicken Beef</p>
//                 <p>Basmati rice / mixed vegetables / saffron / whole spices</p>
//             </div>
//             <div>$13.49</div>
//         </div>
//                 <div className="flex text-white m-10">
//             <div className="">
//             <img className="w-20 h-20 rounded-full" src={noodles} />
//             </div>
//             <div className="m-10">
//                 <p>Chicken Beef</p>
//                 <p>Basmati rice / mixed vegetables / saffron / whole spices</p>
//             </div>
//             <div>$13.49</div>
//         </div>
        
//     </div>
//     </div>
//   )
// }

// export default Appetizer


import appetizer2 from "../assets/appetizer2.jpeg"
import rice from "../assets/blackPlate.jpg"
import meat from "../assets/meat.jpg"
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

const Appetizer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between m-7 gap-9 h-screen text-white">
      {/* Left image, only visible on md+ screens */}
      <div className="hidden md:block flex-shrink-0">
        <img
          className=" sm:max-h-[400px] md:max-h-[450px] object-cover rounded-xl shadow-lg"
          src={rice}
          alt="Main dish"
        />
      </div>

      {/* Appetizer list */}
      <div className="flex flex-col gap-8 overflow-y-auto">
        <h3 className="text-3xl font-semibold">APPETIZERS</h3>
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
    </div>
  )
}

export default Appetizer
