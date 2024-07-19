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
        <div className="p-8 rounded-lg max-w-2xl w-full">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to Kanban Task Management
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Easily organize your tasks and projects using our intuitive Kanban
              board. Manage tasks, track progress, and stay on top of your work
              with ease.
            </p>
            <button
              onClick={() => navigate(`/boards/${firstBoardId}`)}
              className="bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300 font-bold"
            >
              Get Started
            </button>
            <div className="flex flex-col items-center mt-14">
              <p className="font-bold text-xl">Made By Akshat Sharma</p>
              <ul className="flex flex-col gap-4 mt-7">
                {links.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        target="_blank"
                        className="bg-black w-32 h-10 rounded-lg flex justify-center items-center"
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
