import React from 'react'

const Profile = () => {
  const profiles = [
    {
      name: "Jatin",
      role: "Full Stack Developer",
      image: "https://plus.unsplash.com/premium_photo-1738449258706-74c1dc94b988?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "https://www.linkedin.com/in/jatin-siradhana-856647238/",
      github: "https://github.com/siradhanajatin"
    },
    {
      name: "Aryan",
      role: "ML Engineer",
      image: "https://plus.unsplash.com/premium_photo-1738590729343-fb884bac3b58?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "",
      github: ""
    },
    {
      name: "Rahul",
      role: "ML Engineer",
      image: "src/assets/rahul.jpg",
      linkedin: "https://www.linkedin.com/in/rahul-taxak-063039331/",
      github: "https://github.com/rahultaxak"
    },
    {
      name: "Harshit",
      role: "ML Engineer",
      image: "https://plus.unsplash.com/premium_photo-1739178656557-16b949fea186?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkedin: "",
      github: ""
    }
  ]

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_28%),_linear-gradient(180deg,#020617_0%,#111827_100%)] px-6 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold text-white">Our Team</h1>
          <p className="mt-4 text-lg text-slate-400">Meet the Creators</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(30,58,138,0.22)] backdrop-blur-2xl text-center"
            >
              <img
                className="mx-auto mb-6 h-32 w-32 rounded-full object-cover ring-4 ring-white/10"
                src={profile.image}
                alt={`${profile.name} profile`}
              />
              <h2 className="mb-2 text-2xl font-semibold text-white">{profile.name}</h2>
              <p className="mb-6 text-slate-400">{profile.role}</p>
              <div className="flex justify-center gap-6">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <img className="h-8 w-8" src="src/assets/linkedin.png" alt="LinkedIn" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:scale-110"
                >
                  <img className="h-8 w-8" src="src/assets/github.png" alt="GitHub" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile