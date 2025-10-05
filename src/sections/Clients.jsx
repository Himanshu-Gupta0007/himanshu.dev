// src/components/Clients.jsx
import { clientReviews } from '../constants/index';

const Clients = () => {
  return (
    <section className="c-space my-20">
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
        ))}
      </div>
    </section>
  );
};

export default Clients;
