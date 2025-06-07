import coffee from '../assets/11.jpeg'
import noodles from '../assets/noodles2.jpeg'
import soupNoodles from '../assets/soupNoodles.jpeg'


const SignatureDish = () => {
  return (
    <div>
        <h2>Explore by Our Cuisines</h2>
        <div>
            <img src={coffee} />
            <img src={noodles} />
            <img src={soupNoodles} />

        </div>
    </div>
  )
}

export default SignatureDish