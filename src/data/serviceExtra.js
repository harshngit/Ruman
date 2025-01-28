const reasons = [
	{
		id: 1,
		title: "priGSTe with REITs & INVITs Accounting",
		description: "Now a days it’s becoming global scenario that HNI Families engage team of professionals to invest their funds through end number of investment gateways like shares, securities, mutual funds, bonds, priGSTe equity, investment in startups & many more such type of instruments.",
	},
	{
		id: 2,
		title: "End to End solution from accounting to audit ready finalization of accounts.",
		description: "We do accounting from basics date entry till audit ready accounts in software recommended by us or of your choice.",
	},
	{
		id: 3,
		title: "GST accounting & reconciliation with final accounts",
		description: "As a GST registered business we file all our GST returns in time & make due payments of GST derived out of all our Sales Invoices & reduced by input credit on Purchases & Services. We do complete GST accounting with due reconciliation of all the GST collected on Sales & paid on Purchases & Services showing net payable as per accounts to tally with GST paid.",
	},
	{
		id: 4,
		title: "Import Purchase Costing Accounting",
		description: "In UAE many items are imported from various countries. We do import costing of each & every item purchased factorising all the cost of imports like purchase cost, freight, transport, clearing & forwarding expenses as a net total cost of import inventory wise. ",
	},
	{
		id: 5,
		title: "Accounts Payable (AP) & Accounts Receivable (AR) management",
		description: "We provide faster and more accurate bookkeeping services in like Accounts Payable (AP), Accounts Receivable (AR), Invoice processing, Financial statements &  more.",
	},
	{
		id: 6,
		title: "Branch accounting, compilation – Merger with HO accounts.",
		description: "Manage accounting and bookkeeping services for all the branches of your organization individually and merge branch accounts with the firm’s HO account.",
	},
	{
		id: 7,
		title: "CFO Services",
		description: "CFO services are mainly to stabilize Finance & Accounting department in your company with periodic reviews and safety measures.",
	},
	{
		id: 8,
		title: "Project Accounting",
		description: "We provide accurate project accounting for turnkey projects, off shore projects, projects with time line & service contract projects.",
	},
	{
		id: 9,
		title: "Inventory Management",
		description: "Inventory management is key are of accounting process. Accurate inventory management will show impact on profitability.",
	},
	{
		id: 10,
		title: "Internal audit & controls",
		description: "Internal audit & controls are necessary for certain size of business having considerable amount of turnover & man power to improve functioning of business & stop unwanted procedure of decision making",
	},
	{
		id: 11,
		title: "Tax Services – GST Registration & Return Filing",
		description: "As per GST Rules certain type of business with applicable turnover has to register with GST & file Returns periodically.",
	},
	{
		id: 12,
		title: "Tax, Finance & Investment planning",
		description: "With expertise on Tax, Finance & Investment planning we can give updated information on tax compliance, procurement of finance from Bank & JV & investment of funds in various financial instruments & gateways.",
	},
	{
		id: 13,
		title: "Accounting staff recruitment",
		description: "Recruit experienced and skilled personal/corporate accountants to manage A to Z accounting tasks.",
	},
	{
		id: 14,
		title: "Training to staff for professional accounting",
		description: "Over the years we have observed that accounting staff hired are qualified but not competitive. We being so many years in professional accounting can train your staff",
	},
	{
		id: 15,
		title: "Training to staff for Accounting Software – Tally, Quickbook, Zoho, Sage Etc.",
		description: "Make the knowledge sharing agile and on a central platform. Leverage from our staff training programs of various accounting platforms like Tally, Quickbook, Zoho, Sage, etc",
	},
	{
		id: 16,
		title: "Supervision of accounting staff on day to day basis.",
		description: "Accounting staff are usually qualified enough to deliver but not professionally experienced. We do supervision & monitor them on day to day basis so that they deliver professionally ",
	},
	{
		id: 17,
		title: "Accounting software management & support.",
		description: "We have team of professionals having complete understanding of all the generally practices accounting software. We provide training, management & support at site & online.",
	},
	{
		id: 18,
		title: "Digitalization of accounting records",
		description: "Many business houses still practice accounting in excel or access format & do not maintain accounting in software. From such apps & platforms we help them to digitalize their accounting records",
	},
	{
		id: 19,
		title: "Migration from existing accounting software to another software",
		description: "With the need of time many businesses migrate from one basic or customized software to another hi end or generally practices softwares. Our team professionally help such business to migrate",
	},
	{
		id: 20,
		title: "Budgeting, Forecasting & Controls – Variance check",
		description: "Budgeting & forecasting are important part of management decisions but it’s more important to set controls for the same. We help to set up total controls for budgeting & forecasting & regularly check on variances.",
	},
	{
		id: 21,
		title: "Performance analysis & variances evaluation",
		description: "Once the budget & forecasting controls are set, it's important to periodically check & do analysis evaluation for variances and report if there are any gaps."
	},
	{
		id: 22,
		title: "MIS Reporting",
		description: "Top management authorities don't get into day-to-day affairs of the business. They need to be reported with precise data to the concerned authorities like sales, marketing, finance, and board of directors. MIS helps to report accurate data extracted from accounts in a presentable form in excel or PowerPoint presentations."
	},
	{
		id: 23,
		title: "Cash Flow & Fund Flow preparation & management",
		description: "Start from recovery of sales to procurement of raw material. Expenses on salary, advertisement & marketing management require statements showing the flow of such funds. Preparation of Cash Flow & Fund Flow helps management to make financial decisions."
	},
	{
		id: 24,
		title: "Accounting data management & backup",
		description: "Accounting data management & backup is a task for every accountant. Managing & storing old finalized data helps improve the space & performance of the computer. Regular backups help the accounting team avoid unforeseen loss of data."
	},
	{
		id: 25,
		title: "Consultation on expansion, new verticals, upcountry business & joint ventures",
		description: "Every business grows with time. Experienced & young minds help businesses reach new heights. Our professional & technical team helps such businesses find avenues for expansions, new verticals of business, upcountry associations/mergers, and joint ventures."
	},
	{
		id: 26,
		title: "Loan procedure",
		description: "We understand the financial requirements of businesses and help to obtain loans from financial and non-financial institutions, including cash credit, OD, vehicle, home loans, etc."
	},
	{
		id: 27,
		title: "HR Management – Software, implementation & Staff process",
		description: "Once the recruitment of staff is done, the company has to manage them with HR management procedures. We have software that manages the complete procedure from documentation, leave, payroll, time management, and output management to resignation or termination."
	}
];

export default reasons