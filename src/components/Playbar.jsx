import React from "react";
import {
  Heart,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat2,
  Volume2,
  ListMusic,
  Maximize2,
  Pause,
} from "lucide-react";

const Playbar = () => {
  return (
    <footer
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        h-[72px]
        border-t
        border-[#292c32]
        bg-[#15171c]/95
        backdrop-blur-md
      "
    >

      <div className="flex h-full items-center px-4">

        {/* ================= CURRENT SONG ================= */}

        <div className="flex w-[25%] min-w-0 items-center gap-3">

          <img
            src="/images/songs/nightfall.jpg"
            alt="Nightfall Reverie"
            className="
              h-11
              w-11
              shrink-0
              rounded-[3px]
              object-cover
            "
          />

          <div className="min-w-0">

            <p className="
              truncate
              text-[10px]
              font-semibold
              text-white
            ">
              Nightfall Reverie
            </p>

            <p className="
              truncate
              text-[8px]
              text-[#7e828a]
            ">
              Marissa & Oliver
            </p>

          </div>

          <button className="ml-2 text-[#777b83] hover:text-[#e96c49]">
            <Heart size={13} />
          </button>

        </div>


        {/* ================= PLAYER ================= */}

        <div className="flex flex-1 flex-col items-center">

          {/* Controls */}

          <div className="flex items-center gap-5">

            <button className="text-[#747880] hover:text-white">
              <Shuffle size={12} />
            </button>

            <button className="text-[#aeb1b7] hover:text-white">
              <SkipBack size={15} fill="currentColor" />
            </button>

            <button
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#ed704d]
                text-[#141519]
              "
            >
              <Pause size={13} fill="currentColor" />
            </button>

            <button className="text-[#aeb1b7] hover:text-white">
              <SkipForward size={15} fill="currentColor" />
            </button>

            <button className="text-[#747880] hover:text-white">
              <Repeat2 size={12} />
            </button>

          </div>


          {/* Progress */}

          <div className="mt-2 flex w-[80%] items-center gap-2">

            <span className="text-[7px] text-[#666a72]">
              2:34
            </span>

            <div className="relative h-[3px] flex-1 rounded-full bg-[#35383e]">

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[48%]
                  rounded-full
                  bg-[#ed704d]
                "
              />

            </div>

            <span className="text-[7px] text-[#666a72]">
              5:12
            </span>

          </div>

        </div>


        {/* ================= RIGHT CONTROLS ================= */}

        <div className="
          flex
          w-[25%]
          items-center
          justify-end
          gap-4
        ">

          <button className="text-[#777b83] hover:text-white">
            <ListMusic size={14} />
          </button>

          <button className="text-[#777b83] hover:text-white">
            <Volume2 size={14} />
          </button>

          <div className="w-16">

            <div className="h-[3px] rounded-full bg-[#34373d]">

              <div className="h-full w-[65%] rounded-full bg-[#a8abb0]" />

            </div>

          </div>

          <button className="text-[#777b83] hover:text-white">
            <Maximize2 size={13} />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Playbar;