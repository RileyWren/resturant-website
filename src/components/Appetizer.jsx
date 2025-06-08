import appetizer1 from "../assets/appetizer1.jpeg"
import appetizer2 from "../assets/appetizer2.jpeg"
import appetizer3 from "../assets/appetizer3.jpeg"
import appetizer4 from "../assets/appetizer4.jpeg"
import appetizer5 from "../assets/appetizer5.jpeg"
import appetizer6 from "../assets/appetizer6.jpeg"
import rice from '../assets/ricebean.jpg'


const Appetizer = () => {
  return (
    <div className="flex justify-between m-7 gap-9">
    <div className="">
        <img className="h-296" src={rice} />
    </div>
    <div>
        <h3 className="text-white text-2xl m-10">APPETIZERS ----------------------</h3>
        <div className="flex text-white">
            <div className="">
            <img className="w-20 h-20 rounded-full" src={appetizer2} />
            </div>
            <div>
                <p>smoked salmon</p>
                <p>Basmati rice / mixed vegetables / saffron / whole spices</p>
            </div>
            <div>$13.49</div>
        </div>
        
    </div>
    </div>
  )
}

export default Appetizer