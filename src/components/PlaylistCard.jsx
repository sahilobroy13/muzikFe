import React from "react";
import { Heart, Play, MoreHorizontal } from "lucide-react";

const PlaylistCard = ({
  image,
  title,
  subtitle,
  description,
  songs,
  duration,
  badge,
  variant = "image",
}) => {
  /* ================= LIKED SONGS CARD ================= */

  if (variant === "liked") {
    return (
      <div
        className="
          group
          relative
          flex
          h-[298px]
          flex-col
          overflow-hidden
          rounded-[5px]
          border
          border-[#292c32]
          bg-gradient-to-br
          from-[#7e2e19]
          via-[#352321]
          to-[#202126]
          p-4
          transition
          hover:border-[#3a3d43]
        "
      >
        {/* Auto Sync */}

        <div className="absolute right-3 top-3">
          <span
            className="
              rounded-full
              bg-[#242326]/80
              px-2
              py-1
              text-[7px]
              font-semibold
              tracking-wide
              text-[#d5c8c4]
            "
          >
            ● AUTO-SYNC
          </span>
        </div>

        {/* Heart */}

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-[6px]
            bg-[#ffb09a]
            text-[#742b1c]
          "
        >
          <Heart
            size={20}
            fill="currentColor"
          />
        </div>

        {/* Content */}

        <div className="mt-4">

          <p
            className="
              text-[8px]
              font-semibold
              tracking-[0.8px]
              text-[#e99a84]
            "
          >
            AUTOMATED MIX
          </p>

          <h3
            className="
              mt-1
              text-lg
              font-semibold
              tracking-[-0.5px]
              text-[#f1eeee]
            "
          >
            {title}
          </h3>

        </div>

        {/* Bottom */}

        <div className="mt-auto flex items-end justify-between">

          <div>

            <p className="
              text-[9px]
              font-medium
              text-[#ded5d2]
            ">
              {songs} Liked tracks
            </p>

            <p className="
              mt-1
              text-[7px]
              text-[#a49b98]
            ">
              Updated 24 mins ago
            </p>

          </div>

          <button
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-[6px]
              bg-[#f0a28c]
              text-[#542017]
              opacity-90
              transition
              hover:scale-105
              hover:opacity-100
            "
          >
            <Play
              size={13}
              fill="currentColor"
            />
          </button>

        </div>
      </div>
    );
  }


  /* ================= NORMAL PLAYLIST CARD ================= */

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[5px]
        border
        border-[#292c32]
        bg-[#191b20]
        p-2.5
        transition
        hover:border-[#383b42]
        hover:bg-[#1d2025]
      "
    >

      {/* Image */}

      <div
        className="
          relative
          aspect-[1.08]
          overflow-hidden
          rounded-[3px]
        "
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
            group-hover:scale-[1.025]
          "
        />


        {/* Badge */}

        {badge && (
          <span
            className="
              absolute
              left-2
              top-2
              rounded-[2px]
              bg-[#191b20]/85
              px-1.5
              py-1
              text-[7px]
              font-semibold
              tracking-wide
              text-[#d7d7da]
            "
          >
            {badge}
          </span>
        )}


        {/* Play */}

        <button
          className="
            absolute
            bottom-2
            right-2
            flex
            h-8
            w-8
            translate-y-2
            items-center
            justify-center
            rounded-[6px]
            bg-[#ef9278]
            text-[#321710]
            opacity-0
            shadow-lg
            transition
            duration-200
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <Play
            size={13}
            fill="currentColor"
          />
        </button>

      </div>


      {/* Information */}

      <div className="px-0.5 pt-2">

        <h3
          className="
            truncate
            text-[11px]
            font-semibold
            text-[#e4e5e8]
          "
        >
          {title}
        </h3>


        <p
          className="
            mt-0.5
            truncate
            text-[8px]
            text-[#777b83]
          "
        >
          {subtitle}
        </p>


        <div className="
          mt-3
          flex
          items-center
          justify-between
        ">

          <span
            className="
              truncate
              rounded-[2px]
              bg-[#24272d]
              px-1.5
              py-1
              text-[7px]
              text-[#aeb1b6]
            "
          >
            {description}
          </span>

          <span className="
            shrink-0
            text-[7px]
            text-[#6c7078]
          ">
            {duration}
          </span>

        </div>

      </div>

    </div>
  );
};

export default PlaylistCard;