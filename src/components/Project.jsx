/* eslint-disable react/prop-types */
const Project = ({ data, index }) => {
  return (
    <div className="card  w-96 shadow-xl bg-green">
      <div className="card-body ">
        <h2 className="card-title self-center text-white">
          Objectif {index + 1}
        </h2>
        <p className="text-center">{data}</p>
      </div>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default Project;
