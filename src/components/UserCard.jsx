const UserCard = ({ name, age, role, dept, image, bio }) => {
  return (
    <div className="bg-white min-h-[490px] shadow-lg rounded-2xl p-6 max-w-sm text-center mb-5 ">
      <img
        src={image}
        alt={name}
        className="w-44 h-44 rounded-full mx-auto border-4 border-blue-500 object-cover"
      />
      <h1 className="text-xl font-semibold mt-4 uppercase"> {name}</h1>
      {/* <h2 className="text-xl font-semibold mt-2">{age}</h2> */}
      <h2 className="text-xl mt-2">{dept}</h2>
      <h2 className="text-xl font-semibold mt-2 text-gray-700 0000">{role}</h2>
      <p className="mt-2">{bio}</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserCard;
