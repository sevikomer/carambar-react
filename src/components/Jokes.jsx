import { useState } from "react";

export default function CarambarJokes() {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      setError(null);
      const response = await fetch("https://carambar-backend-mqoj.onrender.com/api/blagues/random");
      if (!response.ok) {
        throw new Error("Aucune blague trouvée");
      }
      const data = await response.json();
      setJoke(data);
    } catch (err) {
      setError(err.message);
      setJoke(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow text-center p-4 text-dark">
      <img src="/carambar.webp" alt="background" className="absolute top-0 left-0 w-full h-full object-cover opacity-20" />
      <div className="z-10 p-12 bg-white shadow-lg rounded-xl border border-gray-300">
        <img src="/logo.png" alt="Logo" className="mx-auto mb-8 w-48 max-w-full" />
        <h1 className="text-4xl font-bold text-dark mb-8">Bienvenue chez Carambar & Co</h1>
        <p className="mb-8 text-lg text-gray-600">
          {joke ? <><strong className="text-dark">{joke.question}</strong><br />{joke.answer}</> : "Cliquez sur le bouton pour voir une blague !"}
        </p>
        <button 
        onClick={fetchJoke} 
        className="px-6 py-3 bg-pink text-white font-semibold rounded-lg shadow-md hover:bg-yellow hover:text-red transition duration-300"
        >
          Obtenir une blague
        </button>
        {error && <p className="mt-2 text-red font-semibold">{error}</p>}
      </div>
    </div>
  );
}