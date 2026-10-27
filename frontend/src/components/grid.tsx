import { Link } from "@tanstack/react-router";

const Grid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6 md:p-8 lg:p-12 libre-text">
      {/* 1 */}
      <div className="flex flex-col h-full gap-4">
        <h3 className="text-2xl md:text-3xl title_loc font-semibold min-h-[3rem]">
          Our Workplaces
        </h3>

        <div className="flex flex-col flex-1 rounded-4xl border border-[rgb(67,67,67)] p-8 bg-[#fef880]">
          <div className="min-h-[5.5rem] mb-4 flex items-end">
            <h2 className="title_loc text-lg md:text-xl lg:text-2xl">
              {" "}
              Long-Term Music Studios for London's Professional Community
            </h2>
          </div>

          <p className="mt-0 leading-relaxed">
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
      <div className="flex flex-col h-full gap-4">
        <h3 className="text-2xl md:text-3xl font-semibold min-h-[3rem] invisible">
          placeholder
        </h3>

        <div className="flex flex-col flex-1 rounded-4xl border border-[rgb(67,67,67)] p-8 bg-[#fef880]">
          <div className="min-h-[5.5rem] mb-4 flex items-end">
            <h2 className="title_loc text-lg md:text-xl lg:text-2xl">
              {" "}
              High-Spec, Soundproof Spaces Built for Professionals
            </h2>
          </div>

          <p className="mt-0 leading-relaxed">
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
      <div className="flex flex-col h-full gap-4">
        <h3 className="text-2xl md:text-3xl title_loc font-semibold min-h-[3rem] invisible">
          What Our Clients Say
        </h3>

        <div className="italic flex flex-col flex-1 rounded-4xl p-8 bg-[#fef880]">
          <div className="min-h-[5.5rem] mb-4 flex items-end">
            <h2 className="title_loc text-lg md:text-xl lg:text-2xl invisible">
              {" "}
              What Our Clients Say
            </h2>
          </div>

          <p className="mt-0 leading-relaxed">
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
      <div className="flex flex-col h-full gap-4">
        <h3 className="text-2xl md:text-3xl font-semibold min-h-[3rem] invisible">
          placeholder
        </h3>

        <div className="flex flex-col flex-1 rounded-4xl border border-[rgb(67,67,67)] p-8 bg-[#fef880]">
          <div className="min-h-[5.5rem] mb-4 flex items-end">
            <h2 className="title_loc text-lg md:text-xl lg:text-2xl">
              {" "}
              24/7 Access, First Month Fit Guarantee
            </h2>
          </div>

          <p className="mt-0 leading-relaxed">
            We offer 24/7 access to all our facilities, along with high-speed
            internet, ensuring you can create whenever inspiration strikes. And
            with our unique First Month Fit Guarantee, you can be confident
            you've found the right space.
          </p>
        </div>
      </div>

      {/* 5 */}
      <div className="flex flex-col h-full gap-4">
        <h3 className="text-2xl md:text-3xl font-semibold min-h-[3rem] invisible">
          placeholder
        </h3>

        <div className="flex flex-col flex-1 rounded-4xl border border-[rgb(67,67,67)] p-8 bg-[#fef880]">
          <div className="min-h-[5.5rem] mb-4 flex items-end">
            <h2 className="title_loc text-lg md:text-xl lg:text-2xl">
              More Than a Studio, It’s a Community
            </h2>
          </div>

          <p className="mt-0 leading-relaxed">
            We do more than just rent rooms; we build supportive, collaborative
            environments founded on a sense of transparency. Our spaces are
            filled with a selectively chosen community of talented
            professionals.
          </p>
        </div>
      </div>

      {/* 6 */}
      <div className="flex flex-col h-full gap-4">
        <h3 className="text-2xl md:text-3xl font-semibold min-h-[3rem] invisible">
          placeholder
        </h3>

        <div className="italic flex flex-col flex-1 rounded-4xl p-8 bg-[#fef880]">
          <div className="min-h-[5.5rem] mb-4 flex items-end">
            <h2 className="title_loc text-lg md:text-xl lg:text-2xl invisible">
              {" "}
              What Our Clients Say
            </h2>
          </div>

          <p className="mt-0 leading-relaxed">
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
