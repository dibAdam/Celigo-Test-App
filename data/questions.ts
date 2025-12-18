// TypeScript interfaces
export interface Question {
    question: string;
    options: string[];
    correct: number | number[];
}

// All questions extracted from the PDF
export const allQuestions: Question[] = [
    {
        question: "In a flow with branching, a record meets the criteria for the Community branch and Employees branch, but it only proceeds through the Community branch. Why?",
        options: [
            "Branching is set to First Matching.",
            "Branching is set to A-Z Matching.",
            "The second branch was inactive at the time of execution.",
            "Branching is set to All Matching."
        ],
        correct: 0
    },
    {
        question: "Which of the export types sends a data request to mark records as exported, in addition to exporting the records themselves?",
        options: ["Once", "Limit", "Delta", "All"],
        correct: 0
    },
    {
        question: "Which flow scheduling option allows you to specify conditions such as scheduling a flow to run every 14th day of the month or every 7th hour of the day?",
        options: [
            "Cron expression",
            "Flexible Scheduling",
            "Preset",
            "Interval Scheduler"
        ],
        correct: 0
    },
    {
        question: "Which prebuilt solution is modified with bug fixes and new functionality and settings?",
        options: [
            "Integration Apps",
            "Templates",
            "Linked Devices",
            "Both templates and integration apps"
        ],
        correct: 0
    },
    {
        question: "What can a trace key be used for?",
        options: [
            "Managing errors and examining flow data",
            "Optimizing system performance for faster processing",
            "Encrypting data for secure transmission",
            "Storing large amounts of data in a database"
        ],
        correct: 0
    },
    {
        question: "If records are regularly edited but you do not need each update to sync immediately, which of the options below is recommended?",
        options: [
            "Scheduled export",
            "Filter",
            "Webhook listener",
            "Transformation"
        ],
        correct: 0
    },
    {
        question: "When working with databases in flows, writing SQL queries allows you to: (Select all that apply)",
        options: [
            "retrieve data records for exports",
            "create custom data reports that aren't available through the standard interface",
            "automatically optimize database performance without further configuration",
            "use an on-premise agent"
        ],
        correct: [0, 1]
    },
    {
        question: "Import mapping can ONLY be a direct one-to-one match.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "What menu is the Recycle bin found?",
        options: ["Resources", "Systems", "Tools", "Account"],
        correct: 0
    },
    {
        question: "Which of the following can JavaScript hooks perform? (Select all that apply)",
        options: [
            "Trigger functions",
            "Calculations",
            "API rate limiting",
            "Authentication checks"
        ],
        correct: [0, 1]
    },
    {
        question: "A lookup pulls additional data from an endpoint.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "You can add spaces and other characters between handlebars expressions.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "For an HTTP export, all APIs support returning data with the Delta Export Type.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "SQL queries can be built outside the Celigo platform and then pasted into the platform.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "Select the FTP protocols compatible with the Celigo platform. (Select all that apply)",
        options: ["FTP", "FTPS", "SFTP", "FSTP"],
        correct: [0, 1, 2]
    },
    {
        question: "If you're using two applications in a standard way and both a template and integration app are available, it's recommended to use the:",
        options: ["Integration app", "Template"],
        correct: 0
    },
    {
        question: "Where on the Edit mapping panel do you find the field mapping option?",
        options: [
            "Label C - Settings gear icon",
            "Label A - Destination field drop-down box",
            "Label D - More options under ellipsis",
            "Label B - Source field drop-down box"
        ],
        correct: 0
    },
    {
        question: "When parsing files in an FTP export, what file types listed below are available in the Celigo platform? (Select all that apply)",
        options: ["CSV", "DOCX", "ICO", "XLSX"],
        correct: [0, 3]
    },
    {
        question: "The mapping icon appearing in the import bubble indicates:",
        options: [
            "Mapping exists for the import",
            "There is a mapping error",
            "Mapping is available for the import",
            "Mapping is locked"
        ],
        correct: 0
    },
    {
        question: "How often is data in a Playground AFE automatically saved?",
        options: [
            "An AFE doesn't store any data.",
            "Every five minutes.",
            "Every three minutes.",
            "Every 30 minutes."
        ],
        correct: 0
    },
    {
        question: "In addition to being an account owner or administrator, what setting must be enabled in Celigo to access My APIs?",
        options: [
            "Developer mode",
            "Advanced user mode",
            "API Access mode",
            "Integration mode"
        ],
        correct: 0
    },
    {
        question: "A flow needs to be modified to only allow records with the tax exempt field set to true to continue through the flow. How can this be accomplished in Flow Builder?",
        options: [
            "Apply a filter.",
            "Override the export schedule to run less frequently.",
            "Select the tax-exempt checkbox in flow settings.",
            "Enable error handling for tax-exempt records."
        ],
        correct: 0
    },
    {
        question: "If you enter '40' in the 'wait time between HTTP requests' setting for an API that doesn't have a rate limit, what does that 40 represent?",
        options: [
            "40 milliseconds",
            "40,000 seconds",
            "40 seconds",
            "40 minutes"
        ],
        correct: 0
    },
    {
        question: "The mapping option will be toggled to Mapper 2.0, unless an import only has configurations set in Mapper 1.0.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "Which of the following options are the four export types in Celigo?",
        options: [
            "All, Delta, Once, Limit",
            "All, Update, Once, Limit",
            "All, Delta, Update, Once",
            "Global, Delta, Once, Limit"
        ],
        correct: 0
    },
    {
        question: "A coworker trying to create a flow with an HTTP connection can't find the delta export option. What could be the reason?",
        options: [
            "Not all APIs support the delta export type.",
            "Delta exports for HTTP connections are enabled in the connection settings, not export panel.",
            "Delta export is only an option when a flow includes two sources.",
            "Delta export is an advanced option that needs to be activated in account settings."
        ],
        correct: 0
    },
    {
        question: "Which of these does NOT appear on an integration tile?",
        options: [
            "Number of TOTAL flows",
            "Numbers of errors if applicable",
            "Integration name",
            "Connection down if applicable"
        ],
        correct: 0
    },
    {
        question: "What is the shortest duration possible for auto-purging an API token in the Celigo platform?",
        options: ["1 hour", "30 minutes", "10 minutes", "4 hours"],
        correct: 0
    },
    {
        question: "What types of AFEs include the auto-suggestions menu?",
        options: [
            "AFEs that use handlebars expressions",
            "All AFEs",
            "AFEs that use XML",
            "Form builder"
        ],
        correct: 0
    },
    {
        question: "In which tab in the My account/My Profile section can you find a list of endpoints used and enabled flows?",
        options: ["Subscription", "Data retention", "Audit log", "Profile"],
        correct: 0
    },
    {
        question: "Which of the following do JavaScript hooks allow?",
        options: [
            "Adding custom code to manipulate flows",
            "Capturing data about how an import handled the flow",
            "Building an additional connection to an export",
            "Running a flow on demand when new data is available"
        ],
        correct: 0
    },
    {
        question: "What FTP protocol includes the option to require socket reuse?",
        options: ["FTPS", "FSTP", "STFP", "FTP"],
        correct: 0
    },
    {
        question: "Using the below information, what is the path to the honeycrisp apple? \"fruit\": { \"apples\": [\"fuji\", \"gala\", \"honeycrisp\"], \"pears\": [\"bartlett\", \"anjou\", \"bosc\"] }",
        options: [
            "fruit.apples[2]",
            "apples[2]",
            "fruit[apples].3",
            "fruit.apples[3]"
        ],
        correct: 0
    },
    {
        question: "A flow events report can include data for up to a _____ day range within the last 30 days.",
        options: ["3", "7", "30", "10"],
        correct: 0
    },
    {
        question: "The once export type involves two data requests. One is to update the data. What is the second data request?",
        options: [
            "Updates a field to indicate a record was exported",
            "Formats the updated data",
            "Deletes the data from the source",
            "Compresses the data"
        ],
        correct: 0
    },
    {
        question: "Which of the following actions can be performed using a Celigo platform API token with custom scopes?",
        options: [
            "None of these. CRUD operations can't be performed when using an API token with custom scope.",
            "Update exports",
            "Delete imports",
            "Create connections"
        ],
        correct: 0
    },
    {
        question: "Rob has a stable, working integration but needs to make some updates. Which option allows him to capture the current state of the integration for later reference?",
        options: ["Snapshot", "Revision", "Revert", "Pull"],
        correct: 0
    },
    {
        question: "Which export type requires no extra configuration for HTTP connections? (Select all that apply)",
        options: ["Limit", "All", "Once", "Delta"],
        correct: [0, 1]
    },
    {
        question: "You can request data from an application using any web API you choose.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "Pritika is not sure whether she is the account owner. Where could she look to find this information? (Select all that apply)",
        options: [
            "Users Tab",
            "Account Dropdown Menu",
            "Tools",
            "Resources"
        ],
        correct: [0, 1]
    },
    {
        question: "Which of the following are characteristics of a script? (Select all that apply)",
        options: [
            "Can be used for hooks and filters",
            "Sets of instructions for a program to follow",
            "Written in JavaScript",
            "Written in binary code"
        ],
        correct: [0, 1, 2]
    },
    {
        question: "What method do REST APIs commonly use for updating records?",
        options: ["PUT", "POST", "CONNECT", "GET"],
        correct: 0
    },
    {
        question: "When you modify a flow through the Celigo platform, you're using the Celigo platform API.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "Webhook is missing from the list of universal connectors when creating a connection. Which of the reasons listed below would explain why?",
        options: [
            "The connection is for an import, not an export.",
            "The connection requires custom code.",
            "The webhook option has to be activated in flow settings.",
            "A stack must be created first."
        ],
        correct: 0
    },
    {
        question: "Which data request signals a need to retrieve information?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct: 0
    },
    {
        question: "Lookups make calls for data on a per record basis.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "Which resource supports returning a response in a format other than JSON?",
        options: [
            "My API",
            "All of these answers",
            "Webhooks",
            "Celigo Platform API"
        ],
        correct: 0
    },
    {
        question: "Celigo determines the protocol to use for an FTP connection.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "What is the total file size limit per page?",
        options: ["5 MB", "20 MB", "5 KB", "20 KB"],
        correct: 0
    },
    {
        question: "When using pagination, a response body containing a 404 Not found error is one method to signal the total number of pages has been reached. Other methods can also be used.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "What is the primary media type used in the Celigo platform?",
        options: ["JSON", "URL encoder", "Multipart/form-data", "Plain text"],
        correct: 0
    },
    {
        question: "What's the purpose of the Celigo platform Playground?",
        options: [
            "It allows you to experiment outside of an integration.",
            "It allows you to run flows that export to a demo environment.",
            "It allows you to access previous versions of integrations.",
            "It provides a sandbox for testing real-time transactions."
        ],
        correct: 0
    },
    {
        question: "Which of the two Mapper options processes nested arrays?",
        options: ["Mapper 2.0", "Mapper 1.0"],
        correct: 0
    },
    {
        question: "Complex HTTP request bodies can be constructed using the Advanced Field Editor.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "Which of these is NOT an option in the Account menu?",
        options: ["Tools", "Audit Log", "Subscription", "Profile"],
        correct: 0
    },
    {
        question: "A folder containing flows is called an:",
        options: ["Integration", "Connection", "Endpoint", "API"],
        correct: 0
    },
    {
        question: "Why would you not be able to edit the concurrency level in an HTTP connection's advanced settings?",
        options: [
            "The auto-recovery rate limit errors option is selected.",
            "Advanced mode in the connection settings isn't enabled.",
            "The connection is locked by the system administrator.",
            "Concurrency settings are only available for FTP connections."
        ],
        correct: 0
    },
    {
        question: "Any file type can be exported from an FTP server if you aren't parsing files.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "When trying to save mock response data you entered for a database import, you're prompted to edit your entry. What could be the reason the mock response data isn't being saved?",
        options: [
            "The mock response data doesn't match the Celigo platform canonical format.",
            "The mock response data field isn't supported for the database you're connecting to.",
            "You exceeded the mock response uses allowed in your Celigo subscription.",
            "The id field used isn't labeled 'mock.'"
        ],
        correct: 0
    },
    {
        question: "Which of the following is/are in the Tools menu? (Select all that apply)",
        options: ["Data loader", "Playground", "Flow builder", "Connections"],
        correct: [0, 1, 2]
    },
    {
        question: "Identify three of the advanced connection settings available for most databases supported by the Celigo platform. (Select all that apply)",
        options: [
            "Concurrency level",
            "Auto-recover rate limit errors",
            "Borrow concurrency from",
            "Port number"
        ],
        correct: [0, 1, 2]
    },
    {
        question: "Which data request removes a resource/record?",
        options: ["DELETE", "PUT", "POST", "GET"],
        correct: 0
    },
    {
        question: "If an API uses a non-standard rate limit error status code, what field for an HTTP connection will you use to indicate this?",
        options: [
            "Override HTTP status code for rate-limit errors",
            "Custom rate-limit error message handler",
            "Response status code mapper",
            "HTTP status code validator"
        ],
        correct: 0
    },
    {
        question: "Which mapping type is used to merge data returned from a lookup into the source data?",
        options: [
            "Results Mapping",
            "Dynamic Mapping",
            "Import mapping",
            "Response Mapping"
        ],
        correct: 0
    },
    {
        question: "Static and dynamic are options available for which field mapping type?",
        options: ["Lookup", "Standard", "Hard-Coded", "Multi-Field"],
        correct: 0
    },
    {
        question: "Which of the following is NOT a mapping type in the Celigo platform?",
        options: [
            "Export Mapping",
            "Lookup Mapping",
            "Standard Mapping",
            "Hard-Coded Mapping"
        ],
        correct: 0
    },
    {
        question: "Templates and integration apps allow you to access an application like ADP or HubSpot without directly buying a subscription for it.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "What types of JavaScript hooks are available in the Celigo platform? (Select all that apply)",
        options: ["preMap", "postMap", "SessionSync", "postExport"],
        correct: [0, 1, 3]
    },
    {
        question: "What happens when you have multiple exports in a flow? (Select all that apply)",
        options: [
            "Your flow cannot run.",
            "The export pages will be combined.",
            "The data will never intersect.",
            "Only one export will be run at a time."
        ],
        correct: [2, 3]
    },
    {
        question: "All databases allow the Cloud mode option when creating connections to them.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "Which import mapping lookup option is best when fields to be matched are known and limited in number?",
        options: [
            "Static Lookup",
            "Dynamic Lookup",
            "Matched Lookup",
            "Standard Lookup"
        ],
        correct: 0
    },
    {
        question: "What does AFE stand for?",
        options: [
            "Advanced field editor",
            "Advanced field evaluator",
            "Advanced function editor",
            "Administrator field editor"
        ],
        correct: 0
    },
    {
        question: "A business has two connections to the Food and Drug Administration API. One is for recall information, and the other is for drug product labeling. The connection to drug product labeling borrows concurrency from the connection to recall information. How are the data requests handled?",
        options: [
            "The drug product labeling connection borrowing concurrency will get lower priority.",
            "The concurrencies will be divided equally between the two connections.",
            "They are prioritized based on the size of the data payload.",
            "They are merged into a single request to reduce load."
        ],
        correct: 0
    },
    {
        question: "When creating HTTP imports, instead of the field mapping tool, where do most users map fields?",
        options: [
            "HTTP request body",
            "No fields are mapped for an HTTP import",
            "Transformation tool",
            "Input filter"
        ],
        correct: 0
    },
    {
        question: "In the Create destination menu, which of the following may not be available for every endpoint/application?",
        options: [
            "Remove files from destination application",
            "Lookup additional records per record",
            "Import records into destination application",
            "Transfer files into destination application"
        ],
        correct: 0
    },
    {
        question: "Which of the following can you NOT do with the handlebars expressions mapping type?",
        options: [
            "Enable a flow",
            "Add fields with numerical values",
            "Combine fields",
            "Compare two fields"
        ],
        correct: 0
    },
    {
        question: "What must be enabled on the Celigo platform to access My API resources?",
        options: [
            "Developer mode",
            "The My API script key",
            "An iClient named My API",
            "An API token"
        ],
        correct: 0
    },
    {
        question: "Trevor wants his support tickets to be properly routed based on customer tier. What tool would best help him accomplish this?",
        options: [
            "Flow branching",
            "Webhook",
            "Transformation",
            "Cron expression"
        ],
        correct: 0
    },
    {
        question: "Where can you find a list of Celigo platform API endpoints?",
        options: [
            "Celigo Help Center",
            "My APIs",
            "Marketplace",
            "Account Transfers"
        ],
        correct: 0
    },
    {
        question: "An FTP can import any file type, when files aren't being generated.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "Where do you get keys for PGP encryption of FTP transfers?",
        options: [
            "Use a third-party PGP key generator tool.",
            "Use a Celigo API token.",
            "Combine the flow ID and an admin email address.",
            "They're generated randomly by the FTP server."
        ],
        correct: 0
    },
    {
        question: "By default, all users can find Connections, Scripts, Stacks, and My APIs under the Resources menu.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "What tool allows you to build complex HTTP request bodies in an HTTP export?",
        options: [
            "Advanced field editor",
            "Relative URI",
            "Configure HTTP headers fields",
            "Field mapping manager"
        ],
        correct: 0
    },
    {
        question: "In the screenshot below of an API with a non-standard API response pattern, the error values field was left blank. Because of this, every API response will be considered a success.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "Which of the following is required when inviting a user to a Celigo Platform account?",
        options: ["Email", "Company", "Name", "All of these answers"],
        correct: 0
    },
    {
        question: "What Celigo tool could you use to test filtering records that wouldn't affect live data?",
        options: ["Playground", "Product Portal", "Data Loader", "Marketplace"],
        correct: 0
    },
    {
        question: "Which of the following methods is/are available in the Celigo platform for importing records with an HTTP connection? (Select all that apply)",
        options: ["DELETE", "Composite", "POST", "UPDATE"],
        correct: [0, 1, 2]
    },
    {
        question: "What does a ping request do?",
        options: [
            "Confirms a working connection to a system",
            "Updates the DNS records for a domain",
            "Monitors network traffic for security threats",
            "Initiates a data backup process"
        ],
        correct: 0
    },
    {
        question: "Which of these represents a stream of data between two or more systems?",
        options: ["Flow", "Integration", "Endpoint", "Connection"],
        correct: 0
    },
    {
        question: "Pagination is the method Celigo uses to:",
        options: [
            "chunk data into pages",
            "convert data to JSON",
            "determine which import fields connect to export fields",
            "determine what type of HTTP call is made"
        ],
        correct: 0
    },
    {
        question: "The Celigo Help Center has sections dedicated to integration apps and templates.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "Developer mode allows you access to which of the following menu options. (Select all that apply)",
        options: ["Scripts", "My APIs", "Stacks", "Marketplace"],
        correct: [0, 1, 2]
    },
    {
        question: "Select the possible troubleshooting steps for resolving connection errors: (Select all that apply)",
        options: [
            "Check the connector status in the Celigo platform.",
            "Reboot the entire server to reset all settings.",
            "Check the application's status online.",
            "Retry the step or restart the full flow."
        ],
        correct: [0, 2, 3]
    },
    {
        question: "Integrations made in the Celigo platform can only include applications which have a pre-built connector available.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "What section of connection settings are concurrency settings located?",
        options: [
            "Advanced",
            "Data payload",
            "How to test this connection",
            "General"
        ],
        correct: 0
    },
    {
        question: "When should you use a universal connector? (Select all that apply)",
        options: [
            "When a prebuilt connector does not exist for an endpoint",
            "When you need customization not found in the prebuilt connector",
            "Always when connection to an HTTP endpoint",
            "Always when connecting to a database."
        ],
        correct: [0, 1]
    },
    {
        question: "What does a column or row delimiter do?",
        options: [
            "Separates columns or rows in a data file",
            "Highlights important data points",
            "Encrypts data for security",
            "Formats data cells for alignment"
        ],
        correct: 0
    },
    {
        question: "How does My API provide more flexibility than the Celigo Platform API?",
        options: [
            "It supports using any data format.",
            "It allows for faster data processing.",
            "It automatically encrypts all data transmissions.",
            "It enables real-time error reporting."
        ],
        correct: 0
    },
    {
        question: "What menu would you use to submit a help ticket?",
        options: ["Help", "Tools", "Resources", "Account"],
        correct: 0
    },
    {
        question: "If you wanted to simplify and modify your data so it's easier for your import to understand, which tool would help accomplish this?",
        options: [
            "Transformation",
            "Edit retry data",
            "Flow branching",
            "Output filter"
        ],
        correct: 0
    },
    {
        question: "Why would a user not be able to make a data request to the Celigo platform API from a browser?",
        options: [
            "The user isn't an account owner.",
            "The user has not cleared the browser cache.",
            "The user has not enabled cookies in the browser.",
            "The user's browser version is outdated."
        ],
        correct: 0
    },
    {
        question: "What are the steps to run a flow?",
        options: [
            "Switch the toggle above the flow to Enable and then select the Run icon.",
            "Select the Run icon.",
            "Open the Flow Run dropdown and select the Run icon.",
            "Go to the Run console and select Enable."
        ],
        correct: 0
    },
    {
        question: "Which Celigo tool gives you the ability to save and revert to an earlier version of a flow?",
        options: [
            "Integration Lifecycle Management",
            "Trace Key",
            "Error Monitoring Dashboard",
            "Flow Event Reports"
        ],
        correct: 0
    },
    {
        question: "Which of the import methods replaces existing records in the destination application and, unlike PATCH, replaces the entire record, not just parts?",
        options: ["PUT", "POST", "Composite", "UPDATE"],
        correct: 0
    },
    {
        question: "Select all the account options listed below that appear as columns in the Users tab: (Select all that apply)",
        options: ["Name", "Status", "Role", "Phone Number"],
        correct: [0, 1, 2]
    },
    {
        question: "With the exception of flows using Data loader, new flows are disabled by default.",
        options: ["False", "True"],
        correct: 1
    },
    {
        question: "What can you use to add functions to handlebar expressions?",
        options: [
            "Custom tags",
            "Handlebars modifiers",
            "Handlebars helpers",
            "Expression filters"
        ],
        correct: 2
    },
    {
        question: "Import mapping is the process by which data:",
        options: [
            "from an import is sent to the platform in response to the import",
            "from the GET call is converted to a POST call",
            "from the export is mapped to an import",
            "from a lookup is mapped with data from an export"
        ],
        correct: 2
    },
    {
        question: "If a user directory is not used as the root directory in an FTP connection, how does that affect the relative URI?",
        options: [
            "It changes the base URI, so the user directory must be included in the relative URI.",
            "It encrypts the relative URI for added security.",
            "It causes the relative URI to become absolute.",
            "It disables the use of relative URIs entirely."
        ],
        correct: 0
    },
    {
        question: "If you only want to export files from an FTP that end with '_2024.jpg,' how could you accomplish this?",
        options: [
            "This can't be done with FTPs exports; only database exports.",
            "Set the directory path to /2024/",
            "Enter '_2024.jpg' in the 'File name ends with field'",
            "Enter '.jpg' in the 'File name ends with field'"
        ],
        correct: 2
    },
    {
        question: "Celigo determines the information needed to connect to an application.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "If basic troubleshooting steps don't resolve a flow error, you can reach out to both the endpoint/application's support team and Celigo's support team for assistance.",
        options: ["False", "True"],
        correct: 1
    },
    {
        question: "A coworker trying to create a connection to DynamoDB can't find a setting in Celigo to enter a username and password. What could be the reason?",
        options: [
            "The coworker might be using an outdated integration template that doesn't support credential input.",
            "Database connections must be built by account managers.",
            "The company isn't using the latest version of DynamoDB.",
            "Not all database connections require usernames and passwords."
        ],
        correct: 3
    },
    {
        question: "Before you begin working on a flow, you're told it will import into an application using a SOAP/XML API. Based on that, what do you know already about the import settings?",
        options: [
            "The 'Number of records per HTTP request' will default to 10.",
            "You'll use the POST HTTP method.",
            "The 'Number of records per HTTP request' will default to 5.",
            "You'll use the Composite HTTP method."
        ],
        correct: 1
    },
    {
        question: "Which of the following components can be included in a flow more than once?",
        options: [
            "All of these answers",
            "Exports",
            "Lookups",
            "Imports"
        ],
        correct: 0
    },
    {
        question: "For a database import, you can filter records and map fields using the SQL query field.",
        options: ["False", "True"],
        correct: 1
    },
    {
        question: "In the Edit branching panel, what do you select to delete a branch?",
        options: [
            "Label A - NOT checkbox",
            "Label B - Field drop-down box",
            "Label C - More options under ellipsis",
            "Label D - X option to the right of field and operator drop-down boxes"
        ],
        correct: 2
    },
    {
        question: "Pagination is the method Celigo uses to:",
        options: [
            "convert data to JSON",
            "determine what type of HTTP call is made",
            "chunk data into pages",
            "determine which import fields connect to export fields"
        ],
        correct: 2
    },
    {
        question: "If importing image files from an FTP server, you would choose NOT to generate files from records.",
        options: ["False", "True"],
        correct: 1
    },
    {
        question: "Sue is importing orders. Which option listed below should she use to check for existing customer records in her ERP?",
        options: [
            "A dynamic lookup mapping",
            "A new import",
            "A lookup",
            "A new export in addition to her orders export"
        ],
        correct: 2
    },
    {
        question: "What menu option in the Celigo platform includes Playground?",
        options: ["Resources", "Tools", "Marketplace", "Dashboard"],
        correct: 1
    },
    {
        question: "The relative URIs listed below include both a path and query parameter. Which is written correctly?",
        options: [
            "/api/?category=electronics/v1/products",
            "/api/v1?category=electronics/products",
            "/api/v1#category=electronics/products",
            "/api/v1/products?category=electronics"
        ],
        correct: 3
    },
    {
        question: "Which Authentication type is most secure?",
        options: ["Custom", "Digest", "Cookie", "OAuth 2.0"],
        correct: 3
    },
    {
        question: "The Celigo platform has a maximum concurrency of 50 for a single connection.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "Information you enter in the Playground is automatically saved in the integration.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "A manager monitoring integrations noticed a flow uses an HTTP connection for Asana, instead of the pre-built Asana connector. What could be the reasoning for this?",
        options: [
            "This allows you to bypass the security protocols of the pre-built connector.",
            "The flow uses a new API feature, which the pre-built connector hasn't been updated to include yet.",
            "The pre-built connector is already used in an integration; and the same connection can't be used in another.",
            "The pre-built connector's login credentials were changed; and they can't be updated in the existing connection."
        ],
        correct: 1
    },
    {
        question: "What specifies the data format to use in an HTTP request/response body?",
        options: [
            "Authentication type",
            "Query parameter",
            "Media type",
            "Concurrency"
        ],
        correct: 2
    },
    {
        question: "How can you switch between production and sandbox environments?",
        options: [
            "Toggle the Production/Sandbox option on the top-right of the platform.",
            "Go to the environments tab and select 'sandbox'.",
            "Log out of your production environment and login to your sandbox environment.",
            "You cannot switch between the two environments."
        ],
        correct: 0
    },
    {
        question: "How are APIs related to the Celigo platform?",
        options: [
            "The platform uses APIs for integrations.",
            "The platform creates integrations by switching an application's API type to match the API of another application.",
            "The platform creates APIs for applications.",
            "The platform modifies APIs to create integrations."
        ],
        correct: 0
    },
    {
        question: "The option to add flow branching can be found:",
        options: [
            "In flow settings",
            "By selecting the plus sign between flow steps",
            "In the Tools section",
            "Under Resources"
        ],
        correct: 1
    },
    {
        question: "Name a commonly used protocol for web APIs.",
        options: ["http"],
        correct: 0
    },
    {
        question: "The account owner is always the creator of the account.",
        options: ["False", "True"],
        correct: 0
    },
    {
        question: "Because the Celigo platform can run several times an hour to restore an offline connection, what's important when choosing a test endpoint?",
        options: [
            "Ensuring the test endpoint has minimal security measures",
            "Selecting an endpoint that is rarely used in production",
            "Using an endpoint with a complex query structure",
            "Keeping the return record small"
        ],
        correct: 3
    },
    {
        question: "Templates and integration apps allow you to access an application (like ADP or HubSpot) without directly buying a subscription for it.",
        options: ["True", "False"],
        correct: 1
    },
    {
        question: "What type of authentication does the Celigo platform API use?",
        options: ["Bearer token", "Basic", "Custom", "OAuth 2.0"],
        correct: 0
    },
    {
        question: "Select all the field mapping types available in the Celigo platform: (Select all that apply)",
        options: ["Conditional", "Hard-coded", "Standard", "Lookup"],
        correct: [1, 2, 3]
    },
    {
        question: "When establishing an HTTP connection with a publicly available API you can connect directly to, what mode should you use?",
        options: ["Public", "Secure", "Cloud", "On-premise"],
        correct: 2
    },
    {
        question: "Where can you create Stacks in the Celigo platform?",
        options: [
            "In the Integrations section under the Tools menu",
            "In the Flows section under the Automation menu",
            "In the Connections tab under the Settings menu",
            "In the Stacks section found in the Resources menu"
        ],
        correct: 3
    },
    {
        question: "What two properties are needed in order to transfer an integration? (Select all that apply)",
        options: [
            "New owner's email address",
            "API token",
            "Integration to transfer",
            "Connection"
        ],
        correct: [0, 2]
    },
    {
        question: "Which of the following are error classifications in the Celigo platform? (Select all that apply)",
        options: ["Parse", "Duplicate", "Connection", "Validation"],
        correct: [0, 1, 2]
    },
    {
        question: "What components are included in an integration template? (Select all that apply)",
        options: ["Connections", "API Tokens", "Exports", "Imports"],
        correct: [0, 2, 3]
    },
    {
        question: "Which of the following actions does Transform 2.0 allow? (Select all that apply)",
        options: [
            "Generate detailed system reports",
            "Rename fields",
            "Change the data type",
            "Transform record-based data to row-based data"
        ],
        correct: [1, 2, 3]
    },
    {
        question: "Where would you find flows that aren't included in an integration?",
        options: [
            "In the Resources menu",
            "Standalone flows tile on the Home screen",
            "In the Tools menu",
            "Unattached flows tab on the Dashboard"
        ],
        correct: 1
    },
    {
        question: "Any resource in the Recycle bin is deleted after:",
        options: ["30 days", "20 days", "60 days", "28 days"],
        correct: 0
    },
    {
        question: "What is the standard response when an API rate limit has been met?",
        options: [
            "408 Request Timeout",
            "504 Gateway Timeout",
            "429 Too Many Requests",
            "400 Bad Request"
        ],
        correct: 2
    },
    {
        question: "Which of the following determines how you can communicate with an application?",
        options: [
            "Platform used to build the application's website",
            "Programming language used to build the application",
            "Application programming interface",
            "Location of the application's server"
        ],
        correct: 2
    },
    {
        question: "What term describes the maximum calls that can be made to an API in a specific time period?",
        options: [
            "Rate limit",
            "Max rate",
            "Concurrency limit",
            "Concurrency rate"
        ],
        correct: 0
    },
    {
        question: "FTPS is the most secure option to connect.",
        options: ["True", "False"],
        correct: 1
    },
    {
        question: "Which mapping type follows an import?",
        options: [
            "Results Mapping",
            "Import mapping",
            "Response Mapping",
            "Dynamic Mapping"
        ],
        correct: 2
    },
    {
        question: "Data Loader can import ______ (or any delimited text file), JSON, XLSX and XML file types into an application.",
        options: ["csv"],
        correct: 0
    },
    {
        question: "A ______________ is a testing environment for integrations.",
        options: ["sandbox"],
        correct: 0
    },
    {
        question: "What type of authentication does the Celigo platform API use? (Select all that apply)",
        options: ["OAuth 2.0", "Custom", "Bearer token", "Basic"],
        correct: [0, 1, 2]
    },
    {
        question: "Why would you use handlebars expressions in the relative URI for testing an HTTP connection?",
        options: [
            "It formats the URI as JSON data.",
            "It's the most efficient way to dynamically update the field.",
            "It enhances security by encrypting the URI.",
            "It switches connections when an error occurs."
        ],
        correct: 1
    },
    {
        question: "Which Verification type is most secure?",
        options: ["Secret URL", "Basic", "HMAC", "Cookie"],
        correct: 2
    },
    {
        question: "An account owner named Jaime selects the Resources menu and sees options for Scripts, Stacks, and My APIs. His coworker Sam doesn't see those options when selecting the Resources menu. Why are they seeing different menu options?",
        options: [
            "Jaime is an account owner; Sam is an admin.",
            "Unlike Sam, Jaime used scripts, stacks, and My APIs when building in Flow Builder.",
            "Unlike Sam, Jaime has developer mode activated.",
            "Jaime removed those options from Sam's account."
        ],
        correct: 2
    },
    {
        question: "In an FTP export, you can sort records by field but not group them.",
        options: ["True", "False"],
        correct: 1
    },
    {
        question: "How is the API method PATCH different from PUT?",
        options: [
            "PUT updates a resource/record on a server, while PATCH removes any custom fields in it.",
            "PUT updates the entire resource/record on a server, while PATCH only modifies part of it.",
            "PUT is used for HTTP requests. PATCH is used exclusively for RPC protocols.",
            "PATCH updates the entire resource/record on a server, while PUT only modifies part of it."
        ],
        correct: 1
    },
    {
        question: "Which of the following export types are available for databases? (Select all that apply)",
        options: ["Last Date Used", "Once", "All", "Get"],
        correct: [1, 2]
    },
    {
        question: "Where on the Celigo platform will you see error notifications? (Select all that apply)",
        options: [
            "Dashboard",
            "Account",
            "Notifications bell on top right of screen",
            "Tiles on homepage"
        ],
        correct: [0, 3]
    },
    {
        question: "What elements are needed to create a resource URL for a Celigo platform API request? (Select all that apply)",
        options: ["FTP Port", "Relative URI", "API Key", "Base URI"],
        correct: [1, 3]
    },
    {
        question: "Which handlebar helpers are supported in the Celigo platform? (Select all that apply)",
        options: [
            "Data variables",
            "Block helpers",
            "Custom helpers",
            "Data helpers"
        ],
        correct: [0, 1, 2]
    },
    {
        question: "Which of the following statements about universal connectors is true? (Select all that apply)",
        options: [
            "They are limited to specific cloud-based services.",
            "They provide flexibility beyond pre-built connectors.",
            "They require custom coding for every connection.",
            "They can be used for an application instead of its pre-built connector."
        ],
        correct: [1, 3]
    },
    {
        question: "When reviewing FTP connections which involve sensitive data, you notice the connections use passive mode. Do you see any issues with this configuration?",
        options: [
            "Yes, this should be changed to active, which is more secure.",
            "Yes, this should be changed to dynamic, which is more secure.",
            "No, passive mode encrypts data during transfer.",
            "No, passive mode is the more secure option."
        ],
        correct: 3
    },
    {
        question: "Where is the Developer mode option on the Celigo platform?",
        options: [
            "Account Profile",
            "Tools menu",
            "Resource menu",
            "Marketplace"
        ],
        correct: 0
    },
    {
        question: "Concurrency represents the number of requests ______, whereas rate limiting represents the number of requests ______.",
        options: [
            "simultaneously; over time",
            "within 24 hours; simultaneously",
            "handled per connection; handled per session",
            "queued; with a burst"
        ],
        correct: 0
    },
    {
        question: "Based on their formats, which of the following could be an FTP host name? (Select all that apply)",
        options: [
            "SN-1234567890AB",
            "193.168.1.500",
            "SKU-98765-MEHM",
            "https://www.google.com/search?q=ftp.frugalgrocer.com"
        ],
        correct: [1, 3]
    },
    {
        question: "If you accept an invitation from another account owner, you:",
        options: [
            "Are only allowed user account privileges",
            "Are automatically an admin for the account",
            "Gain account owner privileges in the account you were invited to",
            "Become a user in the invited environment and are no longer an account owner"
        ],
        correct: 3
    },
    {
        question: "When using the Delta export type with databases, which of the following should the query include?",
        options: [
            "lastExportDateTime or currentExportDateTime",
            "sysDateTime or lastDateTime",
            "data.id",
            "current_TimeStamp or exportTimeStamp"
        ],
        correct: 0
    },
    {
        question: "Which of the following can aid in meeting security requirements when connecting to a database that's not publicly accessible? (Select all that apply)",
        options: [
            "Whitelisting IP addresses",
            "Blacklisting IP addresses",
            "Activating network address translation",
            "Using on-premise agents"
        ],
        correct: [0, 3]
    },
    {
        question: "You can only use sample data in Playground.",
        options: ["True", "False"],
        correct: 1
    },
    {
        question: "A relative URI is a specific location for a web resource. Why is it called relative?",
        options: [
            "The location is related to the type of authentication used.",
            "The location is in relation to the primary base URI.",
            "The location depends on a user's time zone.",
            "The URI is relatively small compared to the complete resource location."
        ],
        correct: 1
    },
    {
        question: "You can edit a script from the Create/Edit My API panel.",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "What term describes the primary location of a web resource?",
        options: ["Base URI", "Root path", "HTTP locator", "Relative URI"],
        correct: 0
    },
    {
        question: "What are two items to identify when deciding how to troubleshoot an error? (Select all that apply)",
        options: [
            "Error classification",
            "Error code formatting",
            "Source of the error",
            "Date and time of the error"
        ],
        correct: [0, 2]
    },
    {
        question: "A team member is trying to access the Celigo platform API through a web browser but keeps getting an error message. What could be the cause? (Select all that apply)",
        options: [
            "The web browser doesn't support API requests.",
            "The internet connection is too slow.",
            "The browser's cache needs to be cleared.",
            "The person isn't an account owner."
        ],
        correct: [0, 3]
    },
    {
        question: "In order to use the once export type for an application, what type of field must the application's API include?",
        options: ["Boolean", "Ratio variable", "Status code", "Numeric"],
        correct: 0
    },
    {
        question: "Who can set a user account's access level? (Select all that apply)",
        options: ["Admin", "User", "Account Owner", "Super User"],
        correct: [0, 2]
    },
    {
        question: "What account type can transfer account ownership?",
        options: ["Account Owner", "User", "Super User", "Admin"],
        correct: 0
    },
    {
        question: "Which of the following is correct regarding lookups? (Select all that apply)",
        options: [
            "Lookup data never intersects with data from the source.",
            "A lookup is the first step of a flow.",
            "A lookup cannot be the last step of a flow.",
            "Results mapping is used to merge data from a lookup with data from an export."
        ],
        correct: [2, 3]
    },
    {
        question: "What flow elements can you reach using the Playground Integration explorer? (Select all that apply)",
        options: ["API logs", "Connection", "Export", "Flow"],
        correct: [1, 2, 3]
    },
    {
        question: "What type of mapping is a simple source field-to-destination field match?",
        options: [
            "Standard",
            "Handlebars Expression",
            "Simple",
            "Hard-Coded"
        ],
        correct: 0
    },
    {
        question: "Every connector has webhook capabilities.",
        options: ["True", "False"],
        correct: 1
    },
    {
        question: "You need to request special access to see a list of templates and integration apps (IAs).",
        options: ["True", "False"],
        correct: 1
    },
    {
        question: "Which of the following are AFEs available in Playground? (Select all that apply)",
        options: ["AVI parser", "PDF parser", "CSV parser", "Form Builder"],
        correct: [2]
    },
    {
        question: "When generating files during an FTP import, what file types options are available? (Select all that apply)",
        options: ["CSV", "GDOC", "JSON", "AVI"],
        correct: [0, 2]
    },
    {
        question: "How should data requests using the Celigo platform API be formatted?",
        options: ["Plain text", "XML", "SQL", "JSON"],
        correct: 3
    },
    {
        question: "What checkbox option under Profile allows you to access advanced options?",
        options: [
            "Developer Mode",
            "Advanced Options",
            "Enable Professional Settings",
            "Custom Settings"
        ],
        correct: 0
    },
    {
        question: "Users can create a different schedule for each export in a flow.",
        options: ["False", "True"],
        correct: 1
    },
    {
        question: "Where are My APIs located in the Celigo platform?",
        options: ["Resources", "Integrations", "Account", "Tools"],
        correct: 0
    },
    {
        question: "Which export type requires adding the handlebar expression as a parameter to the relative URI?",
        options: ["Delta", "Limit", "Once", "All"],
        correct: 0
    },
    {
        question: "What flow step is an HTTP lookup most similar to?",
        options: ["Branching", "Import", "Webhook listener", "Export"],
        correct: 3
    },
    {
        question: "Filters are designed to:",
        options: [
            "Remove error generating data",
            "Modify data types",
            "Select which data is and is not included throughout a flow",
            "Use custom JavaScript to modify flow behavior"
        ],
        correct: 2
    },
    {
        question: "What Celigo platform menu are Scripts located?",
        options: ["Resources", "Account", "Marketplace", "Tools"],
        correct: 0
    },
    {
        question: "Which of the following places in the Celigo platform can handlebars be used? (Select all that apply)",
        options: [
            "Mappings",
            "Request bodies",
            "Connection configurations",
            "Request parameters"
        ],
        correct: [0, 1]
    },
    {
        question: "In Mapper 2.0, instead of Multi-field Mapping, you'll see:",
        options: [
            "Dynamic Lookup",
            "Static Lookup",
            "Complex Mapping",
            "Handlebars Expression"
        ],
        correct: 3
    },
    {
        question: "What is the most efficient way to dynamically update the Relative URI of an HTTP import?",
        options: [
            "Add multiple imports with hardcoded values in the Relative URI",
            "Restart the HTTP server to apply changes to the URI",
            "Use handlebar expressions in the Relative URI",
            "Manually edit the URI in the configuration file for each update"
        ],
        correct: 2
    }
];
