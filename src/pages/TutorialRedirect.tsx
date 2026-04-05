import { useEffect } from "react";

const TutorialRedirect = () => {
  useEffect(() => {
    // Redirect current tab to the YouTube video
    window.location.replace("https://youtu.be/z-yvOxU_GNQ");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-neutral-950 text-white">
      <div className="text-center animate-pulse">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Redirecting to Tutorial...
        </h1>
        <p className="text-neutral-400">
          If you are not redirected automatically,{" "}
          <a
            href="https://youtu.be/z-yvOxU_GNQ"
            className="text-blue-500 hover:underline font-medium"
          >
            click here
          </a>.
        </p>
      </div>
    </div>
  );
};

export default TutorialRedirect;
