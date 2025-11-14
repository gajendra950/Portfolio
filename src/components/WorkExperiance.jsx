export default function WorkExperience() {
  const experiences = [
    {
    role: "Full Stack Developer",
    company: "Quick Chat App",
    date: "Feb 2025 – Mar 2025",
    description:
      "Built a real-time chat application with secure authentication, personalized profiles, and live communication. Implemented JWT-based auth, bcrypt.js password hashing, Cloudinary image upload, real-time 1:1 chat with Socket.IO, read/seen receipts, and timestamped message tracking.",
  },
  {
    role: "Full Stack Developer",
    company: "Skrap Wallah",
    date: "Sep 2024 – Nov 2024",
    description:
      "Developed a full-stack scrap management system for buying/selling scrap items and dealer coordination. Added JWT authentication, role-based access, modular REST APIs, automated invoice generation, and forgot-password flows using Nodemailer.",
  },
  ];

  return (
    <section
      id="experience"
      className="
        w-full px-8 md:px-16 lg:px-28 py-20 
        bg-slate-50 dark:bg-slate-950
        transition-all duration-700
      "
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Work Experience
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                relative pl-8 md:pl-12
                before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 
                before:bg-gradient-to-b before:from-indigo-600 before:to-purple-600
                dark:before:from-indigo-400 dark:before:to-purple-400
              "
            >
              <div className="absolute left-[-6px] top-2 w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full ring-4 ring-white "></div>

              <div
                className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl 
                            border border-slate-200 dark:border-slate-700 
                            shadow-md hover:shadow-xl 
                            transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1 md:mt-0">
                    {exp.date}
                  </span>
                </div>

                <p className="text-base font-medium text-slate-600 dark:text-slate-300 mb-4">
                  {exp.company}
                </p>

                <p className="text-slate-700 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
