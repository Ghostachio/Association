/* eslint-disable react/prop-types */
const TeamMember = ({ data }) => {
  return (
    <div className="card bg-base-100 shadow-xl w-1/3 pr-6 pl-6 bg-green">
      <div className="flex flex-col h-36 justify-center m-3">
        <h2 className="card-title self-center p-4 text-white">{data.name}</h2>
        <p className="self-center ">{data.job}</p>
      </div>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
      <p className="self-center p-10">{data.description}</p>
    </div>
  );
};

export default TeamMember;
