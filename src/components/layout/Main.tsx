import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};
function Main({ children }: MainProps) {
  return (
    <main className="bg-zinc-100">
      {/* <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-2"> */}
      {children}
      {/* </div> */}
    </main>
  );
}
export default Main;
