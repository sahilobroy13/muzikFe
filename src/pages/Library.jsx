import React from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Plus,
  Grid2X2,
  List,
  Bell,
  Settings2,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Playbar from "../components/Playbar";
import PlaylistCard from "../components/PlaylistCard";

const Library = () => {

  /* =====================================================
     ACTIVE CURATIONS
  ===================================================== */

  const playlists = [
    {
      title: "Liked Songs",
      variant: "liked",
      songs: "182",
    },

    {
      image: "/images/playlists/late-night-coding.jpg",
      title: "Late Night Coding",
      subtitle: "Curated by Sahil · 24 songs",
      description: "Downtempo & Glitch",
      duration: "1h 48m",
      badge: "96 kHz · FLAC",
    },

    {
      image: "/images/playlists/warm-analog.jpg",
      title: "Warm Analog Sessions",
      subtitle: "Curated by Sahil · 18 songs",
      description: "Jazz & Tape Reverb",
      duration: "1h 14m",
      badge: "◆ VINYL DUB",
    },

    {
      image: "/images/playlists/lofi-architecture.jpg",
      title: "Lo-Fi Architecture",
      subtitle: "Curated by Sahil · 32 songs",
      description: "Minimal & Textural",
      duration: "2h 06m",
      badge: "OFFLINE READY",
    },

    {
      image: "/images/playlists/nordic-ambient.jpg",
      title: "Nordic Ambient",
      subtitle: "Curated by Sahil · 16 songs",
      description: "Atmospheric",
      duration: "1h 21m",
      badge: "DOLBY ATMOS",
    },

    {
      image: "/images/playlists/night-drive.jpg",
      title: "Night Drive",
      subtitle: "Curated by Sahil · 27 songs",
      description: "Electronic · 135–160 BPM",
      duration: "1h 42m",
      badge: "135–160 BPM",
    },
  ];


  return (
    <div className="min-h-screen bg-[#0d0f13] text-white">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <Sidebar />


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main
        className="
          min-h-screen
          pb-[90px]
          lg:ml-[224px]
        "
      >

        {/* =================================================
            TOP HEADER
        ================================================= */}

        <header
          className="
            sticky
            top-0
            z-30
            flex
            h-[58px]
            items-center
            justify-between
            border-b
            border-[#1d2025]
            bg-[#0d0f13]/95
            px-5
            backdrop-blur-md
          "
        >

          {/* LEFT */}

          <div className="flex items-center gap-2">

            <button
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#181a1f]
                text-[#6f737b]
                transition
                hover:text-white
              "
            >
              <ChevronLeft size={13} />
            </button>


            <button
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#181a1f]
                text-[#6f737b]
                transition
                hover:text-white
              "
            >
              <ChevronRight size={13} />
            </button>


            {/* Search */}

            <div
              className="
                ml-2
                hidden
                h-7
                w-[235px]
                items-center
                gap-2
                rounded-[4px]
                border
                border-[#25282f]
                bg-[#15171c]
                px-2.5
                md:flex
              "
            >

              <Search
                size={11}
                className="text-[#686c74]"
              />

              <input
                type="text"
                placeholder="Search artists, songs, or podcasts..."
                className="
                  w-full
                  bg-transparent
                  text-[8px]
                  text-white
                  outline-none
                  placeholder:text-[#62666e]
                "
              />

            </div>

          </div>


          {/* RIGHT */}

          <div className="flex items-center gap-3">

            <div
              className="
                hidden
                items-center
                gap-2
                rounded-full
                bg-[#17191e]
                px-2.5
                py-1.5
                md:flex
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#e96c49]
                "
              />

              <span
                className="
                  text-[7px]
                  font-medium
                  tracking-wide
                  text-[#a0a3aa]
                "
              >
                LOSSLESS 24-BIT
              </span>

            </div>


            <button className="text-[#777b83] hover:text-white">
              <Bell size={13} />
            </button>


            <button className="text-[#777b83] hover:text-white">
              <Settings2 size={13} />
            </button>

          </div>

        </header>


        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        <div className="px-5 py-5">


          {/* =================================================
              PAGE HEADING
          ================================================= */}

          <div
            className="
              flex
              flex-col
              gap-4
              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            <div>

              <p
                className="
                  mb-1
                  text-[8px]
                  font-semibold
                  tracking-[0.9px]
                  text-[#e96c49]
                "
              >
                PERSONAL ARCHIVE
                <span className="mx-2 text-[#4f535a]">
                  ·
                </span>
                HI-RES AUDIO DB
              </p>


              <h1
                className="
                  text-4xl
                  font-semibold
                  tracking-[-1.8px]
                  text-[#f0f0f2]
                  md:text-[42px]
                "
              >
                Your Library
              </h1>


              <p
                className="
                  mt-1
                  text-[9px]
                  text-[#747880]
                "
              >
                14 Collections
                <span className="mx-2 text-[#42454b]">
                  ·
                </span>
                84 Saved Albums
                <span className="mx-2 text-[#42454b]">
                  ·
                </span>
                32 Artists
              </p>

            </div>


            {/* ACTIONS */}

            <div className="flex items-center gap-2">

              <button
                className="
                  flex
                  h-8
                  items-center
                  gap-2
                  rounded-[4px]
                  bg-[#1b1e24]
                  px-3
                  text-[9px]
                  font-semibold
                  text-[#d3d5d8]
                  transition
                  hover:bg-[#24272d]
                "
              >
                <Plus size={12} />

                New Playlist
              </button>


              <button
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-[4px]
                  bg-[#1b1e24]
                  text-[#858990]
                  hover:text-white
                "
              >
                <Grid2X2 size={13} />
              </button>


              <button
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-[4px]
                  bg-[#1b1e24]
                  text-[#858990]
                  hover:text-white
                "
              >
                <List size={13} />
              </button>

            </div>

          </div>


          {/* =================================================
              LIBRARY TABS
          ================================================= */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              border-b
              border-[#1d2025]
            "
          >

            <div className="flex items-center gap-1 overflow-x-auto">

              <LibraryTab
                label="Playlists"
                active
              />

              <LibraryTab label="Saved Albums" />

              <LibraryTab label="Artists" />

              <LibraryTab
                label="Downloaded"
                notification
              />

              <LibraryTab
                label="Collaborative"
              />

            </div>


            {/* SORT */}

            <button
              className="
                hidden
                shrink-0
                items-center
                gap-2
                px-2
                pb-2
                text-[8px]
                text-[#777b83]
                md:flex
              "
            >
              Sort by:

              <span
                className="
                  rounded
                  bg-[#1b1e24]
                  px-2
                  py-1.5
                  text-[#b5b7bb]
                "
              >
                Recently Added
                <span className="ml-1">
                  ▾
                </span>
              </span>

            </button>

          </div>


          {/* =================================================
              ACTIVE CURATIONS
          ================================================= */}

          <section className="mt-7">

            <div className="
              mb-3
              flex
              items-center
              justify-between
            ">

              <h2
                className="
                  text-sm
                  font-semibold
                  tracking-[-0.2px]
                  text-[#e3e4e7]
                "
              >
                Active Curations
              </h2>


              <span
                className="
                  text-[8px]
                  text-[#686c74]
                "
              >
                6 pinned shelves
              </span>

            </div>


            {/* CARDS */}

            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                xl:grid-cols-3
              "
            >

              {playlists.map((playlist) => (

                <PlaylistCard
                  key={playlist.title}
                  {...playlist}
                />

              ))}

            </div>

          </section>

        </div>

      </main>


      {/* =================================================
          PLAYBAR
      ================================================= */}

      <Playbar />

    </div>
  );
};


/* =====================================================
   LIBRARY TAB
===================================================== */

const LibraryTab = ({
  label,
  active = false,
  notification = false,
}) => {

  return (
    <button
      className={`
        relative
        flex
        h-9
        shrink-0
        items-center
        px-3
        text-[9px]
        font-semibold
        transition

        ${
          active
            ? "rounded-[4px] bg-[#e96c49] text-[#17191c]"
            : "text-[#8a8e96] hover:text-white"
        }
      `}
    >

      {label}

      {notification && (
        <span
          className="
            ml-1.5
            h-1
            w-1
            rounded-full
            bg-[#e96c49]
          "
        />
      )}

    </button>
  );
};


export default Library;