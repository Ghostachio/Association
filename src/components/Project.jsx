/* eslint-disable react/prop-types */
const Project = ({ data, index }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title self-center"> {index + 1} الهدف</h2>
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
