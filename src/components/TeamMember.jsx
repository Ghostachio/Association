/* eslint-disable react/prop-types */
const TeamMember = ({ data }) => {
  return (
    <div className="card shadow-xl w-10/12 pr-6 pl-6 bg-green md:w-1/3">
      <div className="flex flex-col h-36 justify-center m-3">
        <h2 className="text-center text-3xl font-bold p-4 text-white">
          {data.name}
        </h2>
        <p className="text-center">{data.job}</p>
      </div>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
      <p className="text-center p-8">{data.description}</p>
    </div>
  );
};

export default TeamMember;
