import { Link } from "@tanstack/react-router";

const Grid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-8 lg:p-12 libre-text ">
      {/* 1 */}
      <div className="flex flex-col h-full gap-3 ">
        <h3 className="text-xl title_loc md:text-2xl font-semibold min-h-[2.75rem]">
          Our Workplaces
        </h3>
        <div className="flex flex-col justify-between rounded-2xl border border-[rgb(67,67,67)] flex-1 rounded-2xl p-6 shadow-md hover:shadow-xl border-black transition-shadow bg-[#fef880]">
          <h2 className="title_loc text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl mb-2">
            Your Creative Home: Long-Term Music Studios for London's
            Professional Community
          </h2>
          <p className="mt-0">
            At BSMNT, our purpose is to provide beautiful and functional homes
            for creative communities. We offer high-spec, soundproof music{" "}
            <Link to="/studios" className="text-black underline">
              studios
            </Link>{" "}
            and creative{" "}
            <Link to="/offices" className="text-black underline">
              offices
            </Link>{" "}
            for long-term rent across{" "}
            <Link to="/locations" className="text-black underline">
              North and East London
            </Link>
            , designed for professional musicians, producers, and sound
            designers.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col h-full gap-3">
        <h3 className="text-xl md:text-2xl font-semibold min-h-[2.75rem] invisible">
          placeholder
        </h3>
        <div className="flex flex-col justify-between flex-1  rounded-2xl border border-[rgb(67,67,67)] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow bg-[#fef880]">
          <h2 className="title_loc text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl mb-2">
            High-Spec, Soundproof Spaces Built for Professionals
          </h2>
          <p className="mt-0">
            All our facilities are purpose-built and secure, featuring
            professionally soundproofed rooms ideal for music production,
            recording, and post-production. Explore our available spaces in{" "}
            <Link to="/archway" className="text-black underline">
              Archway
            </Link>
            ,{" "}
            <Link to="/finsbury" className="text-black underline">
              Finsbury Park
            </Link>
            ,{" "}
            <Link to="/hackney" className="text-black underline">
              Hackney
            </Link>{" "}
            and{" "}
            <Link to="/leabridge" className="text-black underline">
              Lea Bridge
            </Link>
            .
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-col h-full gap-3">
        <h3 className="text-xl title_loc md:text-2xl font-semibold min-h-[2.75rem]">
          What Our Clients Say
        </h3>
        <div className="italic flex flex-col justify-between rounded-2xl border border-[rgb(67,67,67)] flex-1 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow bg-[#fef880]">
          <p className="mt-0">
            “Simona and Tomas are amazing studio managers. I’ve loved being a
            part of the community of music-makers at Lea Bridge. The BSMNT
            studio complex at Lea Bridge is so well built, run and looked after.
            If ever I have any issues or need help, both Simona and Tomas are
            always at the end of the phone. I’m very much at home there, and I
            know everyone else in the building feels the same!”
            <br />
            <br />
            <strong>Rhys Lewis - Singer/Songwriter</strong>
          </p>
        </div>
      </div>

      {/* 4 */}
      <div className="flex flex-col h-full gap-3">
        <h3 className="text-xl md:text-2xl font-semibold min-h-[2.75rem] invisible">
          placeholder
        </h3>
        <div className="flex flex-col justify-between flex-1 rounded-2xl rounded-2xl border border-[rgb(67,67,67)] p-6 shadow-md hover:shadow-xl transition-shadow bg-[#fef880]">
          <h2 className="title_loc text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl mb-2">
            24/7 Access, First Month Fit Guarantee
          </h2>
          <p className="mt-0">
            We offer 24/7 access to all our facilities, along with high-speed
            internet, ensuring you can create whenever inspiration strikes. And
            with our unique First Month Fit Guarantee, you can be confident
            you've found the right space.
          </p>
        </div>
      </div>

      {/* 5 */}
      <div className="flex flex-col h-full gap-3">
        <h3 className="text-xl md:text-2xl font-semibold min-h-[2.75rem] invisible">
          placeholder
        </h3>
        <div className="flex flex-col justify-between flex-1 rounded-2xl rounded-2xl border border-[rgb(67,67,67)] p-6 shadow-md hover:shadow-xl transition-shadow bg-[#fef880]">
          <h2 className="title_loc text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl mb-2">
            More Than a Studio, It’s a Community
          </h2>
          <p className="mt-0">
            We do more than just rent rooms; we build supportive, collaborative
            environments founded on a sense of transparency. Our spaces are
            filled with a selectively chosen community of talented
            professionals.
          </p>
        </div>
      </div>

      {/* 6 */}
      <div className="flex flex-col h-full gap-3">
        <h3 className="text-xl md:text-2xl font-semibold min-h-[2.75rem] invisible">
          placeholder
        </h3>
        <div className="italic flex flex-col justify-between rounded-2xl border border-[rgb(67,67,67)] flex-1 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow bg-[#fef880]">
          <p className="mt-0">
            “The team at BSMNT made every aspect of working in their rooms
            incredibly smooth and easy. Communication was excellent, with any
            questions or issues solved efficiently. Communal areas were kept
            clean and tidy and repairs arranged speedily. I can’t recommend them
            enough.”
            <br />
            <br />
            <strong>Matt Wiggins - Mixer/Engineer/Producer</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
