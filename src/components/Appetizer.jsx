import appetizer1 from "../assets/appetizer1.jpeg"
import appetizer2 from "../assets/appetizer2.jpeg"
import appetizer3 from "../assets/appetizer3.jpeg"
import appetizer4 from "../assets/appetizer4.jpeg"
import appetizer5 from "../assets/appetizer5.jpeg"
import appetizer6 from "../assets/appetizer6.jpeg"


const Appetizer = () => {
  return (
    <>
    <div className="flex flex-col justify-between">
        <img src={appetizer1} />
    </div>
    <div>
        <h3>APPETIZERS ----------------------</h3>
        <div>
            <div className="">
            <img src={appetizer2} />
            </div>
            <div>
                <p>smoked salmon</p>
                <p>Basmati rice / mixed vegetables / saffron / whole spices</p>
            </div>
            <div>$13.49</div>
        </div>
        
    </div>
    </>
  )
}

export default Appetizer