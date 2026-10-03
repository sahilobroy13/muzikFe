import React from "react";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Search,
  Settings2,
  MoreHorizontal,
  Play,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Playbar from "../components/Playbar";
import SongCard from "../components/SongCard";

const Home = () => {

  /* ================= RECENTLY PLAYED ================= */

  const recentlyPlayed = [
    {
      image: "/images/songs/winged-victory.jpg",
      title: "A Winged Victory",
      subtitle: "Jóhannsson · Jóhann",
      duration: "4:12",
    },
    {
      image: "/images/songs/promise.jpg",
      title: "Promises",
      subtitle: "Floating Points · Pharoah",
      duration: "5:24",
    },
    {
      image: "/images/songs/in-colour.jpg",
      title: "In Colour",
      subtitle: "Jamie xx · Electronic",
      duration: "4:36",
    },
    {
      image: "/images/songs/immunity.jpg",
      title: "Immunity",
      subtitle: "Jon Hopkins · Ambient",
      duration: "6:18",
    },
    {
      image: "/images/songs/substrata.jpg",
      title: "Substrata",
      subtitle: "Biosphere · Ambient",
      duration: "5:02",
    },
  ];


  /* ================= MADE FOR YOU ================= */

  const madeForYou = [
    {
      image: "/images/songs/daily-flow.jpg",
      title: "Daily Flow 01",
      subtitle: "Nils Frahm, Ólafur Arnalds...",
      duration: "52 min",
    },
    {
      image: "/images/songs/deep-work.jpg",
      title: "Deep Work Session",
      subtitle: "Max Richter, Nils Frahm...",
      duration: "58 min",
    },
    {
      image: "/images/songs/acoustic-morning.jpg",
      title: "Acoustic Morning",
      subtitle: "Nick Drake, José González...",
      duration: "45 min",
    },
    {
      image: "/images/songs/nighttime-beats.jpg",
      title: "Nighttime Beats",
      subtitle: "Lo-fi, jazz, ambient...",
      duration: "60 min",
    },
  ];


  /* ================= QUICK PICKS ================= */

  const quickPicks = [
    {
      image: "/images/songs/late-night.jpg",
      title: "Late Night Coding",
      subtitle: "Focused electronic & ambient...",
    },
    {
      image: "/images/songs/warm-analog.jpg",
      title: "Warm Analog Sessions",
      subtitle: "70s records & vintage sounds...",
    },
    {
      image: "/images/songs/liked.jpg",
      title: "Liked Songs",
      subtitle: "Your personal collection",
    },
    {
      image: "/images/songs/ambient.jpg",
      title: "Ambient Works 2024",
      subtitle: "Atmospheric drones & textures",
    },
    {
      image: "/images/songs/quiet-piano.jpg",
      title: "Quiet Piano",
      subtitle: "Piano textures, minimal...",
    },
    {
      image: "/images/songs/electronic-focus.jpg",
      title: "Electronic Focus",
      subtitle: "Polyrhythms & deep...",
    },
  ];


  return (
    <div className="min-h-screen bg-[#0d0f13] text-white">

      {/* ================= SIDEBAR ================= */}

      <Sidebar />


      {/* ================= MAIN ================= */}

      <main
        className="
          min-h-screen
          pb-[90px]
          lg:ml-[224px]
        "
      >

        {/* ================= HEADER ================= */}

        <header className="
          sticky
          top-0
          z-30
          flex
          h-[58px]
          items-center
          justify-between
          border-b
          border-[#1c1f24]
          bg-[#0d0f13]/95
          px-5
          backdrop-blur-md
        ">

          {/* LEFT */}

          <div className="flex items-center gap-2">

            <button className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-[#181a1f]
              text-[#737780]
              hover:text-white
            ">
              <ChevronLeft size={13} />
            </button>

            <button className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-[#181a1f]
              text-[#737780]
              hover:text-white
            ">
              <ChevronRight size={13} />
            </button>


            <div className="
              ml-2
              hidden
              h-7
              w-[140px]
              items-center
              gap-2
              rounded-[3px]
              bg-[#15171c]
              px-2.5
              md:flex
            ">

              <Search
                size={11}
                className="text-[#656971]"
              />

              <input
                type="text"
                placeholder="Search artists, songs, podcasts..."
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

            <div className="
              hidden
              items-center
              gap-2
              rounded
              bg-[#17191e]
              px-2
              py-1.5
              md:flex
            ">

              <span className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#e96c49]
              " />

              <span className="
                text-[7px]
                uppercase
                tracking-wide
                text-[#92959c]
              ">
                Lossless 24-bit
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


        {/* ================= CONTENT ================= */}

        <div className="px-5 py-4">


          {/* ================= GREETING ================= */}

          <div className="mb-4 flex items-end justify-between">

            <div>

              <p className="
                mb-1
                text-[8px]
                font-medium
                uppercase
                tracking-[0.8px]
                text-[#e96c49]
              ">
                ◉ DUSK LISTENING · HIGH FIDELITY STREAM
              </p>

              <h1 className="
                text-3xl
                font-semibold
                tracking-[-1.3px]
                text-[#f0f0f2]
              ">
                Good evening,
                <span className="text-[#e96c49]">
                  {" "}Sahil
                </span>
              </h1>

              <p className="
                mt-1
                text-[8px]
                text-[#6d7179]
              ">
                48kHz / 24-bit FLAC
              </p>

            </div>


            <div className="
              hidden
              items-center
              gap-3
              rounded
              border
              border-[#24272d]
              bg-[#15171c]
              px-3
              py-2
              md:flex
            ">

              <div>

                <p className="
                  text-[7px]
                  text-[#6d7179]
                ">
                  Active DAC Terminal
                </p>

                <p className="
                  text-[9px]
                  font-semibold
                  text-[#d7d8dc]
                ">
                  Studio Monitor 2.4
                </p>

              </div>

              <span className="
                h-2
                w-2
                rounded-full
                bg-[#e96c49]
              " />

            </div>

          </div>


          {/* ================= QUICK PICKS ================= */}

          <section className="mb-6">

            <div className="
              grid
              grid-cols-2
              gap-2
              md:grid-cols-3
            ">

              {quickPicks.map((item) => (

                <button
                  key={item.title}
                  className="
                    group
                    flex
                    h-[43px]
                    items-center
                    gap-2
                    rounded-[3px]
                    border
                    border-[#202329]
                    bg-[#16181d]
                    px-2
                    text-left
                    transition
                    hover:bg-[#202329]
                  "
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-7
                      w-7
                      rounded-[2px]
                      object-cover
                    "
                  />

                  <div className="min-w-0">

                    <p className="
                      truncate
                      text-[8px]
                      font-semibold
                      text-[#dedfe2]
                    ">
                      {item.title}
                    </p>

                    <p className="
                      mt-0.5
                      truncate
                      text-[7px]
                      text-[#666a72]
                    ">
                      {item.subtitle}
                    </p>

                  </div>

                </button>

              ))}

            </div>

          </section>


          {/* ================= RECENTLY PLAYED ================= */}

          <SectionHeader
            title="Recently Played"
            subtitle="Archived sessions & continuous playback"
          />

          <div className="
            mb-7
            grid
            grid-cols-2
            gap-2
            sm:grid-cols-3
            md:grid-cols-4
            xl:grid-cols-5
          ">

            {recentlyPlayed.map((song) => (

              <SongCard
                key={song.title}
                image={song.image}
                title={song.title}
                subtitle={song.subtitle}
                duration={song.duration}
              />

            ))}

          </div>


          {/* ================= MADE FOR YOU ================= */}

          <SectionHeader
            title="Made for You"
            subtitle="Algorithmic mixes generated from your listening patterns"
          />

          <div className="
            mb-7
            grid
            grid-cols-2
            gap-2
            md:grid-cols-4
          ">

            {madeForYou.map((song) => (

              <SongCard
                key={song.title}
                image={song.image}
                title={song.title}
                subtitle={song.subtitle}
                duration={song.duration}
              />

            ))}

          </div>


          {/* ================= FRESH RELEASES ================= */}

          <SectionHeader
            title="Fresh Releases for You"
            subtitle="Latest curated additions to your listening library"
          />


          <div className="
            overflow-hidden
            rounded-[3px]
            border
            border-[#202329]
            bg-[#111317]
          ">

            {/* TABLE HEADER */}

            <div className="
              grid
              grid-cols-[35px_1.5fr_1fr_100px_50px]
              border-b
              border-[#202329]
              px-3
              py-2
              text-[7px]
              uppercase
              tracking-wide
              text-[#5f636b]
            ">

              <span>#</span>
              <span>Track / Artist</span>
              <span>Format & Release</span>
              <span>Bitrate / Audio</span>
              <span>Time</span>

            </div>


            {/* TRACKS */}

            <ReleaseRow
              number="01"
              image="/images/songs/solaria.jpg"
              title="Solaria Drift"
              artist="Tycho"
              format="New Single"
              release="Ghostly International"
              bitrate="FLAC 24-bit"
              duration="4:18"
            />

            <ReleaseRow
              number="02"
              image="/images/songs/weightless.jpg"
              title="Weightless Echo"
              artist="Jon Hopkins"
              format="EP Release"
              release="Ritual Music"
              bitrate="FLAC 24-bit"
              duration="5:42"
            />

            <ReleaseRow
              number="03"
              image="/images/songs/breathe.jpg"
              title="Breathe Deep"
              artist="Floating Points"
              format="New Single"
              release="Ninja Tune"
              bitrate="FLAC 24-bit"
              duration="5:03"
            />

            <ReleaseRow
              number="04"
              image="/images/songs/ode.jpg"
              title="Ode to Silence"
              artist="Lana Paris"
              format="Album Cut"
              release="Gondwana Records"
              bitrate="FLAC 24-bit"
              duration="7:11"
            />

          </div>

        </div>

      </main>


      {/* ================= PLAYBAR ================= */}

      <Playbar />

    </div>
  );
};


/* =====================================================
   SECTION HEADER
===================================================== */

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="
      mb-2.5
      flex
      items-end
      justify-between
    ">

      <div>

        <div className="flex items-center gap-1.5">

          <span className="
            h-1
            w-1
            rounded-full
            bg-[#e96c49]
          " />

          <h2 className="
            text-sm
            font-semibold
            tracking-[-0.3px]
            text-[#e5e6e9]
          ">
            {title}
          </h2>

        </div>

        {subtitle && (
          <p className="
            mt-0.5
            text-[7px]
            text-[#5f636b]
          ">
            {subtitle}
          </p>
        )}

      </div>


      <button className="
        text-[7px]
        font-medium
        text-[#e96c49]
        hover:text-[#f18a6e]
      ">
        See all →
      </button>

    </div>
  );
};


/* =====================================================
   RELEASE ROW
===================================================== */

const ReleaseRow = ({
  number,
  image,
  title,
  artist,
  format,
  release,
  bitrate,
  duration,
}) => {
  return (
    <div className="
      group
      grid
      grid-cols-[35px_1.5fr_1fr_100px_50px]
      items-center
      border-b
      border-[#1d2025]
      px-3
      py-2
      transition
      last:border-b-0
      hover:bg-[#181a1f]
    ">

      <span className="
        text-[7px]
        text-[#555960]
      ">
        {number}
      </span>


      <div className="flex min-w-0 items-center gap-2">

        <img
          src={image}
          alt={title}
          className="
            h-6
            w-6
            shrink-0
            rounded-[2px]
            object-cover
          "
        />

        <div className="min-w-0">

          <p className="
            truncate
            text-[8px]
            font-semibold
            text-[#dfe0e3]
          ">
            {title}
          </p>

          <p className="
            truncate
            text-[7px]
            text-[#62666e]
          ">
            {artist}
          </p>

        </div>

      </div>


      <div className="min-w-0">

        <span className="
          mr-1
          rounded
          bg-[#34231f]
          px-1
          py-0.5
          text-[6px]
          text-[#e96c49]
        ">
          {format}
        </span>

        <span className="
          truncate
          text-[7px]
          text-[#676b73]
        ">
          {release}
        </span>

      </div>


      <span className="
        text-[7px]
        text-[#686c74]
      ">
        {bitrate}
      </span>


      <span className="
        text-[7px]
        text-[#686c74]
      ">
        {duration}
      </span>

    </div>
  );
};


export default Home;