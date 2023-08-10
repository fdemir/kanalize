import skills from "../utils/skills.ts";
import friendlyUrl from "npm:seo-friendly-urls";

export default function Examples() {
  return (
    <div className="w-full flex flex-wrap">
      {skills.map((skill) => (
        <a
          className="w-1/3 inline-flex py-1 text-underline"
          href={`https://ossideaai.com/${friendlyUrl(skill)}-project-ideas`}
        >
          {skill} project ideas
        </a>
      ))}
    </div>
  );
}
