import React from "react";
import {
  Home as HomeIcon,
  Search,
  Library,
  Plus,
  MoreHorizontal,
  UserRound,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-40
        hidden
        h-screen
        w-[224px]
        flex-col
        border-r
        border-[#202329]
        bg-[#0d0f13]
        text-[#a8abb2]
        lg:flex
      "
    >
      {/* ================= LOGO ================= */}

      <div className="flex h-[58px] items-center px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-5 items-center gap-[3px]">
            <span className="h-2 w-[3px] rounded-full bg-[#ed704d]" />
            <span className="h-5 w-[3px] rounded-full bg-[#ed704d]" />
            <span className="h-3.5 w-[3px] rounded-full bg-[#ed704d]" />
            <span className="h-2 w-[3px] rounded-full bg-[#ed704d]" />
          </div>

          <span className="text-sm font-bold tracking-tight text-white">
            Muzik
          </span>

          <span className="text-[8px] text-[#7c8088]">
            Muzik
          </span>
        </div>
      </div>


      {/* ================= NAVIGATION ================= */}

      <nav className="px-2">

        <SidebarItem
          icon={<HomeIcon size={13} />}
          label="Home"
          active
        />

        <SidebarItem
          icon={<Search size={13} />}
          label="Search"
        />

        <SidebarItem
          icon={<Library size={13} />}
          label="Your Library"
        />

      </nav>


      {/* ================= PLAYLISTS ================= */}

      <div className="mt-6 px-3">

        <div className="mb-2 flex items-center justify-between">

          <p className="
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.8px]
            text-[#656970]
          ">
            Playlists
          </p>

          <button
            className="
              text-[#777b83]
              transition
              hover:text-white
            "
          >
            <Plus size={13} />
          </button>

        </div>


        <div className="space-y-0.5">

          <PlaylistItem label="Liked Songs" />
          <PlaylistItem label="Late Night Coding" />
          <PlaylistItem label="Warm Analog Sessions" />
          <PlaylistItem label="Lo-Fi Architecture" />
          <PlaylistItem label="Nordic Ambient" />

        </div>

      </div>


      {/* ================= USER ================= */}

      <div
        className="
          mt-auto
          border-t
          border-[#202329]
          p-3
        "
      >

        <div className="flex items-center gap-2.5">

          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#272a30]
              text-[#d5d6d9]
            "
          >
            <UserRound size={13} />
          </div>


          <div className="min-w-0 flex-1">

            <p className="
              truncate
              text-[10px]
              font-semibold
              text-white
            ">
              Sahil
            </p>

            <p className="
              truncate
              text-[8px]
              text-[#696d75]
            ">
              Premium Hi-Fi
            </p>

          </div>


          <button className="text-[#6c7078]">
            <MoreHorizontal size={13} />
          </button>

        </div>

      </div>

    </aside>
  );
};


/* ================= SIDEBAR ITEM ================= */

const SidebarItem = ({ icon, label, active = false }) => {
  return (
    <button
      className={`
        flex
        h-8
        w-full
        items-center
        gap-2.5
        rounded-[4px]
        px-3
        text-left
        text-[10px]
        font-medium
        transition

        ${
          active
            ? "bg-[#e96c49] text-[#17191c]"
            : "text-[#9da0a7] hover:bg-[#17191c] hover:text-white"
        }
      `}
    >
      {icon}

      <span>{label}</span>
    </button>
  );
};


/* ================= PLAYLIST ITEM ================= */

const PlaylistItem = ({ label }) => {
  return (
    <button
      className="
        flex
        w-full
        items-center
        rounded
        px-2
        py-1.5
        text-left
        text-[9px]
        text-[#9a9da4]
        transition
        hover:bg-[#17191c]
        hover:text-white
      "
    >
      {label}
    </button>
  );
};

export default Sidebar;