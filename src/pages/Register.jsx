import React from "react";

const Register = () => {
  return (
    <main className="min-h-screen bg-[#1d1f24] text-[#e8e8eb] font-sans">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_1.04fr]">

        {/* ================= LEFT PANEL ================= */}

        <section
          className="
            relative hidden min-h-screen overflow-hidden
            bg-cover bg-center
            lg:flex lg:flex-col lg:justify-between
            px-8 py-7
          "
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(8,10,14,0.72),rgba(8,10,14,0.45)),`,
          }}
        >

          {/* Dark overlay */}

          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-[#07090c]/10
              via-[#07090c]/30
              to-[#07090c]/85
            "
          />

          {/* ================= TOP BADGES ================= */}

          <div className="relative z-10 flex items-center justify-between">

            <span
              className="
                inline-flex items-center gap-2
                border border-white/5
                bg-[#14161b]/75
                px-2 py-1
                text-[9px]
                tracking-[0.7px]
                text-[#d6d6d8]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#e76a4b]
                "
              />

              ACOUSTIC ENGINE V4.8
            </span>


            <span
              className="
                border border-white/5
                bg-[#14161b]/75
                px-2 py-1
                text-[9px]
                tracking-[0.5px]
                text-[#d6d6d8]
              "
            >
              ◈ DIRECT BITSTREAM DSD512
            </span>

          </div>


          {/* ================= HERO CONTENT ================= */}

          <div className="relative z-10 mb-20">

            {/* Waveform */}

            <div className="mb-4 flex h-12 items-center gap-1">

              <span className="h-4 w-[3px] rounded-full bg-[#e76a4b]" />
              <span className="h-7 w-[3px] rounded-full bg-[#e76a4b]" />
              <span className="h-10 w-[3px] rounded-full bg-[#e76a4b]" />
              <span className="h-7 w-[3px] rounded-full bg-[#e76a4b]" />
              <span className="h-11 w-[3px] rounded-full bg-[#e76a4b]" />
              <span className="h-6 w-[3px] rounded-full bg-[#e76a4b]" />
              <span className="h-9 w-[3px] rounded-full bg-[#e76a4b]" />
              <span className="h-5 w-[3px] rounded-full bg-[#e76a4b]" />
              <span className="h-8 w-[3px] rounded-full bg-[#e76a4b]" />
              <span className="h-4 w-[3px] rounded-full bg-[#e76a4b]" />

            </div>


            <p
              className="
                mb-2
                text-[11px]
                font-bold
                tracking-[1px]
                text-[#e76a4b]
              "
            >
              STUDIO FIDELITY
            </p>


            <h1
              className="
                max-w-xl
                text-4xl
                font-bold
                leading-[1.02]
                tracking-[-1.5px]
                text-[#ededf0]
                xl:text-5xl
              "
            >
              Your music.
              <br />
              Your frequency.
            </h1>


            <p
              className="
                mt-3
                max-w-[450px]
                text-[13px]
                leading-[1.55]
                text-[#c6c6ca]
              "
            >
              Create your personal Muzik account and build a library
              designed around uncompromised sound, carefully curated
              playlists, and lossless playback.
            </p>

          </div>


          {/* ================= QUOTE ================= */}

          <div
            className="
              relative z-10
              max-w-[430px]
              border-l-2
              border-[#e76a4b]
              pl-2.5
            "
          >

            <p
              className="
                mb-1.5
                text-[10px]
                italic
                leading-[1.5]
                text-[#c3c3c6]
              "
            >
              “Music expresses that which cannot be put into words
              and cannot remain silent.”
            </p>

            <span
              className="
                text-[9px]
                font-semibold
                text-[#9a9a9e]
              "
            >
              — Victor Hugo
            </span>

          </div>


          <span
            className="
              absolute
              bottom-5
              right-8
              z-10
              text-[10px]
              tracking-[0.8px]
              text-[#aaaab0]
            "
          >
            MASTER TAPE 04
          </span>

        </section>


        {/* ================= RIGHT PANEL ================= */}

        <section
          className="
            flex
            min-h-screen
            items-center
            justify-center
            bg-[#1e2025]
          "
        >

          <div
            className="
              w-full
              max-w-[440px]
              px-6
              py-10
              sm:px-10
              lg:px-11
            "
          >

            {/* ================= BRAND ================= */}

            <div
              className="
                mb-9
                flex
                items-center
                gap-2
                text-lg
                font-bold
              "
            >

              {/* Muzik icon */}

              <div className="flex h-6 items-center gap-[3px]">

                <span className="h-3 w-[3px] rounded-full bg-[#e76a4b]" />

                <span className="h-[21px] w-[3px] rounded-full bg-[#e76a4b]" />

                <span className="h-4 w-[3px] rounded-full bg-[#e76a4b]" />

                <span className="h-2 w-[3px] rounded-full bg-[#e76a4b]" />

              </div>

              <span>muzik.</span>

            </div>


            {/* ================= HEADING ================= */}

            <p
              className="
                mb-1.5
                text-[11px]
                font-bold
                tracking-[0.7px]
                text-[#e76a4b]
              "
            >
              AUTHENTICATION
            </p>


            <h2
              className="
                text-2xl
                font-bold
                leading-tight
                tracking-[-0.7px]
              "
            >
              Create your account
            </h2>


            <p
              className="
                mb-6
                mt-1.5
                text-xs
                leading-relaxed
                text-[#a8a8ad]
              "
            >
              Join Muzik and start building your personal lossless library.
            </p>


            {/* ================= USERNAME ================= */}

            <div className="mb-4">

              <div
                className="
                  mb-1.5
                  flex
                  items-center
                  justify-between
                "
              >

                <label
                  className="
                    text-[11px]
                    font-semibold
                    text-[#c7c7ca]
                  "
                >
                  Username / Audio ID
                </label>

                <span
                  className="
                    text-[9px]
                    text-[#9e9ea3]
                  "
                >
                  Public identity
                </span>

              </div>


              <div
                className="
                  flex
                  h-10
                  items-center
                  border
                  border-transparent
                  bg-[#191b20]
                  px-3
                  transition
                  focus-within:border-[#e76a4b]/60
                "
              >

                <span
                  className="
                    mr-2.5
                    text-[13px]
                    text-[#9a9ba1]
                  "
                >
                  ◉
                </span>


                <input
                  type="text"
                  placeholder="Choose a username"
                  className="
                    w-full
                    bg-transparent
                    text-xs
                    text-[#e8e8eb]
                    outline-none
                    placeholder:text-[#77787d]
                  "
                />

              </div>

            </div>


            {/* ================= EMAIL ================= */}

            <div className="mb-4">

              <div
                className="
                  mb-1.5
                  flex
                  items-center
                  justify-between
                "
              >

                <label
                  className="
                    text-[11px]
                    font-semibold
                    text-[#c7c7ca]
                  "
                >
                  Email
                </label>

                <span
                  className="
                    text-[9px]
                    text-[#9e9ea3]
                  "
                >
                  Account recovery
                </span>

              </div>


              <div
                className="
                  flex
                  h-10
                  items-center
                  border
                  border-transparent
                  bg-[#191b20]
                  px-3
                  transition
                  focus-within:border-[#e76a4b]/60
                "
              >

                <span
                  className="
                    mr-2.5
                    text-[13px]
                    text-[#9a9ba1]
                  "
                >
                  @
                </span>


                <input
                  type="email"
                  placeholder="you@example.com"
                  className="
                    w-full
                    bg-transparent
                    text-xs
                    text-[#e8e8eb]
                    outline-none
                    placeholder:text-[#77787d]
                  "
                />

              </div>

            </div>


            {/* ================= PASSWORD ================= */}

            <div className="mb-4">

              <div
                className="
                  mb-1.5
                  flex
                  items-center
                  justify-between
                "
              >

                <label
                  className="
                    text-[11px]
                    font-semibold
                    text-[#c7c7ca]
                  "
                >
                  Password
                </label>

                <span
                  className="
                    text-[9px]
                    text-[#9e9ea3]
                  "
                >
                  Min. 8 characters
                </span>

              </div>


              <div
                className="
                  flex
                  h-10
                  items-center
                  border
                  border-transparent
                  bg-[#191b20]
                  px-3
                  transition
                  focus-within:border-[#e76a4b]/60
                "
              >

                <span
                  className="
                    mr-2.5
                    text-[13px]
                    text-[#9a9ba1]
                  "
                >
                  ◈
                </span>


                <input
                  type="password"
                  placeholder="Create a password"
                  className="
                    w-full
                    bg-transparent
                    text-xs
                    text-[#e8e8eb]
                    outline-none
                    placeholder:text-[#77787d]
                  "
                />


                <button
                  type="button"
                  className="
                    ml-2
                    cursor-pointer
                    text-xs
                    text-[#8f9095]
                  "
                >
                  ◉
                </button>

              </div>

            </div>


            {/* ================= CONFIRM PASSWORD ================= */}

            <div className="mb-4">

              <div
                className="
                  mb-1.5
                  flex
                  items-center
                  justify-between
                "
              >

                <label
                  className="
                    text-[11px]
                    font-semibold
                    text-[#c7c7ca]
                  "
                >
                  Confirm Password
                </label>

              </div>


              <div
                className="
                  flex
                  h-10
                  items-center
                  border
                  border-transparent
                  bg-[#191b20]
                  px-3
                  transition
                  focus-within:border-[#e76a4b]/60
                "
              >

                <span
                  className="
                    mr-2.5
                    text-[13px]
                    text-[#9a9ba1]
                  "
                >
                  ◈
                </span>


                <input
                  type="password"
                  placeholder="Repeat your password"
                  className="
                    w-full
                    bg-transparent
                    text-xs
                    text-[#e8e8eb]
                    outline-none
                    placeholder:text-[#77787d]
                  "
                />

              </div>

            </div>


            {/* ================= TERMS ================= */}

            <label
              className="
                mb-5
                flex
                cursor-pointer
                items-start
                gap-2
                text-[10px]
                leading-relaxed
                text-[#9fa0a5]
              "
            >

              <input
                type="checkbox"
                className="
                  mt-0.5
                  h-3
                  w-3
                  shrink-0
                  accent-[#e76a4b]
                "
              />

              <span>
                I agree to Muzik's{" "}
                <button
                  type="button"
                  className="
                    font-semibold
                    text-[#e7a08d]
                    hover:text-[#efb1a1]
                  "
                >
                  Terms of Service
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="
                    font-semibold
                    text-[#e7a08d]
                    hover:text-[#efb1a1]
                  "
                >
                  Privacy Policy
                </button>
                .
              </span>

            </label>


            {/* ================= CREATE ACCOUNT ================= */}

            <button
              type="button"
              className="
                flex
                h-9
                w-full
                items-center
                justify-center
                gap-2.5
                bg-[#e86b4b]
                text-[11px]
                font-semibold
                text-[#151619]
                transition
                hover:bg-[#ef7858]
                active:scale-[0.99]
                cursor-pointer
              "
            >

              <span>Create Account</span>

              <span>→</span>

            </button>


            {/* ================= DIVIDER ================= */}

            <div
              className="
                my-4
                flex
                items-center
                gap-3
                text-[8px]
                font-bold
                text-[#77787d]
              "
            >

              <span className="h-px flex-1 bg-[#2b2d32]" />

              OR

              <span className="h-px flex-1 bg-[#2b2d32]" />

            </div>


            {/* ================= LOGIN ================= */}

            <p
              className="
                text-center
                text-[11px]
                text-[#aaaab0]
              "
            >

              Already have an account?

              <button
                type="button"
                className="
                  ml-1
                  cursor-pointer
                  font-semibold
                  text-[#e7a08d]
                  hover:text-[#efb1a1]
                  cursor-pointer
                "
              >
                Log in
              </button>

            </p>

          </div>

        </section>

      </div>
    </main>
  );
};

export default Register;