import Header from "@/components/Header";
import ShowCase from "@/components/ShowCase";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen bg-black">
        {/* Header */}
        <div className="w-full sticky top-0">
          <Header />
        </div>

        {/* Main content */}
        <div className="w-full mx-auto">
          {/* Show Case */}
          <div className="Showcase">
              <ShowCase/>
          </div>
         

          <div className="w-full z-30">
            {/* Movies Poster */}
            <h2 className="text-lg text-gray-400">Famous On Netflix</h2>
          </div>

        </div>
      </div>
    </>
  );
}
