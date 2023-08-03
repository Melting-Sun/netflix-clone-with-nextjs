import React from "react";
import Image from "next/image";
import { PlayIcon, PlusCircleIcon } from "@heroicons/react/outline";

function ShowCase() {
  return (
    <div className="w-full h-[500px]">
      {/* Background Image */}
      <div className="z-0 w-full absolute">
        <Image src="/../public/red.jpg" width={2000} height={500} />
      </div>

      <div className="flex p-4 max-w-7xl z-10 items-center h-full">
        <div className="flex flex-col z-10">
          <h3 className="text-4xl font-semibold text-gray-200">Red Dead</h3>
          <p className="text-gray-300 max-w-xl my-2 text-md">
            Qui labore velit adipisicing est. Voluptate labore reprehenderit
            consequat qui occaecat. Velit ullamco consequat non consequat mollit
            mollit pariatur magna tempor proident. Mollit dolor cupidatat nisi
            do veniam dolor magna officia fugiat elit ea Lorem et nisi. Ullamco
            sint tempor minim deserunt veniam nulla laboris anim. Nisi labore
            proident ipsum officia occaecat non reprehenderit. Non eiusmod Lorem
            reprehenderit cillum ipsum tempor sint do aliquip occaecat do id
            aute.
          </p>

          <div className="flex m-4 gap-5 text-gray-400">
            <span className="tex-sm">2018</span> |
            <span className="tex-sm">40 Episodes</span> |
            <span className="tex-sm">21+</span>
          </div>

          <div className="flex gap-5 m-4 flex-wrap">
            <button className="p-2 px-3 rounded-full hover:bg-red-500 flex gap-2 bg-red-600 text-white text-sm font-semibold">
              <PlayIcon className="w-5" />
              Next Episode
            </button>

            <button className="p-2 px-3 rounded-full hover:bg-gray-800 flex gap-2 bg-gray-900 text-white text-sm font-semibold">
              <PlusCircleIcon className="w-5" />
              Add List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
