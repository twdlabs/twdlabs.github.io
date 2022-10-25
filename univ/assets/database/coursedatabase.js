


// Define course data. 
const courseData = [

	{
		deptid: 'CIS',
		coursenumber: '255',
		coursename: 'Client-Side Web Application Development',
		coursedescription: 'This course focuses on web design and the client side of web application development. Topics include XHTML, Cascading Style Sheets (CSS), the Document Object Model, creating dynamic content and architecture, and building/deploying web pages and web sites. A large portion of the class is spent on examining the ECMA/JavaScript client side scripting language. Current topics of interest such as Web 2.0 and AJAX are explored. An introduction to using both commercial and open source web development tools is also provided.',
		numcredits: 4,
		courseprereqs: [
			'CS 116',
		],
	},
	{
		deptid: 'CIS',
		coursenumber: '355',
		coursename: 'Server-Side Web Application Development',
		coursedescription: 'This course focuses on the server side of web application development technologies. Topics include scripting engines, databases, integrated development environments, and application development frameworks. Students will produce a dynamic web application to illustrate their level of mastery of the course topics.',
		numcredits: 4,
		courseprereqs: [
			'CS 216',
			'CIS 255',
		],
	},
	{
		deptid: 'CIS',
		coursenumber: '357',
		coursename: 'Advanced Programming with Java',
		coursedescription: 'This course will teach students object-orientation and advanced features of the Java programming language. Object-oriented programming and UML concepts, including the derivation, development and implementation of classes, are introduced. Students will learn the fundamentals of Java as well as topics such as generic classes, threading, exception handling, Swing graphical user interface design, Processing XML documents, Networking, Database programming and persistence.',
		numcredits: 4,
		courseprereqs: [
			'CS 216',
		],
	},
	
	{
		deptid: 'COMM',
		coursenumber: '105A',
		coursename: 'Fundamentals of Communication',
		coursedescription: 'Provides the student with basic theory and practice in person-to-person, small group, and public speaking communication processes. Examines characteristics of communicator behavior with communication in relationships as the basic model; message transmission/reception; effects of communication.',
		numcredits: 3,
		courseprereqs: [],
	},
	
	{
		deptid: 'CS',
		coursenumber: '105',
		coursename: 'Intro to Computers & Programming',
		coursedescription: 'Introduction to computer capabilities, limitations and applications; computer system organization; input, output and secondary storage devices; CPU components; Data communication systems; Database management system; Operating systems; Computer\'s impact on society; problem solving with computers including algorithm development, structured programming and top-down design.',
		numcredits: 4,
		courseprereqs: [],
	},
	{
		deptid: 'CS',
		coursenumber: '116',
		coursename: 'Computer Programming I',
		coursedescription: 'This course presents an introduction to the concepts and techniques of computer programming. Emphasis is placed on developing the student\'s ability to apply problem-solving strategies to design algorithms and to implement these algorithms in the Java Programming language.',
		numcredits: 4,
		courseprereqs: [
			'MATH 103',
			'CS 105',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '146',
		coursename: 'Visual Basic .NET Programming',
		coursedescription: 'Algorithm and problem-solving methods, design and development of modular programs using the Visual BASIC Language including numeric and string operations, input and output operations, decision constructs, repetitive constructs, array processing, graphics, and sequential and random file processing.',
		numcredits: 4,
		courseprereqs: [
			'CS 105',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '216',
		coursename: 'Computer Programming II',
		coursedescription: 'This course continues the development of computer programming techniques introduced in CS 116. Topics include data abstraction, object-oriented programming, linear and nonlinear data structures and analysis of sort and search routines including inheritance, polymorphism, recursion lists, linked-lists, stacks, queues and binary trees.',
		numcredits: 4,
		courseprereqs: [
			'CS 116',
			'MATH 120A',
			'MATH 120B',
			'MATH 140',
			'MATH 161',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '245',
		coursename: 'Statistics & Its Applications in Computer Science',
		coursedescription: 'This course will focus on topics such as statistics, probability theory, sampling theory, and statistical inference when applied to the field of computer science and information systems. Additional topics will include data collection, analysis, interpretation, and handling massive data sets with examples from the field of computer information systems.',
		numcredits: 4,
		courseprereqs: [
			'CS 116',
			'MATH 120B',
			'MATH 140',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '316',
		coursename: 'Data Structures & Algorithm Analysis',
		coursedescription: 'This course presents an introduction to advanced data structures using object oriented C++ language features. Topics include abstract levels of data type, classes, member functions, access ability, recursion, AVL-trees, B-trees and general trees, graphs, sorting, searching, hashing, complexity and efficiency of algorithms, data compressions, and memory management.',
		numcredits: 4,
		courseprereqs: [
			'CS 216',
			'MATH 300',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '331',
		coursename: 'Computer Organization & Assembly Language',
		coursedescription: 'This course presents an introduction to low-level computer architecture and its relationship to assembly language programming. Topics include number systems, Boolean algebra, logic gates, simplification of Boolean functions, combinational logic, sequential logic, machine organization, assembly language programming, the interface of low-level language to the architecture and to higher-level programming languages, the assembly/link/loading process, and machine representation of data/instructions.',
		numcredits: 4,
		courseprereqs: [
			'CS 216',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '345',
		coursename: 'UNIX & System Administration',
		coursedescription: 'This course presents a study of the administration of a UNIX system. Topics include the UNIX file structure, configuration files in UNIX, daemons, cron/crontab, e-mail, backup and restore, C-shell, Bourne shell, UNIX commands and command-line options, and UNIX system security.',
		numcredits: 4,
		courseprereqs: [
			'CS 216',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '401',
		coursename: 'Computer Networks',
		coursedescription: 'This course presents the theoretical concepts necessary to understand the complex problem of computer networking. Topics include computer network architectures and models, bandwidth limitations of physical media, analog and digital signaling methods, data link protocols, error detection and correction, medium access control in broadcast networks, routing algorithms, internetworking, the Internet Protocol, connection management, transport services including TCP/UDP, network applications, local-area and wide-area networks.',
		numcredits: 4,
		courseprereqs: [
			'CIS 357',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '403',
		coursename: 'Mobile App Development',
		coursedescription: 'This course examines mobile application development for small footprint devices. Development strategies, issues and limitations pertaining to mobile devices will be presented. Current techniques, toolsets and application frameworks will be provided with students producing several mobile applications.',
		numcredits: 4,
		courseprereqs: [
			'CIS 355',
			'CS 401',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '411',
		coursename: 'Database Systems',
		coursedescription: 'This course presents concepts in database systems. Topics include: basic file structures, database system concepts and architecture, relational data models, formal languages for the relational model, normalization and database design processes, database transaction processing concepts, and emerging trends.',
		numcredits: 4,
		courseprereqs: [
			'CS 216',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '421',
		coursename: 'Software Engineering I',
		coursedescription: 'This course concentrates on tools and methodologies for constructing software systems using software engineering techniques. Topics include software development lifecycles, requirement elicitation, systems modeling, domain modeling, actor-interface modeling, architecture modeling, storyboarding/UI design, behavior modeling and object modeling. The course will culminate with a group project in which a software requirements specification will be delivered including relevant analysis, design and prototyping work.',
		numcredits: 4,
		courseprereqs: [
			'CIS 355',
			'CIS 357',
			'CS 401',
			'CS 411',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '446',
		coursename: 'Operating Systems',
		coursedescription: 'This course presents an introduction to the design and implementation of both traditional and distributed operating systems. Topics include processes, memory management, file systems, I/O, deadlocks, distributed systems, synchronization, distributed file systems, and case studies.',
		numcredits: 4,
		courseprereqs: [
			'CS 331',
			'CIS 357',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '451',
		coursename: 'Programming Language Concepts',
		coursedescription: 'An examination of the principles behind the design of programming languages (iterative, functional, logic, structured and object-oriented): syntactical design, semantics, control structures, data types and structures, memory usage and other implementation issues. Topics such as lexical analysis & parsing, interpretive languages, binding times and run time considerations will also be presented.',
		numcredits: 4,
		courseprereqs: [
			'CS 316',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '461',
		coursename: 'Theory of Computation',
		coursedescription: 'This course provides an introduction to basic models of computational complexity and the representation of infinite objects. Topics that will be examined including grammars, finite state machines, automata theory, Turing machines, computability and decidability, regular and context free languages.',
		numcredits: 4,
		courseprereqs: [
			'CS 316',
		],
	},
	{
		deptid: 'CS',
		coursenumber: '471',
		coursename: 'Software Engineering II',
		coursedescription: 'This course provides a continuation of the senior CS projects initiated in CS 421. Students will be required to implement and deliver a large scale system in a group-based project environment. Programming languages and coding, software maintenance, software quality, CASE and configuration management will be covered. This course will focus on the design, coding and testing phases of the software development lifecycle.',
		numcredits: 4,
		courseprereqs: [
			'CS 421',
		],
	},
	
	{
		deptid: 'ENGL',
		coursenumber: '080',
		coursename: 'Writing Skills',
		coursedescription: 'Practice in the generation of short essays and in the recognition and elimination of errors in style, usage, and sentence structure. Attention to individual needs.',
		numcredits: 3,
		courseprereqs: [],
	},
	{
		deptid: 'ENGL',
		coursenumber: '103',
		coursename: 'College Reading and Learning',
		coursedescription: 'Addresses college-level reading requirements. Introduces students to increasingly complex academic texts in disciplines such as social sciences, health and allied sciences, or humanities, while building relevant background knowledge and vocabulary. Embedded tutors may supplement course activities. Fulfills the basic skills requirement in reading. May be repeated.',
		numcredits: 4,
		courseprereqs: [],
	},
	{
		deptid: 'ENGL',
		coursenumber: '104',
		coursename: 'Strategies for Academic Success',
		coursedescription: 'Develops reading and study strategies appropriate to complex academic texts in disciplines such as social sciences, health and allied sciences, or humanities. Course activities will focus on recognizing organizational patterns common to academic genres within these disciplines and applying learning methods appropriate to college-level courses.',
		numcredits: 3,
		courseprereqs: [],
	},
	{
		deptid: 'ENGL',
		coursenumber: '111',
		coursename: 'Composition I',
		coursedescription: 'Frequent writing assignments to produce informal and formal texts, with emphasis on academic thinking and writing. Develops effective writing processes, from inventing and investigating through organizing, drafting, revising, and editing. Helps students meet the needs of their readers. Includes workshop approaches to develop students\' ability to analyze and evaluate their own writings as well as the writings of others.',
		numcredits: 4,
		courseprereqs: [
			'ENGL 080',
		],
	},
	
	{
		deptid: 'MATH',
		coursenumber: '082',
		coursename: 'Beginning Algebra',
		coursedescription: 'Introduction to sets, axioms, factoring, first and second degree equations and inequalities, graphs, exponents and radicals. Not applicable to General Education requirements and/or minor requirements.',
		numcredits: 4,
		courseprereqs: [
			'MATH 081',
		],
	},
	{
		deptid: 'MATH',
		coursenumber: '161',
		coursename: 'Calculus I',
		coursedescription: 'Introduction to limits, continuity, derivatives, and integrals. Applications of derivatives and integrals.',
		numcredits: 4,
		courseprereqs: [
			'MATH 140',
		],
	},
	{
		deptid: 'MATH',
		coursenumber: '162',
		coursename: 'Calculus II',
		coursedescription: 'Derivatives and integrals of non-algebraic functions. Techniques of integration. Improper integrals. Further applications of derivatives and integrals. Parametric equations and polar coordinates. Analytic geometry and conic sections. Infinite sequences and series.',
		numcredits: 4,
		courseprereqs: [
			'MATH 161',
		],
	},
	{
		deptid: 'MATH',
		coursenumber: '223',
		coursename: 'Matrix Algebra',
		coursedescription: 'This course examines linear systems, Gaussian elimination, matrix operations, determinants, vector spaces, linear transformations, eigenvalues, eigenvectors, diagonalization, inner product spaces, and applications.',
		numcredits: 4,
		courseprereqs: [
			'MATH 161',
		],
	},
	{
		deptid: 'MATH',
		coursenumber: '300',
		coursename: 'Discrete Mathematical Structures',
		coursedescription: 'Sets, logic and induction, combinations and permutations, graph theory, functions and relations, Boolean algebras and other structures, isomorphisms, homomorphisms, finite state machines.',
		numcredits: 3,
		courseprereqs: [
			'MATH 161',
		],
	},
	{
		deptid: 'MATH',
		coursenumber: '304',
		coursename: 'Applied Probability & Statistics',
		coursedescription: 'Intended for students who have had one year of calculus. Basic probability theory, applications using combinations, continuous and discrete random variables, estimation, test of hypotheses, correlation and regression, and confidence intervals.',
		numcredits: 3,
		courseprereqs: [
			'MATH 162',
		],
	},
	
	{
		deptid: 'PHIL',
		coursenumber: '205A!',
		coursename: 'Professional Ethics: Business',
		coursedescription: 'An introduction to moral theory, with special attention to major ethical issues that arise in the practice of American business. These may include the morality of the free market, the nature of property, product liability, advertising, management versus employee rights, whistle-blowing, health and safety issues, affirmative action, comparable worth and the environment.',
		numcredits: 3,
		courseprereqs: [
			'ENGL 111',
		],
	},
	
	{
		deptid: 'RPW',
		coursenumber: '304',
		coursename: 'Technical Report Writing',
		coursedescription: 'Report writing for scientists and engineers. Theory and practice of audience analysis, report organization, revision, editing, oral presentations and visual aids.',
		numcredits: 3,
		courseprereqs: [
			'ENGL 111',
			'PHIL 114',
		],
	},
	
];

