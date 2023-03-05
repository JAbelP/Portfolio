export const personalData = {
	name: "Jose \"Abel\" Pinales",
	role: "Full Stack Engineer",
	education: [
		"Bachelor of Science in Computer Science, University of North Carolina at Charlotte",
	],
	contactLinks: [
		"mailto:emailto:time2code@gmail.com",
		"https://www.linkedin.com/in/jose-pinales/",
	],
};

export const aboutMe = {
	title: "About Me",
	body: [
		"As a computer science professional, I adapt to new technologies, tackling complex problems with confidence. My portfolio showcases not only my technical proficiency, but also my ability to collaborate effectively, communicate clearly, and think creatively",
		"When I'm not working, I love programming, filming, and spending time with my friends and family. I believe that my determination, can-do attitude, and hard work make me a true asset to any team.",
	],
};

export const skills = {
	soft: [
		{ icon: "👂🏼", text: "Active Listening" },
		{ icon: "💬", text: "Effective Communication" },
		{ icon: "👥", text: "Collaboration" },
		{ icon: "⽓", text: "Teamwork" },
		{ icon: "💡", text: "Creative Problem Solving" },
		{ icon: "⌛️", text: "Time management" },
	],
	hard: [
		{ icon: "🌐", text: "Javascript/Typescript" },
		{ icon: "🚀", text: "React and next.js" },
		{ icon: "🐍", text: "Python" },
		{ icon: "💾", text: "SQL" },
		{ icon: "🐳", text: "Docker" },
		{ icon: "☕", text: "Java" },
		{ icon: "🥅", text: ".NET" }

	],
};

export const professionalData = {
	title: "Professional Experience",
	experiences: [
		{
			role: "Full Stack Developer, Prometheus Group. (Jan 2022 - Oct 2022)",
			description:[
				"Involved with the development of web applications to help manage multimillion dollar oil complexes using TypeScript, React components and Redux",
				"Implemented backend logic using C++ with a mixture of SQL to handle database calls",
				"Implemented REST services to the web applications ",

			],
			current: false,
		},
		{
			role: "Software Engineer Intern, Stack Leader. (Sept 2021 - Dec 2021)",
			description:[
				"In training to work on consulting project with client. Project will involve the use of AOP and Java EE to create readable code",
				"Learned Linux to Red Hat Certified System Administrator standards to contribute to projects",
				
			],
			current: false,
		},
		{
			role: "Maker Space Engineer, UNCC. (Nov 2019 - Dec 2021)",
			description:["Taught students how to create projects such as electric scooters and automated flower gardens using IoT and DIY equipment",
			"Created promotional websites using HTML and CSS for both web and mobile",

			],
			current: false,
		},
	],
};

export const personalProjects = {
	allProjects:[
		{language: "Python",
			projectDetails:[
			{
				projectName: "Context for Docx",
				Brief: "By typing in keywords, users can quickly find matching documents within a directory",
				link: "https://github.com/JAbelP/ContextForDocx"
			  },
			  {
				projectName: "Volt Switch TV Input",
				Brief: "Change the Input for a non-IOT TV.",
				link: "https://github.com/JAbelP/volt-switch-tvinput-skill"
			  },
			  {
				projectName: " HomeWebsite / Backend",
				Brief: "Backend to control serveral non-IOT devices around the house",
				link:"https://github.com/JAbelP/HomeWebsite/tree/main/backend",
			  },
			  {
				projectName: "Thunder Rat sing",
				Brief: "This caused Thunder rat to sing for the outro",
				link:"https://github.com/JAbelP/thunderrat-is-going-to-sing-skill",
			  },
			  {
				projectName: " Taser Skill",
				Brief: "Thunder rat can now use the attached taser",
				link:"https://github.com/JAbelP/taser-skill",
			  },
			  {
				projectName: "Lights to yellow",
				Brief: "This caused all the lights to changer to yellow using multithreading.",
				link:"https://github.com/JAbelP/signal-beam-changelightstoyellow-skill",
			  },
			  {
				projectName: "Tv Power Skill",
				Brief: "Turn on a non-IOT TV",
				link:"https://github.com/JAbelP/light-screen-tvpower-skill",
			  },
		]},
		{language:"C++",
			projectDetails:[
				{
					projectName: "Esp32 Tv Remote",
					Brief: "My Roomates kept losing the remote and we don't have smart TV, with an esp32 I solved the issue.",
					link:"https://github.com/JAbelP/esp32-Tv-Remote",
				  }
		]},
		{language:"Javascript",
			projectDetails:[
				{
					projectName: "Portfolio",
					Brief: "You are looking at it now! ",
					link:"https://github.com/JAbelP/Portfolio",
				  },
				  {
					projectName:"Java script projects",
					Brief:"These are a group of projects by Zenva to learn Javascript",
					link:"https://github.com/JAbelP/JavaScriptProjects"
				  }
			]
	    }]
}

  