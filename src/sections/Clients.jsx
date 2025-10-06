<<<<<<< HEAD
// src/components/Clients.jsx
import { clientReviews } from '../constants/index';
=======
import { clientReviews } from '../constants/index.js';
>>>>>>> d1852391ab26cd45ea20ed1dccab6812d5d11ce7

const Clients = () => {
  return (
    <section className="c-space my-20">
<<<<<<< HEAD
      <h3 className="head-text text-white">My Projects</h3>

      <div className="client-container grid md:grid-cols-2 gap-6">
        {clientReviews.map((item) => (
          <a
            key={`project-${item.id}`}
            href={item.link} // Click pe project link open
            target="_blank"
            rel="noopener noreferrer"
            className="client-review bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-white text-sm mb-2">{item.position}</p>
                <p className="text-white text-sm">{item.review}</p>
              </div>
            </div>
          </a>
=======
      <h3 className="head-text">Hear from My Clients</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
>>>>>>> d1852391ab26cd45ea20ed1dccab6812d5d11ce7
        ))}
      </div>
    </section>
  );
};

export default Clients;
