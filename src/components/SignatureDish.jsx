import coffee from '../assets/11.jpeg'
import noodles from '../assets/noodles2.jpeg'
import soupNoodles from '../assets/soupNoodles.jpeg'
import pizza from '../assets/10.jpeg'



const SignatureDish = () => {
  return (
    <div className='bg-neutral-950 text-white content-center items-center text-center h-screen w-screen'>
        <h2 className='text-3xl font-bold m-9'>Explore by Our Cuisines</h2>
   <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-6 p-6 bg-gray-100">
  <img className="rounded-xl w-full h-auto object-cover shadow-md hover:scale-105 transition-transform duration-300" src={coffee} alt="Coffee" />
  <img className="rounded-xl w-full h-auto object-cover shadow-md hover:scale-105 transition-transform duration-300" src={noodles} alt="Noodles" />
  <img className="rounded-xl w-full h-auto object-cover shadow-md hover:scale-105 transition-transform duration-300" src={pizza} alt="Pizza" />
</div>

    </div>
  )
}

export default SignatureDish