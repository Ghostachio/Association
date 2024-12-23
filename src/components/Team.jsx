import staff from "../data";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <section className="mt-20 mb-20 flex flex-col items-center md:pt-10">
      <h1
        className="text-4xl text-center font-bold mb-10 bg-white text-purple w-4/6 p-5 rounded-xl md:w-1/2 md:text-5xl"
        id="team"
      >
        Notre Équipe
      </h1>
      <div className="flex gap-3 flex-col md:flex-none items-center md:flex-row">
        {staff.map((member, i) => (
          <TeamMember key={i} data={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
