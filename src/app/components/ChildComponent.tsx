import React from 'react';

const ChildComponent = (props: any) => {
  console.log(props);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-xl shadow-2xl text-white max-w-xl w-full text-center">
        <h1 className="text-6xl font-extrabold mb-6">{props.name}</h1>
        <h2 className="text-3xl font-semibold mb-4">Profession: <span className="text-yellow-300">{props.profession}</span></h2>
        <h2 className="text-3xl font-semibold mb-4">Age: <span className="text-yellow-300">{props.age}</span></h2>
        <h2 className="text-3xl font-semibold mb-4">Favorite Color: <span className="text-yellow-300">{props.favColor}</span></h2>
        <h2 className="text-3xl font-semibold">Favorite Dish: <span className="text-yellow-300">{props.favDish}</span></h2>
      </div>
    </div>
  );
};

export default ChildComponent;
