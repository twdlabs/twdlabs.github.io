


// Define course data. 
const courseData = [
	
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'213',
		coursename: 'Financial Accounting',
		numcredits: 4,
		coursedescription: 'The accumulation and presentation of business data with primary emphasis on the external user. Accounting principles will be examined as they apply to individual proprietorships, partnerships and corporations in the service and merchandising industries.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'214',
		coursename: 'Managerial Accounting',
		numcredits: 4,
		coursedescription: 'Accounting as an aid to decision making. Topics considered will include: The Statement of Cash Flows, the analysis and interpretation of financial statements, current planning and control systems, evaluation of performance, special decisions and long range planning. Emphasis will be placed on the use of accounting information in decision making rather than data accumulation and presentation.',
		postedtime:0,
		courseprereqs: [
			'ACCT213',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'310',
		coursename: 'Fund Accounting',
		numcredits: 4,
		coursedescription: 'Rules and methods used in accounting systems for nonprofit entities and private health, education, and welfare organizations. Systems covered include: state and local government; colleges and universities; health care entities; and various other governmental and nongovernmental agencies. Frequent reference to GASB and FASB standards and other authoritative pronouncements. Students who are majoring in accounting are encouraged to take this course before or at the beginning of the junior year.',
		postedtime:0,
		courseprereqs: [
			'ACCT213',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'311',
		coursename: 'Intermediate Accounting I',
		numcredits: 4,
		coursedescription: 'Theory and principles involved in the definition, measurement, and disclosure of assets. Other topics include: review of the accounting cycle, overview of basic financial statements, and accounting for income taxes. Frequent reference is made to authoritative accounting pronouncements.',
		postedtime:0,
		courseprereqs: [
			'ACCT214',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'312',
		coursename: 'Intermediate Accounting II',
		numcredits: 4,
		coursedescription: 'Continuation of Intermediate Accounting I. Emphasizes measurement and reporting problems associated with stockholders; equity and liabilities, including leases and pensions. Other topics include: statement of cash flows, accounting changes and error analysis, revenue recognition, and disclosure requirements.',
		postedtime:0,
		courseprereqs: [
			'ACCT311',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'313',
		coursename: 'Accounting Software Applications',
		numcredits: 3,
		coursedescription: 'The use of commercially available computer software packages as a tool to understanding accounting systems and developing information for decision-making. Creating, maintaining and, analyzing accounting records that comply with tax rules and generally accepted accounting principles.',
		postedtime:0,
		courseprereqs: [
			'ACCT213',
			'ACCT214',
			'CS150',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'315',
		coursename: 'Cost Accounting',
		numcredits: 4,
		coursedescription: 'Emphasizes the accumulation of costs by product for internal and external uses. The accumulation of costs is demonstrated for use in planning, control and decision making. Cost accounting techniques are analyzed in traditional and modern manufacturing and service environments.',
		postedtime:0,
		courseprereqs: [
			'ACCT214',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'316',
		coursename: 'Federal Income Tax Accounting',
		numcredits: 4,
		coursedescription: 'Basic concepts applicable to all taxpayers with emphasis on taxable income for individuals. Includes gross income, exclusions and deductions from gross income, nonbusiness deductions, gains and losses on sale or exchange of assets, and tax credits. Frequent reference to the Internal Revenue Code and Regulations.',
		postedtime:0,
		courseprereqs: [
			'ACCT214',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'317',
		coursename: 'International Accounting',
		numcredits: 3,
		coursedescription: 'An introduction to international accounting. Topics include comparative development patterns in international accounting, comparative financial accounting practices, foreign currency translation and accounting for changing prices, analysis of foreign financial statements, transfer pricing and international taxation, management accounting in international enterprise.',
		postedtime:0,
		courseprereqs: [
			'ACCT213',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'352',
		coursename: 'Accounting for Entrepreneurs',
		numcredits: 3,
		coursedescription: 'This course is designed to address the needs of the entrepreneur as they relate to financial and managerial accounting issues. Topics will include a basic understanding of financial statements, internal control techniques, relevant business practices and performance measurement concepts.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'411',
		coursename: 'Advanced Accounting',
		numcredits: 4,
		coursedescription: 'Topics include corporate stock investments using the cost and equity methods; consolidation methods; accounting for foreign currency transactions and translation of the statement of foreign subsidiaries; partnership formation, income division, and liquidation; and other current advanced topics.',
		postedtime:0,
		courseprereqs: [
			'ACCT312',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'413',
		coursename: 'Auditing',
		numcredits: 4,
		coursedescription: 'A study of the standards, procedures, and theories guiding the practice of auditing. Topics include: the nature and scope of auditing, auditing standards, ethics, internal control structure, legal obligations, and technical reporting considerations.',
		postedtime:0,
		courseprereqs: [
			'ACCT312',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'414',
		coursename: 'Accounting Information Systems',
		numcredits: 4,
		coursedescription: 'Current methodologies for designing, auditing, and evaluating the storing, processing and retrieving of accounting information. Includes the solving of information system problems, case studies and exposure to contemporary accounting software.',
		postedtime:0,
		courseprereqs: [
			'ACCT311',
		],
	},
	{
		posttype:'course',
		programid:'ACCT',
		coursenumber:'416',
		coursename: 'Federal Income Tax (Advanced)',
		numcredits: 4,
		coursedescription: 'Income tax for other than individuals. Includes depreciation, depletion, partnerships, corporations, especially taxed corporations, net operating losses, gift and estate taxes, and income tax research. Frequent reference to the Internal Revenue Code and Regulations.',
		postedtime:0,
		courseprereqs: [
			'ACCT316',
		],
	},
	// {
	// 	posttype:'course',
	// 	programid:'ACCT',
	// 	coursenumber:'xyz',
	// 	coursename: 'xyz',
	// 	numcredits: 0,
	// 	coursedescription: 'xyz',
	// 	postedtime:0,
	// 	courseprereqs: [
	// 		'xyz',
	// 	],
	// },

	{
		posttype:'course',
		programid:'CIS',
		coursenumber:'255',
		coursename: 'Client-Side Web Application Development',
		numcredits: 4,
		coursedescription: 'This course focuses on web design and the client side of web application development. Topics include XHTML, Cascading Style Sheets (CSS), the Document Object Model, creating dynamic content and architecture, and building/deploying web pages and web sites. A large portion of the class is spent on examining the ECMA/JavaScript client side scripting language. Current topics of interest such as Web 2.0 and AJAX are explored. An introduction to using both commercial and open source web development tools is also provided.',
		postedtime:0,
		courseprereqs: [
			'CS116',
		],
	},
	{
		posttype:'course',
		programid:'CIS',
		coursenumber:'355',
		coursename: 'Server-Side Web Application Development',
		numcredits: 4,
		coursedescription: 'This course focuses on the server side of web application development technologies. Topics include scripting engines, databases, integrated development environments, and application development frameworks. Students will produce a dynamic web application to illustrate their level of mastery of the course topics.',
		postedtime:0,
		courseprereqs: [
			'CS216',
			'CIS255',
		],
	},
	{
		posttype:'course',
		programid:'CIS',
		coursenumber:'357',
		coursename: 'Advanced Programming with Java',
		numcredits: 4,
		coursedescription: 'This course will teach students object-orientation and advanced features of the Java programming language. Object-oriented programming and UML concepts, including the derivation, development and implementation of classes, are introduced. Students will learn the fundamentals of Java as well as topics such as generic classes, threading, exception handling, Swing graphical user interface design, Processing XML documents, Networking, Database programming and persistence.',
		postedtime:0,
		courseprereqs: [
			'CS216',
		],
	},
	
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'105A',
		coursename: 'Fundamentals of Communication',
		numcredits: 3,
		coursedescription: 'Provides the student with basic theory and practice in person-to-person, small group, and public speaking communication processes. Examines characteristics of communicator behavior with communication in relationships as the basic model; message transmission/reception; effects of communication.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'105B',
		coursename: 'Public Speaking',
		numcredits: 3,
		coursedescription: 'Theory and practice in organizing and presenting informational and persuasive messages in various public communication contexts. Emphasizes the communicator\'s adaptations to audiences and speaking situations.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'105C',
		coursename: 'Argumentation',
		numcredits: 3,
		coursedescription: 'Develops skill in critical thinking through argumentation and oral expression.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'220',
		coursename: 'Intro to Performance Studies',
		numcredits: 3,
		coursedescription: 'A beginning course in the analysis and performance of aesthetic texts, grounded in, but not limited to, traditional literary forms(prose, poetry, drama). Performance texts may derive from a variety of aesthetic communication acts. Primarily individual performance; may involve some study of group performance.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'225',
		coursename: 'Nonverbal Communication',
		numcredits: 3,
		coursedescription: 'Study of non-linguistic and para-linguistic dimensions of human communication. Personal space; eye contact/facial behaviors; body language and touching; non-vocal aspects of communication; related topics. Survey of relevant and current research; empirical experiences and observations.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'227',
		coursename: 'Small Group Communication',
		numcredits: 3,
		coursedescription: 'Examines group processes as they embody communication in decision making and problem solving groups. Provides opportunity for students to practice group communication behaviors in semi- structured exercises. Theoretical and practical approaches to group membership, norms, goals, leadership and related small group communication variables.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'230',
		coursename: 'Voice and Articulation',
		numcredits: 3,
		coursedescription: 'An applied approach to developing the student\'s vocal abilities through analysis and classroom exercises. Voices will be refined for conversational as well as theatrical purposes. Dialect and local color will also be analyzed and applied to a variety of vocal \"types.\" Emphasis will be placed upon improving individual voices in a classroom practicum.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'270',
		coursename: 'Communication in Marketplace & Media',
		numcredits: 3,
		coursedescription: 'Enables students to identify and analyze messages and images to which they are exposed as consumers of goods and services and as recipients of information from various advertising sources, printed and electronic.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'275',
		coursename: 'Intro to Public Relations',
		numcredits: 3,
		coursedescription: 'Principles and practice of public relations in modern society, with emphasis on the history, issues, theoretical perspectives and current practices of the profession.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'280',
		coursename: 'Sports Communication',
		numcredits: 3,
		coursedescription: 'Introduces students to the field of sports communication by examining how we communicate about sport, how sport is communicated to us, and what is communicated by sports - each of which represents critical opportunities to evaluate, critique, and improve our communication. This course covers a variety of topics related to communication and sport, including, but not limited to, culture, sex/gender, race and ethnicity, media and journalism, public relations, nationalism, and crisis communication.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'315',
		coursename: 'Persuasion & Attitude Change',
		numcredits: 3,
		coursedescription: 'Examines processes and theories of attitude change; susceptibilities and resistances to persuasion; audience analysis; message formulation and source credibility; verbal and non-verbal components of persuasive communication.',
		postedtime:0,
		courseprereqs: [
			'COMM105A',
			'COMM105B',
		],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'325',
		coursename: 'Business & Professional Communication',
		numcredits: 3,
		coursedescription: 'Principles and skills involved in communication within a variety of organizational and job-related contexts. Explores relationships between presentational approaches to communication and a humanistic view of communication in hierarchical work settings.',
		postedtime:0,
		courseprereqs: [
			'COMM105A',
		],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'345',
		coursename: 'Directing Forensics & Debate',
		numcredits: 3,
		coursedescription: 'An individualized, performance-oriented course designed to involve students in the study of forensics and to prepare them to direct forensics activities at the secondary school level. Standard forensics categories will be covered, and students will become familiar with both the performance activities and the coaching/directing functions.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'351',
		coursename: 'Interpersonal Communication',
		numcredits: 3,
		coursedescription: 'Skills and knowledge which contribute to an understanding of the role of communication in the initiation, maintenance, and dissolution of human relationships in both dyadic and group situations.',
		postedtime:0,
		courseprereqs: [
			'COMM105A',
			'COMM105B',
			'SOC111',
		],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'352',
		coursename: 'Organizational Communication',
		numcredits: 3,
		coursedescription: 'Principles and practice in the management of communication system within formal organizations, with emphasis on information exchange, information management and conflict resolution.',
		postedtime:0,
		courseprereqs: [
			'COMM105A',
			'SOC111',
		],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'365',
		coursename: 'Language, Thought, & Behavior',
		numcredits: 3,
		coursedescription: 'Study of the roles played by language in communication; interactions among our uses of language, the ways in which we think and believe, and our construction of human relationships. Symbolic and abstracting characteristics of language; the perception of meanings; functional and dysfunctional semantic uses of language.',
		postedtime:0,
		courseprereqs: [
			'COMM105A',
			'COMM225',
		],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'370',
		coursename: 'New Media and Society',
		numcredits: 3,
		coursedescription: 'Introduction to the social study of new media. Focuses on changes brought about by the Internet and other digital media in work, leisure, commerce, entertainment, and news. Explores legal and regulatory issues raised by new media, challenges of assuring access, and implications of new media for democracy.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'375',
		coursename: 'Film and Media Criticism',
		numcredits: 3,
		coursedescription: 'Considers film and visual media from diverse perspectives including genre theory, auteur theory, and ideological analysis. Students learn to think and write about visual media in an informed manner. Covers dimensions of visual media including storytelling, mise-en-scene, cinematography, editing, sound, and acting.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'379',
		coursename: 'Research Methods in Human Communication',
		numcredits: 3,
		coursedescription: 'An introduction to communication research methods designed to help students conduct research and critically evaluate research reports. Considers both quantitative and qualitative methods. Topics include hypothesis testing, research design, data analysis, and writing research reports.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'389',
		coursename: 'Family Communication',
		numcredits: 3,
		coursedescription: 'Study of intra-family communication patterns and relationships; examination of communication themes and conflicts in various family settings; effects of communication in traditional and non-traditional family units. Survey of research in the field.',
		postedtime:0,
		courseprereqs: [
			'COMM105A',
			'COMM105B',
			'COMM227',
		],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'405',
		coursename: 'Human Communication Theory',
		numcredits: 3,
		coursedescription: 'Human interaction viewed from an interdisciplinary perspective. Empirical and theoretical approaches to the study of verbal and non-verbal communication behavior. Symbolic interaction; defensive/supportive communication; role and gender contributions to communication; person perception; general systems theory. Survey of research in the field.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'415',
		coursename: 'Communication in Conflict',
		numcredits: 3,
		coursedescription: 'Approaches to the identification and management of intrapersonal, interpersonal, and intra-group conflict, focusing on the role played by communication in generating, escalating, and reducing conflict.',
		postedtime:0,
		courseprereqs: [
			'COMM105A',
			'COMM315',
		],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'435',
		coursename: 'Communication in the Classroom',
		numcredits: 3,
		coursedescription: 'Integrates research from various disciplines. Concentrates on verbal and nonverbal dynamics operating in the classroom environment. Focuses on human motivation, relationship development, communication styles, audience analysis, grading, listening, oral presentation skills, and criticism.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'445',
		coursename: 'Managerial Communication',
		numcredits: 3,
		coursedescription: 'Focuses on behavioral communication processes and communication skills primary to managerial roles. Humanistic and social scientific approaches to such topics as management styles, human motivation, leadership, rumor management, and interviewing. The course combines theory and application. An oral performance is required.',
		postedtime:0,
		courseprereqs: [
			'COMM105A',
		],
	},
	{
		posttype:'course',
		programid:'COMM',
		coursenumber:'452',
		coursename: 'Communication and Leadership',
		numcredits: 3,
		coursedescription: 'Students gain a better understanding of historical and contemporary theories and practices of communication and leadership. The role of communication in leadership processes and practices is emphasized. Students will have the opportunity to develop a better understanding of how communication and leadership connect to their sense of self, others, and organizations in global contexts.',
		postedtime:0,
		courseprereqs: [
			'COMM105A',
		],
	},
	// {
	// 	posttype:'course',
	// 	programid:'COMM',
	// 	coursenumber:'xyz',
	// 	coursename: 'xyz',
	// 	numcredits: 0,
	// 	coursedescription: 'xyz',
	// 	postedtime:0,
	// 	courseprereqs: [
	// 		'xyz',
	// 	],
	// },
	
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'105',
		coursename: 'Intro to Computers & Programming',
		numcredits: 4,
		coursedescription: 'Introduction to computer capabilities, limitations and applications; computer system organization; input, output and secondary storage devices; CPU components; Data communication systems; Database management system; Operating systems; Computer\'s impact on society; problem solving with computers including algorithm development, structured programming and top-down design.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'116',
		coursename: 'Computer Programming I',
		numcredits: 4,
		coursedescription: 'This course presents an introduction to the concepts and techniques of computer programming. Emphasis is placed on developing the student\'s ability to apply problem-solving strategies to design algorithms and to implement these algorithms in the Java Programming language.',
		postedtime:0,
		courseprereqs: [
			'MATH103',
			'CS105',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'146',
		coursename: 'Visual Basic .NET Programming',
		numcredits: 4,
		coursedescription: 'Algorithm and problem-solving methods, design and development of modular programs using the Visual BASIC Language including numeric and string operations, input and output operations, decision constructs, repetitive constructs, array processing, graphics, and sequential and random file processing.',
		postedtime:0,
		courseprereqs: [
			'CS105',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'216',
		coursename: 'Computer Programming II',
		numcredits: 4,
		coursedescription: 'This course continues the development of computer programming techniques introduced in CS116. Topics include data abstraction, object-oriented programming, linear and nonlinear data structures and analysis of sort and search routines including inheritance, polymorphism, recursion lists, linked-lists, stacks, queues and binary trees.',
		postedtime:0,
		courseprereqs: [
			'CS116',
			'MATH120A',
			'MATH120B',
			'MATH140',
			'MATH161',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'245',
		coursename: 'Statistics & Its Applications in Computer Science',
		numcredits: 4,
		coursedescription: 'This course will focus on topics such as statistics, probability theory, sampling theory, and statistical inference when applied to the field of computer science and information systems. Additional topics will include data collection, analysis, interpretation, and handling massive data sets with examples from the field of computer information systems.',
		postedtime:0,
		courseprereqs: [
			'CS116',
			'MATH120B',
			'MATH140',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'316',
		coursename: 'Data Structures & Algorithm Analysis',
		numcredits: 4,
		coursedescription: 'This course presents an introduction to advanced data structures using object oriented C++ language features. Topics include abstract levels of data type, classes, member functions, access ability, recursion, AVL-trees, B-trees and general trees, graphs, sorting, searching, hashing, complexity and efficiency of algorithms, data compressions, and memory management.',
		postedtime:0,
		courseprereqs: [
			'CS216',
			'MATH300',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'331',
		coursename: 'Computer Organization & Assembly Language',
		numcredits: 4,
		coursedescription: 'This course presents an introduction to low-level computer architecture and its relationship to assembly language programming. Topics include number systems, Boolean algebra, logic gates, simplification of Boolean functions, combinational logic, sequential logic, machine organization, assembly language programming, the interface of low-level language to the architecture and to higher-level programming languages, the assembly/link/loading process, and machine representation of data/instructions.',
		postedtime:0,
		courseprereqs: [
			'CS216',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'345',
		coursename: 'UNIX & System Administration',
		numcredits: 4,
		coursedescription: 'This course presents a study of the administration of a UNIX system. Topics include the UNIX file structure, configuration files in UNIX, daemons, cron/crontab, e-mail, backup and restore, C-shell, Bourne shell, UNIX commands and command-line options, and UNIX system security.',
		postedtime:0,
		courseprereqs: [
			'CS216',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'401',
		coursename: 'Computer Networks',
		numcredits: 4,
		coursedescription: 'This course presents the theoretical concepts necessary to understand the complex problem of computer networking. Topics include computer network architectures and models, bandwidth limitations of physical media, analog and digital signaling methods, data link protocols, error detection and correction, medium access control in broadcast networks, routing algorithms, internetworking, the Internet Protocol, connection management, transport services including TCP/UDP, network applications, local-area and wide-area networks.',
		postedtime:0,
		courseprereqs: [
			'CIS357',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'403',
		coursename: 'Mobile App Development',
		numcredits: 4,
		coursedescription: 'This course examines mobile application development for small footprint devices. Development strategies, issues and limitations pertaining to mobile devices will be presented. Current techniques, toolsets and application frameworks will be provided with students producing several mobile applications.',
		postedtime:0,
		courseprereqs: [
			'CIS355',
			'CS401',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'411',
		coursename: 'Database Systems',
		numcredits: 4,
		coursedescription: 'This course presents concepts in database systems. Topics include: basic file structures, database system concepts and architecture, relational data models, formal languages for the relational model, normalization and database design processes, database transaction processing concepts, and emerging trends.',
		postedtime:0,
		courseprereqs: [
			'CS216',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'421',
		coursename: 'Software Engineering I',
		numcredits: 4,
		coursedescription: 'This course concentrates on tools and methodologies for constructing software systems using software engineering techniques. Topics include software development lifecycles, requirement elicitation, systems modeling, domain modeling, actor-interface modeling, architecture modeling, storyboarding/UI design, behavior modeling and object modeling. The course will culminate with a group project in which a software requirements specification will be delivered including relevant analysis, design and prototyping work.',
		postedtime:0,
		courseprereqs: [
			'CIS355',
			'CIS357',
			'CS401',
			'CS411',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'446',
		coursename: 'Operating Systems',
		numcredits: 4,
		coursedescription: 'This course presents an introduction to the design and implementation of both traditional and distributed operating systems. Topics include processes, memory management, file systems, I/O, deadlocks, distributed systems, synchronization, distributed file systems, and case studies.',
		postedtime:0,
		courseprereqs: [
			'CS331',
			'CIS357',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'451',
		coursename: 'Programming Language Concepts',
		numcredits: 4,
		coursedescription: 'An examination of the principles behind the design of programming languages (iterative, functional, logic, structured and object-oriented): syntactical design, semantics, control structures, data types and structures, memory usage and other implementation issues. Topics such as lexical analysis & parsing, interpretive languages, binding times and run time considerations will also be presented.',
		postedtime:0,
		courseprereqs: [
			'CS316',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'461',
		coursename: 'Theory of Computation',
		numcredits: 4,
		coursedescription: 'This course provides an introduction to basic models of computational complexity and the representation of infinite objects. Topics that will be examined including grammars, finite state machines, automata theory, Turing machines, computability and decidability, regular and context free languages.',
		postedtime:0,
		courseprereqs: [
			'CS316',
		],
	},
	{
		posttype:'course',
		programid:'CS',
		coursenumber:'471',
		coursename: 'Software Engineering II',
		numcredits: 4,
		coursedescription: 'This course provides a continuation of the senior CSprojects initiated in CS421. Students will be required to implement and deliver a large scale system in a group-based project environment. Programming languages and coding, software maintenance, software quality, CASE and configuration management will be covered. This course will focus on the design, coding and testing phases of the software development lifecycle.',
		postedtime:0,
		courseprereqs: [
			'CS421',
		],
	},
	
	{
		posttype:'course',
		programid:'ENGL',
		coursenumber:'080',
		coursename: 'Writing Skills',
		numcredits: 3,
		coursedescription: 'Practice in the generation of short essays and in the recognition and elimination of errors in style, usage, and sentence structure. Attention to individual needs.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'ENGL',
		coursenumber:'103',
		coursename: 'College Reading and Learning',
		numcredits: 4,
		coursedescription: 'Addresses college-level reading requirements. Introduces students to increasingly complex academic texts in disciplines such as social sciences, health and allied sciences, or humanities, while building relevant background knowledge and vocabulary. Embedded tutors may supplement course activities. Fulfills the basic skills requirement in reading. May be repeated.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'ENGL',
		coursenumber:'104',
		coursename: 'Strategies for Academic Success',
		numcredits: 3,
		coursedescription: 'Develops reading and study strategies appropriate to complex academic texts in disciplines such as social sciences, health and allied sciences, or humanities. Course activities will focus on recognizing organizational patterns common to academic genres within these disciplines and applying learning methods appropriate to college-level courses.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'ENGL',
		coursenumber:'111',
		coursename: 'Composition I',
		numcredits: 4,
		coursedescription: 'Frequent writing assignments to produce informal and formal texts, with emphasis on academic thinking and writing. Develops effective writing processes, from inventing and investigating through organizing, drafting, revising, and editing. Helps students meet the needs of their readers. Includes workshop approaches to develop students\' ability to analyze and evaluate their own writings as well as the writings of others.',
		postedtime:0,
		courseprereqs: [
			'ENGL080',
		],
	},
	
	{
		posttype:'course',
		programid:'MATH',
		coursenumber:'082',
		coursename: 'Beginning Algebra',
		numcredits: 4,
		coursedescription: 'Introduction to sets, axioms, factoring, first and second degree equations and inequalities, graphs, exponents and radicals. Not applicable to General Education requirements and/or minor requirements.',
		postedtime:0,
		courseprereqs: [
			'MATH081',
		],
	},
	{
		posttype:'course',
		programid:'MATH',
		coursenumber:'161',
		coursename: 'Calculus I',
		numcredits: 4,
		coursedescription: 'Introduction to limits, continuity, derivatives, and integrals. Applications of derivatives and integrals.',
		postedtime:0,
		courseprereqs: [
			'MATH140',
		],
	},
	{
		posttype:'course',
		programid:'MATH',
		coursenumber:'162',
		coursename: 'Calculus II',
		numcredits: 4,
		coursedescription: 'Derivatives and integrals of non-algebraic functions. Techniques of integration. Improper integrals. Further applications of derivatives and integrals. Parametric equations and polar coordinates. Analytic geometry and conic sections. Infinite sequences and series.',
		postedtime:0,
		courseprereqs: [
			'MATH161',
		],
	},
	{
		posttype:'course',
		programid:'MATH',
		coursenumber:'223',
		coursename: 'Matrix Algebra',
		numcredits: 4,
		coursedescription: 'This course examines linear systems, Gaussian elimination, matrix operations, determinants, vector spaces, linear transformations, eigenvalues, eigenvectors, diagonalization, inner product spaces, and applications.',
		postedtime:0,
		courseprereqs: [
			'MATH161',
		],
	},
	{
		posttype:'course',
		programid:'MATH',
		coursenumber:'300',
		coursename: 'Discrete Mathematical Structures',
		numcredits: 3,
		coursedescription: 'Sets, logic and induction, combinations and permutations, graph theory, functions and relations, Boolean algebras and other structures, isomorphisms, homomorphisms, finite state machines.',
		postedtime:0,
		courseprereqs: [
			'MATH161',
		],
	},
	{
		posttype:'course',
		programid:'MATH',
		coursenumber:'304',
		coursename: 'Applied Probability & Statistics',
		numcredits: 3,
		coursedescription: 'Intended for students who have had one year of calculus. Basic probability theory, applications using combinations, continuous and discrete random variables, estimation, test of hypotheses, correlation and regression, and confidence intervals.',
		postedtime:0,
		courseprereqs: [
			'MATH162',
		],
	},

	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'235',
		coursename: 'Statistics I',
		numcredits: 3,
		coursedescription: 'Collection, analysis and statistical interpretation of data which include description of data, elementary probability theory, sampling, statistical estimation and inference.',
		postedtime:0,
		courseprereqs: [
			'MATH120B',
			'MATH141',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'236',
		coursename: 'Statistics II',
		numcredits: 3,
		coursedescription: 'Application of statistical techniques to forecasting and other business and economics problems. Topics covered are regression, correlation, analysis of variance, time series and index numbers, some nonparametric techniques and Bayes\' Theorem.',
		postedtime:0,
		courseprereqs: [
			'ECON235',
			'MKT235',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'331',
		coursename: 'Marketing Principles',
		numcredits: 4,
		coursedescription: 'Course embraces both micro and macro approaches with emphasis on the former. Content includes: assessment of marketing\'s role in society; analysis of buyer behavior; administration of domestic and international marketing programs; treatment of marketing information/communication systems; and consideration of socio-economic, political and technical factors affecting marketing decisions.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'332',
		coursename: 'Retail Management',
		numcredits: 3,
		coursedescription: 'An examination of essential principles and practices of retail management, including site selection, store design and department layout, merchandise management, sales promotion and customer services. Additionally, the course considers the broad issues of modern marketing and financial strategies as they affect retail distribution and clarifies new influences at work in the retail environment.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'333',
		coursename: 'Sales Management',
		numcredits: 3,
		coursedescription: 'Understanding and development of a set of pervasive, relatively universal sales and management concepts, into which different "contents" can be put and applied to different situations. Case and/or fieldwork may be used to illustrate the concepts.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'334',
		coursename: 'Physical Distribution Management',
		numcredits: 3,
		coursedescription: 'The orientation of the course is concerned with the efforts of an individual firm\'s objective to develop an effective and efficient physical distribution system. Parts of the system are studied and analytical tools are presented for selecting those alternatives which will attain the distribution goals of the firm.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'335',
		coursename: 'Advertising Strategy',
		numcredits: 3,
		coursedescription: 'An intensive investigation of the underlying ideas, principles and concepts which may be used to inform consumers of the availability and attributes of products and services.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'336',
		coursename: 'Services Marketing',
		numcredits: 3,
		coursedescription: 'Course focuses on the practical techniques for defining and meeting the needs of each set of an organization\'s external and internal customers. Emphasizes the key drivers of service: empowered employees and customers; creating a culture of service; customer-focused information systems; incentives for customer service; and the leadership roles of senior, middle, and lower levels of management.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'337',
		coursename: 'Industrial Marketing',
		numcredits: 3,
		coursedescription: 'An examination of the problems of marketing industrial goods. Attention is given to market information, marketing planning, methods of distribution, pricing, promotion and distributor/ dealer systems.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'339',
		coursename: 'Field Project in Marketing',
		numcredits: 3,
		coursedescription: 'Students in this class will manage and operate a retail business in the Fall semester each year. Students will be responsible for customer service, merchandise display, signage creation and placement, point-of-purchase displays, employee training and marketing research.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'342',
		coursename: 'Experiential Learning in Global Business',
		numcredits: 3,
		coursedescription: 'The course provides students with an academic and experiential learning opportunity abroad. The primary goal of the course is to learn how to do business in an international setting.',
		postedtime:0,
		courseprereqs: [
			'MGT321',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'346',
		coursename: 'Franchising',
		numcredits: 3,
		coursedescription: 'This course takes an entrepreneurial view of starting and managing a new franchise from both the perspective of the franchisor and franchisee. Emphasis is placed on recognizing and evaluating opportunities for franchise entrepreneurs, the development of appropriate strategies and plans, and the implementation and launch of a new franchise.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'432',
		coursename: 'International Marketing',
		numcredits: 3,
		coursedescription: 'Study of global marketing management, international marketing research and overseas personnel policies. Study of marketing systems in the context of overall economic growth.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'433',
		coursename: 'Personal Selling',
		numcredits: 4,
		coursedescription: 'Understanding the value of developing personal selling skills by exposing students to a personal selling academic theory, role play scenarios, and real­-world applications and ethical dilemmas. The course also studies the role of selling in the entire marketing process.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'434',
		coursename: 'Consumer Behavior',
		numcredits: 4,
		coursedescription: 'Investigation of consumer marketing structure and behavior and their impact upon the firm\'s competitive operations and actions.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'435',
		coursename: 'Marketing Analytics',
		numcredits: 4,
		coursedescription: 'This course will provide a fundamental understanding of the marketing research methods utilized by businesses. Topics covered in this course will also help managers harness the power of big data using the latest tools and analytical techniques to drive marketing efforts forward.',
		postedtime:0,
		courseprereqs: [
			'ECON335',
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'436',
		coursename: 'Marketing Strategy',
		numcredits: 4,
		coursedescription: 'Study of the substantive and functional aspects of marketing strategy. It covers the elements of marketing analysis and the marketing mix. Students will have the opportunity to analyze a number of contemporary marketing cases as well as develop a marketing plan to illustrate the integration of the four tools of the marketing mix, product, price, distribution, and promotion, in development of the firm\'s total marketing effort. The course is intended as a marketing capstone and will require students to integrate knowledge from other marketing courses.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'444',
		coursename: 'Social Media Marketing',
		numcredits: 4,
		coursedescription: 'This course examines the use of Social Media as a unique channel for marketing to consumers and businesses. Specifically, it will look at issues such as Social Media strategy, online consumer behavior, network effects, online branding and traffic building, personalized marketing, and the use of Social Media analytical tools to assess a success of Social Media marketing campaign.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'445',
		coursename: 'Digital Marketing and Analytic',
		numcredits: 4,
		coursedescription: 'The course is designed to shed some light on digital marketing concepts, strategies, and the use of current digital technologies. Additionally, this course will address the use of digital data analytics for marketing purposes.',
		postedtime:0,
		courseprereqs: [
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'451',
		coursename: 'Creativity & Business Feasibility Analysis',
		numcredits: 4,
		coursedescription: 'This course requires students to develop a business idea along with extensive testing of its feasibility in the market. The class will incorporate elements of design think and creativity training. Market analysis of the feasibility of the venture will be conducted through questionnaires, interviews and focus groups, as well as through trade publications and business databases. The study will be utilized throughout courses in the minor and will form the basis of the business plan in MGT 459 - New Venture Commercialization.',
		postedtime:0,
		courseprereqs: [
			'MGT351',
			'MKT331',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'453',
		coursename: 'Advanced Selling and Negotiation',
		numcredits: 4,
		coursedescription: 'This course develops skills to understand customer need analysis, create effective presentation and interpersonal communication, examine advanced negotiation, and develop sales planning. Several methods such as role-playing and cases will be used.',
		postedtime:0,
		courseprereqs: [
			'MKT433',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'455',
		coursename: 'Entrepreneurship Project',
		numcredits: 3,
		coursedescription: 'The focus is to facilitate the survival and growth of existing small businesses that are owned and managed by local entrepreneurs. Thus, students will be organized into teams, and each team will be assigned a consulting client. Through an evolving series of steps each team will identify value-creating deliverables for the client, and a final consulting report.',
		postedtime:0,
		courseprereqs: [
			'MGT351',
		],
	},
	{
		posttype:'course',
		programid:'MKT',
		coursenumber:'459',
		coursename: 'Business Plan Seminar',
		numcredits: 3,
		coursedescription: 'The Business Plan Seminar focuses on the mechanics of constructing a creative, realistic, and effective business plan for a new concept developed by the student. The course is intended as a "hands-on" experience that explores the process of creating a professional business plan for a new venture either in an existing business or as an entrepreneur.',
		postedtime:0,
		courseprereqs: [
			'ACCT352',
			'FIN311',
			'MGT351',
		],
	},
	// {
	// 	posttype:'course',
	// 	programid:'MKT',
	// 	coursenumber:'xyz',
	// 	coursename: 'xyz',
	// 	numcredits: 0,
	// 	coursedescription: 'xyz',
	// 	postedtime:0,
	// 	courseprereqs: [
	// 		'xyz',
	// 	],
	// },
	
	{
		posttype:'course',
		programid:'PHIL',
		coursenumber:'205A!',
		coursename: 'Professional Ethics: Business',
		numcredits: 3,
		coursedescription: 'An introduction to moral theory, with special attention to major ethical issues that arise in the practice of American business. These may include the morality of the free market, the nature of property, product liability, advertising, management versus employee rights, whistle-blowing, health and safety issues, affirmative action, comparable worth and the environment.',
		postedtime:0,
		courseprereqs: [
			'ENGL111',
		],
	},
	
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'100',
		coursename: 'General Psychology',
		numcredits: 4,
		coursedescription: 'Introduction to principles and methods utilized in the scientific study of human behavior. Emphasis will be on surveying the principles of sensation and perception, learning, motivation, emotion, intelligence, psychological testing, abnormal behavior, social psychology and the physiological bases of behavior. The format of this course is variable. Some sections will have a large lecture-small recitations format. Other sections will be single section classes.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'202',
		coursename: 'Scientific Foundations of Psychology',
		numcredits: 3,
		coursedescription: 'This class aims to provide a foundation of academic skills for those intending to major in psychology at SVSU, as well as those wishing to pursue careers involving applications of psychological science. The basic objective of this course is to help students acquire an appreciation of the scientific perspective as it is implemented in psychology. Students will learn how scientific questions are developed; how logical and empirical arguments are constructed; the role of established theory in the development of questions; the general types of methods used to answer questions in psychology; and the range of professional and ethical issues and career opportunities involved in the investigation or application of psychological questions. Emphasis will also be given to reading and searching the literature, and becoming familiar with oral and written forms of presentation in psychology.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'255',
		coursename: 'Personal & Social Adjustment',
		numcredits: 4,
		coursedescription: 'The dynamics of personal and social adjustment with an emphasis on stress, friendship, sexual needs, marriage, family, occupation and environment. Not applicable to the psychology major.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'299',
		coursename: 'Statistics',
		numcredits: 4,
		coursedescription: 'Methods of descriptive and inferential statistics as applied to psychology. Measures of central tendency and variability, graphic presentation of data, T-test, chi-square, analysis of variance and correlation.',
		postedtime:0,
		courseprereqs: [
			'MATH082',
			'PSYC100',
			'PSYC202',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'302',
		coursename: 'Computer Applications / Data Analysis',
		numcredits: 2,
		coursedescription: 'Introduction to the use of statistical software packages for performing data analysis. Emphasis will be on the types of procedures typically associated with psychological research. Topics include: basics of using microcomputers, data input, data manipulation, descriptive statistics, and the major parametric and non-parametric inferential statistical tests.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'305',
		coursename: 'Experimental Psychology',
		numcredits: 4,
		coursedescription: 'Introduction to quantitative and experimental techniques of psychology as a natural and social science. Course work covers experimental designs, data collection, evaluation and interpretation of results. Laboratory investigation of selected problems will be conducted in order that the student learn the principles involved in the design, execution and formal reporting of experiments.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'310',
		coursename: 'Child Psychology',
		numcredits: 3,
		coursedescription: 'The development of human behavior and the factors that underlie that development. The course will cover the entire period of childhood with emphasis on behavior during the prenatal and infant periods, preschool years and school years up to puberty. Among topics treated are perception, emotion, language, intelligence, social behavior and thinking.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'311',
		coursename: 'Theory / Research in Child Development',
		numcredits: 4,
		coursedescription: 'This course will provide in-depth coverage of major theories of social, emotional and cognitive development as well as current research in child psychology. Developmental research methods and the examination of research studies will be a particular focus of the course. The course will cover biological and cultural foundations of development, prenatal development, infancy, early childhood and middle childhood.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'311L',
		coursename: 'Developmental Psychology Lab',
		numcredits: 1,
		coursedescription: 'A laboratory course introducing students to research designs and techniques used in developmental psychology. Students gain experience designing studies as well as collecting, analyzing and presenting data.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
			'PSYC305',
			'PSYC210',
			'PSYC311',
			'PSYC314',
			'PSYC410',
			'PSYC415',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'313',
		coursename: 'Child Development in Education',
		numcredits: 4,
		coursedescription: 'This course will introduce students to fundamental theories and principles of child psychology and explore their applications to educational contexts. To prepare students to be critical consumers of research, the course will focus on research methods in developmental and educational psychology. Course topics will include genome-environment interactions and prenatal development as foundations for later development. Physical, cognitive, and social/emotional development from birth to age 12 will be covered in the context of educational applications. Students will also learn to use and interpret psychological and educational assessments.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'314',
		coursename: 'Infant Development',
		numcredits: 3,
		coursedescription: 'This course covers theories and research methods used in studying the development of human infants and toddlers from conception through three years of age. The course addresses both theory and research about their perceptual, cognitive and psychosocial development toddlers. Coverage includes biological and psychosocial factors that affect prenatal and postnatal development, early signs of developmental problems, and the role of parent/child interaction in cognitive and social development. Techniques and methods used for studying children of this age will be emphasized, and ethical concerns that pertain to working with this protected class of research participants are stressed throughout the course.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'315',
		coursename: 'Adolescent Psychology',
		numcredits: 3,
		coursedescription: 'This course will introduce the student to the personality dynamics involved in the developmental phenomena of the teen years and with significance of adolescence in the total life span. The physical, emotional, intellectual, educational, vocational, social and sexual areas of the adolescent\'s life are evaluated in light of recent experimental studies and of clinical experience. Special attention is paid to the impact of 20th century American culture and society on individual development, drawing on anthropological and sociological research for comparative data.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'317',
		coursename: 'Educational Psychology',
		numcredits: 3,
		coursedescription: 'Students are introduced to the major principles of laboratory learning as applied to conceptual learning, problem solving and the development of emotional behavior, attitudes, values and acquisition of skills. The major variables affecting efficiency of learning in the school learning-teaching situation will be studied. Instructional techniques based on psychological principles affecting motivation, learning, retention and transfer, as well as techniques for the measurement of student abilities and achievement will be studied.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'TEMS334',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'320',
		coursename: 'Psychology of Learning',
		numcredits: 3,
		coursedescription: 'An examination of the principles of conditioning, trial and error learning, problem-solving, conceptual learning, retention and forgetting.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'320L',
		coursename: 'Psychology of Learning Lab',
		numcredits: 1,
		coursedescription: 'The laboratory includes an introduction to basic methodology and laboratory techniques used to establish these principles and the completion of assigned experiments dealing with selected problems in learning. (0-2)',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
			'PSYC305',
			'PSYC320',
			'PSYC330',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'330',
		coursename: 'Motivation',
		numcredits: 3,
		coursedescription: 'A concentration on current motivation theories and recurrent issues in the history of motivational psychology Evolutionary, behavioral, cognitive, and cybernetic-systems approaches to motivational psychology are addressed. The roles of physiological, psychological and social needs, and the effects of intrinsic and extrinsic motivation are addressed as they pertain to topics such as: effort and persistence; goal-seeking; learning and adaptation; autonomy and self-regulation; power and aggression; achievement and competence; affiliation, etc.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'330L',
		coursename: 'Motivation Lab',
		numcredits: 1,
		coursedescription: 'Basic experimental procedures for investigating motivational processes under controlled and natural conditions. The traditional methodologies used are replications of procedures in major psychological and cognitive systems and are carried out in the laboratory setting. Students are also directed to developing variations of tried techniques for projects carried on outside the laboratory. (0-2)',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
			'PSYC305',
			'PSYC330',
			'PSYC370',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'335',
		coursename: 'Comparative Psychology',
		numcredits: 4,
		coursedescription: 'This course uses the study of animals in their natural environment as a model for understanding human behavior. As animal behavior and physiology can be understood as the result of natural selection, so too can human behavior and physiology. By so doing such topics as parental care, mate choice, communication, social behavior, territoriality, aggression and altruism are explored.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'335L',
		coursename: 'Comparative Psychology Lab',
		numcredits: 1,
		coursedescription: 'The laboratory will focus on the study of animals in their natural environment, including humans. This will include field observations, literature reviews, and replications of human studies.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
			'PSYC305',
			'PSYC335',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'340',
		coursename: 'Physiological Psychology',
		numcredits: 4,
		coursedescription: 'A functional integrative approach to psychophysiological mechanisms underlying behavior and mental processes. Emphasis will be on psychophysiological mechanisms, integrative action of the nervous system and the neurophysiological mechanisms involved in learning, perception, sensation, motivation and emotions.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'340L',
		coursename: 'Physiological Psychology Lab',
		numcredits: 1,
		coursedescription: 'Laboratory will include a study of selected problems in the areas of sensory-perceptual, learning, motivational problems relative to the participation of neurophysiological processes. (0-2)',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
			'PSYC305',
			'PSYC340',
			'PSYC345',
			'PSYC346',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'343',
		coursename: 'Sleep & Dreams',
		numcredits: 3,
		coursedescription: 'An exploration of the basics of sleep and dream research with an emphasis on physiological, behavioral, cultural, and clinical issues. Topics include sleep stages, circadian rhythms, developmental sleep patterns, sleep deprivation, sleep disorders, and healthy sleep habits. Theories of sleep and dreams, cultural differences, and dream interpretation will also be covered.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'345',
		coursename: 'Sensation and Perception ',
		numcredits: 3,
		coursedescription: 'Emphasis will be on the methods and results of psychophysical, physiological and social approaches to the investigations of sensation and perception.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'345L',
		coursename: 'Sensation and Perception Lab',
		numcredits: 1,
		coursedescription: 'Laboratory investigations of selected problems in vision, audition and perception will be conducted in order to introduce the student to the basic principles involved in the design and execution of psychological experiments dealing with sensory- perceptual processes. (0-2)',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
			'PSYC305',
			'PSYC340',
			'PSYC345',
			'PSYC425',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'346',
		coursename: 'Neuropsychology',
		numcredits: 4,
		coursedescription: 'This course provides an introduction to basic neuroscience, brain-behavior relationships, and neuropsychological disorders. Emphasis is on basic neuroanatomy, neurophysiology, neuropsychological bases of normal cognition, and clinic neuropsychological disorders. The application of these basic concepts and theories to clinical cases is explored through reading case studies and reviewing audio- and videotaped clinical examples.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'350',
		coursename: 'Social Psychology',
		numcredits: 3,
		coursedescription: 'An introductory study of the individual in society. Attention will be given to the concepts of role, attitude, interpersonal interaction, group membership and culture as determinants of individual actions. Prejudice, interpersonal attraction, power, leadership, mass phenomena and group efficiency will be considered.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'350L',
		coursename: 'Social Psychology Lab',
		numcredits: 1,
		coursedescription: 'This laboratory includes an introduction to basic research methodology in social psychology, both experimental and field. Participation requires completion of projects that involve design, data collection, analysis and written reports. (0-2)',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
			'PSYC305',
			'PSYC350',
			'PSYC380',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'367',
		coursename: 'Behavior Modification',
		numcredits: 3,
		coursedescription: 'A lecture course in which students are exposed to and apply research and theory from behaviorism and experimental psychology. Methods of influencing behavior for purposes of resolving personal and social problems, and enhancing human functioning will be explored.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'370',
		coursename: 'Theories of Personality',
		numcredits: 3,
		coursedescription: 'A survey of the major theories of personality with reference to supporting empirical data. Psychoanalytic, biological, social, factor analytic, field, stimulus-response, constitutional and biosocial theories will be considered.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'370L',
		coursename: 'Laboratory in Personality',
		numcredits: 1,
		coursedescription: 'A laboratory course concerned with the experimental investigation of personality dynamics and the effects of individual differences on social interaction; stress and anxiety; response set; cognitive styles, risk-taking and subjective probabilities. Laboratory demonstrations and experiments conducted by the students are designed to clarify issues in the experimental study of personality and to provide experience with a wide variety of investigative techniques. (0-2)',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
			'PSYC305',
			'PSYC330',
			'PSYC370',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'372',
		coursename: 'Abnormal Psychology',
		numcredits: 4,
		coursedescription: 'Introduction to major neurotic, psychotic, psychosomatic and organic syndromes. Examination of the nature, extent, causes, conditions and treatment of abnormal behavior.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'373',
		coursename: 'Clinical Interviewing',
		numcredits: 3,
		coursedescription: 'An introduction to the basic principles of clinical interviewing. The various major systems of psychotherapy/counseling are reviewed, as are the basic skills of interviewing for the helping professions. Students are exposed to a variety of theoretical orientations to interviewing, and will apply/compare/contrast them while evaluating their empirical merit. Students will also be introduced to the major principles and contemporary issues in the field of clinical psychology, such as ethical behavior, multicultural competence, evidence-based practice, and professional training.',
		postedtime:0,
		courseprereqs: [
			'PSYC370',
			'PSYC372',
			'PSYC373L',
			'PSYC374',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'373L',
		coursename: 'Clinical Interviewing Lab',
		numcredits: 1,
		coursedescription: 'A laboratory experience that provides opportunities to practice interviewing skills. In conjunction with the Clinical Interviewing lecture course, students will engage in hands-on practice of the interviewing techniques involved in many helping professions. Students will apply theoretical frameworks from clinical/counseling psychology, and will engage in a variety of role-play experiences.',
		postedtime:0,
		courseprereqs: [
			'PSYC373',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'374',
		coursename: 'Psychology of Disorders in Childhood & Adolescence',
		numcredits: 3,
		coursedescription: 'Consideration of childhood and adolescent psychological disorders and their development. Major emphases are the relationship of psychological disorders to psychological development, and to subsequent adult disorders.',
		postedtime:0,
		courseprereqs: [
			'PSYC210',
			'PSYC310',
			'PSYC311',
			'PSYC315',
			'PSYC410',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'375',
		coursename: 'Psychological Assessment',
		numcredits: 4,
		coursedescription: 'An introduction to the principles and methods of psychological assessment in the measurement of human traits and abilities. The fundamental concepts of test theory and test construction, as well as the evaluation and interpretation of test results will be considered for tests in areas of intelligence, aptitude, achievement and personality.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC299',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'380',
		coursename: 'Cultural Psychology',
		numcredits: 4,
		coursedescription: 'An exploration of the reciprocal interaction between culture and human behavior. Topics include emotion, cognition, language and communication, gender, ethnicity, identity, health and illness, and psychopathology. These issues will be examined from psychological and developmental perspectives, and in a multi-disciplinary manner, based on theory and research from a variety of relevant socialscientific fields.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'385',
		coursename: 'Psychology of Sex, Gender & Sexuality',
		numcredits: 4,
		coursedescription: 'xyz',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'400',
		coursename: 'Advanced Statistics',
		numcredits: 4,
		coursedescription: 'A second course in statistics which considers such topics as advanced analysis of variance and related analyses, non-parametric techniques and regression analysis.',
		postedtime:0,
		courseprereqs: [
			'PSYC299',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'405',
		coursename: 'Nonexperimental Research Methods',
		numcredits: 4,
		coursedescription: 'This is an advanced course on research methods focusing on non-experimental inquiry such as qualitative, correlational, survey and mixed-method (observations, self-report) studies. It will involve lectures/interactive workshops to develop and apply research skills to interpret, critique and synthesize research and design a research proposal feasible to conduct at SVSU. Students will learn about ethics, designs, measurement issues, secondary data possibilities, and develop professional communication skills of technical writing/oral presentation. They will also learn to apply statistical methods for their proposed studies. This course is particularly recommended for students bound for graduate study in psychology or other social sciences.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
			'PSYC305',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'410',
		coursename: 'Seminar on Life Span Human Development',
		numcredits: 4,
		coursedescription: 'An advanced seminar on human development, emphasizing class discussion and field experience. Readings focus on psychosocial development, and exploration of biological and sociocultural contexts as well as research methods. Cognitive, social and emotional development, developmental tasks, social roles, coping skills, and interpersonal relationships are addressed. The field component involves the development of structured interviews and interviewing members of the community about their lives. The interviews are reported back to the seminar group, and serve as real-life data to which theory and research is applied, towards understanding human development.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'415',
		coursename: 'Psychology of Adulthood and Aging',
		numcredits: 4,
		coursedescription: 'This course provides students with current information on development in adulthood and aging. Topics include demographic trends; research methods, psychological theories of aging, physical, cognitive, social, and personality development over the adult lifespan, and issues of mental health. Useful for gerontology minor, and all those intending to provide services to older adults.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC210',
			'PSYC310',
			'PSYC311',
			'PSYC315',
			'PSYC410',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'420',
		coursename: 'Psychology of Language',
		numcredits: 4,
		coursedescription: 'This course will introduce the student to psycholinguistics, including theories of language acquisition, the biological underpinnings of language, issues of speech production and comprehension, pragmatics and conversational speech, and word/concept representations. Discussion of these topics will include cross-cultural and cross-linguistic differences in languages. This course will focus on how language and the words we use reflect underlying thought processes.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'425',
		coursename: 'Cognitive Processes',
		numcredits: 3,
		coursedescription: 'The main purpose of this course is to enable the student to examine critically the theories and related research in the area of complex human behavior. The course will explore the following areas: verbal learning and language development, formation and use of concepts, problem solving approaches and strategies, creative thinking, judgment, and decision making. The emphasis will be on research methodology and research findings in these areas.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC305',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'425L',
		coursename: 'Cognitive Processes Lab',
		numcredits: 1,
		coursedescription: 'An advanced laboratory dealing with research techniques in cognitive processes. (0-2)',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
			'PSYC202',
			'PSYC299',
			'PSYC302',
			'PSYC305',
			'PSYC345',
			'PSYC425',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'430',
		coursename: 'Psychoanalytic Theory',
		numcredits: 3,
		coursedescription: 'A study of psychoanalytic theory, both as a theory of personality and motivation, and as a treatment modality for emotional disorders. Case material will be included to illustrate the use of psychoanalysis in treatment.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'453',
		coursename: 'Industrial / Organizational Psychology',
		numcredits: 3,
		coursedescription: 'Survey of theories of individual behavior in complex organizations, including job analysis, personnel selection and appraisal, satisfaction, morale, leadership, organizational and social context of human work, physical psychological environments and consumer behavior.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'455',
		coursename: 'Group Dynamics',
		numcredits: 3,
		coursedescription: 'Forces influencing the behavior of a group\'s members, cohesiveness, social structure, emotional factors, leadership and the development of groups. Students will be given the opportunity to practice skills of group membership, including various leadership functions.',
		postedtime:0,
		courseprereqs: [
			'PSYC350',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'470',
		coursename: 'Health Psychology',
		numcredits: 4,
		coursedescription: 'Explores links between health and out behavior, thoughts, emotions, and social relationships. It uses methods of psychology research and practice to help prevent disease, promote recovery, and promote adaptation with ongoing health problems. The course covers research methods, personality as related to stress and coping, health behaviors, several specific medical conditions, rehabilitation, health communication, and the social construction of health and illness.',
		postedtime:0,
		courseprereqs: [
			'PSYC100',
		],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'484',
		coursename: 'Ethical, Professional & Philosophical Problems in Psychology',
		numcredits: 2,
		coursedescription: 'A consideration of ethics, professional responsibility and philosophy of science as the psychologist confronts them in research, teaching, consultation, private practice and clinical settings.',
		postedtime:0,
		courseprereqs: [],
	},
	{
		posttype:'course',
		programid:'PSYC',
		coursenumber:'488',
		coursename: 'History & Systems of Psychology',
		numcredits: 4,
		coursedescription: 'Major areas of psychology will be traced from their origins in early Greek philosophy; survival through the dogmas of the Dark and Middle ages; and their post-Renaissance emergence as principles of behavior distinct from philosophy. Emphasis will be on the evolution of scientific psychological thinking from \'devil theory\' to classical empiricism, and from the Aristotelian method to the Galilean mode of empirical science. This is a project- and writing-intensive course that serves as a capstone course and involves assessment of majors\' mastery of both content and reasoning skills in psychology.',
		postedtime:0,
		courseprereqs: [
			'PSYC210',
			'PSYC305',
			'PSYC311',
			'PSYC320',
			'PSYC335',
			'PSYC330',
			'PSYC340',
			'PSYC345',
			'PSYC346',
			'PSYC350',
			'PSYC370',
			'PSYC410',
			'PSYC415',
			'PSYC425',
			'PSYC455',
		],
	},
	// {
	// 	posttype:'course',
	// 	programid:'PSYC',
	// 	coursenumber:'xyz',
	// 	coursename: 'xyz',
	// 	numcredits: 0,
	// 	coursedescription: 'xyz',
	// 	postedtime:0,
	// 	courseprereqs: [
	// 		'xyz',
	// 	],
	// },
	
	{
		posttype:'course',
		programid:'RPW',
		coursenumber:'304',
		coursename: 'Technical Report Writing',
		numcredits: 3,
		coursedescription: 'Report writing for scientists and engineers. Theory and practice of audience analysis, report organization, revision, editing, oral presentations and visual aids.',
		postedtime:0,
		courseprereqs: [
			'ENGL111',
			'PHIL114',
		],
	},

];


/*****/


// Add additional course properties. 
addCourseProperties();


/*****/


// Define additional course properties. 
function addCourseProperties() {

	// Go thru all courses. 
	for(let course of courseData) {
	
		// Set course id. 
		course.courseid = getCourseId(course);
	
		// Set course title. 
		course.title = getCourseTitle(course);
	
		// Set full course title. 
		course.fulltitle = getFullCourseTitle(course);
	
		// Set course content. 
		course.content = getCourseContent(course);
		
		// Set searchable course data. 
		course.searchtags = getCourseTags(course);
	}

	/****/

	// Define course id. 
	function getCourseId(course) {
	
		// Get program id. 
		let prog = course.programid;
	
		// Get course number. 
		let num = course.coursenumber;
	
		// Compile components of course id. 
		return `${prog}${num}`;
	}

	// Define course title. 
	function getCourseTitle(course) {
	
		// Get program id. 
		let prog = course.programid;
	
		// Get course number. 
		let num = course.coursenumber;
	
		// Compile components of full course title. 
		return `${prog} ${num}`;
	}

	// Define course title. 
	function getCourseContent(course) {
	
		// Get course name. 
		let name = course.coursename;
	
		// Get course description. 
		let description = course.coursedescription;
	
		// Compile components of full course title. 
		return `${name}
<br>${description}`;
	}

	// Define full course title. 
	function getFullCourseTitle(course) {
	
		// Get program id. 
		let prog = course.programid;
	
		// Get course number. 
		let num = course.coursenumber;
	
		// Get course title. 
		let title = course.coursename;
	
		// Compile components of full course title. 
		return `${prog} ${num}: ${title}`;
	}
	
	// Define searchable course tags. 
	function getCourseTags(course) {
	
		// Compile searchable components for this post type: course. 
		let tagsources = [ course.programid, course.coursenumber, course.coursename, course.coursedescription ];
		
		// 
		return tagsources.join(' ').split(' ');
	}
}

// Get course by id. 
function getCourseById(courseid) {

	// Ensure capitalization of course id. 
	courseid = courseid.toUpperCase();

	// Go thru all course items. 
	for(let course of courseData) {

		// Check for matching course. 
		// let matchingCourse = (courseid == `${course.programid}${course.coursenumber}`);
		let matchingCourse = (courseid == course.courseid);

		// Return matching course if found. 
		if( matchingCourse ) return course;
	}

	// Return nothing if course not found. 
	return null;
}

// Get courses by program. 
function getCoursesByProgram(programid) {

	// Initialize result. 
	let result = [];

	// Ensure capitalization of program id. 
	programid = programid.toUpperCase();

	// Go thru all course items. 
	for(let course of courseData) {

		// Check for matching course. 
		let matchingCourse = (programid == course.programid);

		// Return matching course if found. 
		if( matchingCourse ) result.push(course);
	}

	// Return resulting list of matching courses. 
	return result;
}
