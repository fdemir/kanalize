import skills from "../utils/skills.ts";

export default function Examples() {
  return (
    <div className="w-full flex flex-wrap">
      {skills.map((skill) => (
        <div className="w-1/2 inline-flex bg-green-600 h-32 px-4"></div>
      ))}
    </div>
  );
}
