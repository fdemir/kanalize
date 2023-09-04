import { isMobile } from "https://deno.land/x/is_mobile@v1.0.0/mod.ts";

const shortcuts = {
  desktop: [
    {
      key: "i",
      description: "Info",
    },
    {
      key: "←",
      description: "Dislike",
    },
    {
      key: "→",
      description: "Like",
    },
  ],
  mobile: [
    {
      key: "i",
      description: "Info",
    },

    {
      key: "swipe left",
      description: "Dislike",
    },
    {
      key: "swipe right",
      description: "Like",
    },
  ],
};

export default function Shortcuts() {
  const isMobileDevice = isMobile(navigator.userAgent);
  const shortcut = isMobileDevice ? shortcuts.mobile : shortcuts.desktop;

  return (
    <div className="gap-1 flex text-opacity-50 w-full items-center justify-center select-none flex-wrap">
      {shortcut.map((item, index) => (
        <div className="bg-white bg-opacity-5 rounded-md p-2 gap-1  inline-flex text-sm">
          <kbd className="md:w-5 md:h-5 flex items-center justify-center bg-white bg-opacity-10 rounded-md text-xs md:text-base px-1 md:px-0">
            {item.key}
          </kbd>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
}
