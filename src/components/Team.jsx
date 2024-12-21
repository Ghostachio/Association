import staff from "../data";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <section className="mt-20 mb-20">
      <h1 className="text-5xl text-center font-bold mb-5"> أعضاء الجمعية</h1>
      <div className="flex gap-5">
        {staff.map((member, i) => (
          <TeamMember key={i} data={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
