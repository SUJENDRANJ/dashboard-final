const users = [
  {
    id: 1,
    name: "Santhosh Kumar",
    age: 21,
    role: "Full Stack Head",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/375/ff58db95aecdfa09ae61b51b5fd8f63f/main/97c/97ca58973f069cf268d4782516af2f02/avatar.png",
    // dept: "B.M.E",
    bio: "M.D at NEXGEN, leading with vision and strategy. Skilled in frontend and backend technologies. Passionate about innovation and driving growth 🤵",
  },
  {
    id: 7,
    name: "Hari prasath Selvan",
    age: 21,
    role: "Full Stack Head",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/275/ff58db95aecdfa09ae61b51b5fd8f63f/main/9d8/9d8eaeb5750b7ad633a2f379a91cc2bb/Hp.jpg.png",
    // dept: "B.M.E",
    bio: "Aspiring Full Stack Developer trainee with a passion for building dynamic web applications. Skilled in frontend and backend technologies, eager to learn and grow in real-world projects. 🚀",
  },
  {
    id: 1,
    name: "Sujendran",
    age: 21,
    role: "Full Stack Trainee",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/335/a7fa78f57e73ecbd0b9500a062d0d214/main/87a/87ae364e9ebe3e27ef2065fd28a9544d/avatar.png",
    // dept: "C.S.E",
    bio: "Aspiring Full Stack Developer trainee with a passion for building dynamic web applications. Skilled in frontend and backend technologies, eager to learn and grow in real-world projects. 🚀",
  },
  {
    id: 2,
    name: "Dilip kumar",
    age: 21,
    role: "Full Stack Trainee",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/147/a7fa78f57e73ecbd0b9500a062d0d214/main/bfb/bfb0b1cdb80e2130374d84c80e99d7d4/DILIP%20KUMAR%20K%20M.jpg.png",
    // dept: "C.S.E",
    bio: "Aspiring Full Stack Developer trainee with a passion for building dynamic web applications. Skilled in frontend and backend technologies, eager to learn and grow in real-world projects. 🚀",
  },

  {
    id: 3,
    name: "Prabhagaran",
    age: 21,
    role: "Full Stack Trainee",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/157/a7fa78f57e73ecbd0b9500a062d0d214/main/3b9/3b962f746272b4f9de9bd697c83c2d3e/avatar.png",
    // dept: "C.S.E",
    bio: "Aspiring Full Stack Developer trainee with a passion for building dynamic web applications. Skilled in frontend and backend technologies, eager to learn and grow in real-world projects. 🚀",
  },
  {
    id: 3,
    name: "RATHISH KUMAR",
    age: 21,
    role: "Full Stack Trainee",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/409/ff58db95aecdfa09ae61b51b5fd8f63f/main/0dc/0dc7cfaa7cae67d674b0fb56efad21b4/WhatsApp Image 2025-02-24 at 10.00.13_fd7e32a8.jpg.png",
    // dept: "C.S.E",
    bio: "Aspiring Full Stack Developer trainee with a passion for building dynamic web applications. Skilled in frontend and backend technologies, eager to learn and grow in real-world projects. 🚀",
  },
  {
    id: 3,
    name: "John Rohith Midhun J",
    age: 21,
    role: "Full Stack Trainee",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/359/ff58db95aecdfa09ae61b51b5fd8f63f/main/afc/afc6177772dd4d688b8d6405126d820d/avatar.png",
    // dept: "C.S.E",
    bio: "Aspiring Full Stack Developer trainee with a passion for building dynamic web applications. Skilled in frontend and backend technologies, eager to learn and grow in real-world projects. 🚀",
  },

  {
    id: 5,
    name: "RANJINI M",
    age: 21,
    role: "Full Stack Trainee",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/155/ff58db95aecdfa09ae61b51b5fd8f63f/main/f56/f56dd73a665dce775f2da076d947306a/Ranjini Photo.png",
    // dept: "B.M.E",
    bio: "Aspiring Full Stack Developer trainee with a passion for building dynamic web applications. Skilled in frontend and backend technologies, eager to learn and grow in real-world projects. 🚀",
  },
  {
    id: 6,
    name: "Priyadharshini R",
    age: 21,
    role: "Full Stack Trainee",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/401/ff58db95aecdfa09ae61b51b5fd8f63f/main/89a/89aaaecc955683f0b25fc41ebfc41865/IMG-20250223-WA0002.jpg.png",
    // dept: "B.M.E",
    bio: "Aspiring Full Stack Developer trainee with a passion for building dynamic web applications. Skilled in frontend and backend technologies, eager to learn and grow in real-world projects. 🚀",
  },
  {
    id: 7,
    name: "Elakkiya G",
    age: 21,
    role: "Full Stack Trainee",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/395/ff58db95aecdfa09ae61b51b5fd8f63f/main/aa0/aa055989ec6a709dff56b555a27235a3/WhatsApp Image 2025-02-23 at 21.36.49_b178e5c8.jpg.png",
    // dept: "B.M.E",
    bio: "Aspiring Full Stack Developer trainee with a passion for building dynamic web applications. Skilled in frontend and backend technologies, eager to learn and grow in real-world projects. 🚀",
  },
  {
    id: 8,
    name: "DHIVYA S",
    age: 21,
    role: "Full Stack Trainee",
    avatar:
      "https://cdn.bitrix24.in/b32626871/resize_cache/159/ff58db95aecdfa09ae61b51b5fd8f63f/main/65b/65b73a5bd0ffe910d16ae303aa3b68d4/Profile Photo.jpg.png",
    // dept: "B.M.E",
    bio: "Aspiring Full Stack Developer trainee with a passion for building dynamic web applications. Skilled in frontend and backend technologies, eager to learn and grow in real-world projects. 🚀",
  },
];

export { users };
