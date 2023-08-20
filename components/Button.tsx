import { tw } from "twind";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: any;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  const mergedClass = tw`
    w-10
    h-10
    bg-[#868686]
    rounded-md
    flex  
    justify-center
    items-center
    transition
    duration-300
    border-white border-opacity-5 border 
    bg-opacity-10
    text-white
    text-opacity-50

    ${String(className)}
  `;

  return (
    <button
      className={mergedClass}
      style={{
        backdropFilter: "blur(10px)",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
