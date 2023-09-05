import { fields, genIdea, idea, setIdea } from "../utils/idea.ts";

const field_list = [
  {
    name: "Frontend",
    skills: [
      "frontend",
    ],
  },
  {
    name: "Backend",
    skills: [
      "backend",
    ],
  },
  {
    name: "Fullstack",
    skills: [
      "frontend",
      "backend",
    ],
  },
  {
    name: "Mobile",
    skills: [
      "mobile",
      "ios",
      "android",
    ],
  },
  {
    name: "Desktop",
    skills: [
      "desktop",
      "windows",
      "macos",
      "linux",
    ],
  },
  {
    name: "Game",
    skills: [
      "game",
    ],
  },
];

export default function Templates() {
  const handleTemplateClick = async (skills: string[]) => {
    fields.value = skills;
    const data = await genIdea(skills);
    setIdea(data.result);
  };

  return (
    <div className="flex w-full flex-wrap">
      {field_list.map((item) => {
        return (
          <div
            className="md:w-1/3 sm:1/2 w-full p-2"
            role="button"
            onClick={() => handleTemplateClick(item.skills)}
          >
            <div className="bg-white bg-opacity-10 rounded-md p-4">
              <span className="text-xl text-white">{item.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
