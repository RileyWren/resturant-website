// GuestReviews.jsx
import React from "react";

const reviews = [
  {
    name: "Cody Fisher",
    quote: "Truly one of the best dining experiences I’ve had!",
    desc: "A place that combines great food with an inviting ambiance. The dishes were absolutely delicious, with flavors that were both bold and comforting.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Ralph Edwards",
    quote: "Unforgettable flavors, exceptional service.",
    desc: "The staff was friendly, attentive, and made me feel right at home. I highly recommend this to anyone looking for a truly delightful dining experience.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const GuestReviews = () => {
  return (
    <section className="bg-[#1a1a1a] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Reviews from Our Guests</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black">
              →
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="flex gap-6 items-start">
              <img src={r.img} alt={r.name} className="w-28 h-28 object-cover rounded" />
              <div>
                <div className="text-3xl mb-2 text-gray-400">“</div>
                <h3 className="font-semibold text-lg">{r.quote}</h3>
                <p className="text-gray-400 mt-2">{r.desc}</p>
                <p className="mt-4 font-medium">{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;
