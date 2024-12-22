import staff from "../data";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <section className="mt-20 mb-20 pt-10 flex flex-col items-center">
      <h1
        className="text-5xl text-center font-bold mb-10 bg-white text-purple w-1/2 p-5 rounded-xl "
        id="team"
      >
        Notre Équipe
      </h1>
      <div className="flex gap-5">
        {staff.map((member, i) => (
          <TeamMember key={i} data={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
