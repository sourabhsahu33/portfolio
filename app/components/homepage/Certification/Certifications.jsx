// Certifications.jsx

const certifications = [
  { id: 1, name: 'Practical Ethical Hacking', image: '/image/certi1.png' },
  { id: 2, name: 'IamNeo Java DSA', image: '/image/certi2.png' },
  { id: 3, name: 'Google Cloud Computing', image: '/image/certi3.png' },
];

function Certifications() {
  return (
    <section id="certifications" className="my-16">
      <div className="sec-divider"></div>

      <div className="section-title">
        <span className="num">05.</span>
        <h2>Certifications</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#111114] border border-[#222228] rounded-md overflow-hidden transition-all duration-200 hover:border-[#00e5a0] hover:-translate-y-0.5"
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-[200px] object-cover block"
            />
            <p className="text-[0.72rem] text-[#c8cad8] px-4 py-3 tracking-[0.04em]">
              {cert.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
