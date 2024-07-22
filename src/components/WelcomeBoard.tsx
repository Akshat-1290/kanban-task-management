import { Link, useNavigate } from "react-router-dom";
export const WelcomeBoard = ({ firstBoardId }: { firstBoardId: string }) => {
  const links = [
    {
      name: "Github",
      path: "https://github.com/Akshat-1290",
      svg: "/github.svg",
    },
    {
      name: "Linked In",
      path: "https://www.linkedin.com/in/akshatsharmadeveloper/",
      svg: "/linkedin.svg",
    },
    {
      name: "Fiverr",
      path: "https://www.fiverr.com/s/DB5YLLy",
      svg: "/fiverr.svg",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <section id="welcomeboard" className="flex justify-center">
        <div className="w-full max-w-2xl rounded-lg p-8">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              Welcome to Kanban Task Management
            </h1>
            <p className="mb-6 text-lg text-gray-600">
              Easily organize your tasks and projects using our intuitive Kanban
              board. Manage tasks, track progress, and stay on top of your work
              with ease.
            </p>
            <button
              onClick={() => navigate(`/boards/${firstBoardId}`)}
              className="rounded-lg bg-purple-500 px-6 py-3 font-bold text-white transition duration-300 hover:bg-purple-700"
            >
              Get Started
            </button>
            <div className="mt-14 flex flex-col items-center">
              <p className="text-xl font-bold">Made By Akshat Sharma</p>
              <ul className="mt-7 flex flex-col gap-4">
                {links.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        target="_blank"
                        className="flex h-10 w-32 items-center justify-center rounded-lg bg-black"
                        rel="noopener noreferrer"
                      >
                        <img src={link.svg} alt={link.name} className="h-6" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
