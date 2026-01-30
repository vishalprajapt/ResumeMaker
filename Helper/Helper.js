// helper.js

export const staticResumeData = {
  name: "Anaisha Parvati",
  role: "Head Manager",

  contact: {
    phone: "+123-456-7890",
    email: "hello@reallygreatsite.com",
  },

  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

  education: [
    {
      year: "2020 - 2023",
      institute: "Wardiere University",
      degree: "Master of Business Management",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      year: "2016 - 2020",
      institute: "Borcelle University",
      degree: "Bachelor of Business Management",
      description: "Lorem ipsum dolor sit amet.",
    },
  ],

  experience: [
    {
      year: "2023 - Now",
      company: "Borcelle Studio",
      role: "Head Manager",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      year: "2022 - 2023",
      company: "Liciera & Co.",
      role: "General Manager",
      description: "Lorem ipsum dolor sit amet.",
    },
  ],

  skills: [
    "Leadership",
    "Analytics",
    "Digital Marketing",
    "Teamwork",
    "Communication",
    "Problem Solving",
    "Innovation",
    "Collaboration",
  ],

  references: [
    {
      name: "Aarya Agarwal",
      role: "CEO of Borcelle Company",
      phone: "123-456-7890",
      social: "@reallygreatsite",
    },
    {
      name: "Sharin Varma",
      role: "HRD of Borcelle Company",
      phone: "123-456-7890",
      social: "@reallygreatsite",
    },
  ],

  language: ["Hindi", "English", "Urdu"],
};

// ✅ MAIN EXPORT (SMART LOGIC)
export const resume1Data = (() => {
  if (typeof window === "undefined") {
    // SSR safety (Next.js)
    return staticResumeData;
  }

  const localData = localStorage.getItem("resumeData");

  if (localData) {
    try {
      return JSON.parse(localData);
    } catch (error) {
      console.error("Invalid localStorage data");
      return staticResumeData;
    }
  }

  return staticResumeData;
})();
