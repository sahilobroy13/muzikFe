import React from "react";
import { Play, MoreHorizontal } from "lucide-react";

const SongCard = ({
  image,
  title,
  subtitle,
  duration,
  compact = false,
}) => {
  return (
    <div
      className={`
        group
        relative
        rounded-[4px]
        border
        border-[#24272d]
        bg-[#181a1f]
        transition
        hover:bg-[#202329]

        ${compact ? "p-2" : "p-2.5"}
      `}
    >

      {/* ================= IMAGE ================= */}

      <div
        className={`
          relative
          overflow-hidden
          rounded-[3px]
          ${compact ? "h-24" : "aspect-square"}
        `}
      >

        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
            group-hover:scale-105
          "
        />


        {/* PLAY BUTTON */}

        <button
          className="
            absolute
            bottom-2
            right-2
            flex
            h-7
            w-7
            translate-y-2
            items-center
            justify-center
            rounded-full
            bg-[#ed704d]
            text-[#17191c]
            opacity-0
            shadow-lg
            transition
            duration-200
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <Play
            size={12}
            fill="currentColor"
          />
        </button>

      </div>


      {/* ================= INFO ================= */}

      <div className="mt-2">

        <div className="flex items-start justify-between gap-2">

          <div className="min-w-0">

            <h3 className="
              truncate
              text-[10px]
              font-semibold
              text-[#e6e7e9]
            ">
              {title}
            </h3>

            <p className="
              mt-0.5
              truncate
              text-[8px]
              text-[#747880]
            ">
              {subtitle}
            </p>

          </div>


          {duration && (
            <span className="
              shrink-0
              text-[7px]
              text-[#696d75]
            ">
              {duration}
            </span>
          )}

        </div>


        <div className="
          mt-2
          flex
          items-center
          justify-between
        ">

          <span className="
            text-[7px]
            text-[#666a72]
          ">
            Lossless
          </span>

          <button className="
            text-[#666a72]
            opacity-0
            transition
            group-hover:opacity-100
            hover:text-white
          ">
            <MoreHorizontal size={12} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default SongCard;