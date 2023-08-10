import skills from "../utils/skills.ts";
import friendlyUrl from "https://esm.sh/seo-friendly-urls@1.0.0";

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
