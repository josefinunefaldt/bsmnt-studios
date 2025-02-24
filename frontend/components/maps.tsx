export default function LocationsMap() {
  const locations = [
    {
      name: "Archway BSMNT",
      address: "32 Junction Road, London N19 5RE",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.2339296899413!2d-0.13847668407313932!3d51.56469607964724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761af21f2d2e23%3A0x9fdbf3f964abc8b7!2s32%20Junction%20Rd%2C%20London%20N19%205RE%2C%20UK!5e0!3m2!1sen!2sus!4v1644707417642",
    },
    {
      name: "Finsbury Park BSMNT",
      address: "Units 5 & 6, Leeds Place, London N4 3RF",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.7641831076996!2d-0.1083534!3d51.5701575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a4c34288b5d%3A0x6a9e5f3fd117a1c6!2sLeeds%20Pl%2C%20Finsbury%20Park%2C%20London%20N4%203RF%2C%20UK!5e0!3m2!1sen!2sus!4v1644707500321",
    },
    {
      name: "Hornsey BSMNT",
      address: "7 Cross Lane, London N8 7SA",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.4292686791467!2d-0.1206574!3d51.5874198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b1b9cb8b3db%3A0x903857fcdbd6dd85!2s7%20Cross%20Ln%2C%20Hornsey%2C%20London%20N8%207SA%2C%20UK!5e0!3m2!1sen!2sus!4v1644707593292",
    },
    {
      name: "Hackney BSMNT",
      address: "13-17 Rendlesham Road, London E5 8QB",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.7613687593715!2d-0.0570157!3d51.5523594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c876497c10b%3A0x7fbff6fd0c4ea8bc!2sRendlesham%20Rd%2C%20London%20E5%208QB%2C%20UK!5e0!3m2!1sen!2sus!4v1644707682149",
    },
    {
      name: "Lea Bridge BSMNT",
      address: "159 Lea Bridge Road, London E10 7PN",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.827805705571!2d-0.0287854!3d51.5740989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c3ebd8e2b55%3A0x8c4f0e2b39d15b6a!2s159%20Lea%20Bridge%20Rd%2C%20London%20E10%207PN%2C%20UK!5e0!3m2!1sen!2sus!4v1644707762872",
    },
    {
      name: "Argall way",
      address: "159 Lea Bridge Road, London E10 7PN",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.827805705571!2d-0.0287854!3d51.5740989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c3ebd8e2b55%3A0x8c4f0e2b39d15b6a!2s159%20Lea%20Bridge%20Rd%2C%20London%20E10%207PN%2C%20UK!5e0!3m2!1sen!2sus!4v1644707762872",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <div key={index} className="bg-base-200 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-2">
              {location.name}
            </h3>
            <p className="text-sm text-center mb-3">{location.address}</p>
            <iframe
              src={location.embedUrl}
              className="w-full h-48 rounded-lg border border-gray-300"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
