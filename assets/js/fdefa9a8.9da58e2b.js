"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7453],{39245:(e,t,s)=>{s.r(t),s.d(t,{CH:()=>h,assets:()=>l,chCodeConfig:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"Components/components-data","title":"Data","description":"Data components load data from a source into your flow.","source":"@site/docs/Components/components-data.md","sourceDirName":"Components","slug":"/components-data","permalink":"/components-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Data","slug":"/components-data"},"sidebar":"docs","previous":{"title":"Create custom Python components","permalink":"/components-custom-components"},"next":{"title":"Embeddings","permalink":"/components-embedding-models"}}');var d=s(74848),r=s(28453),i=s(24754);const c={title:"Data",slug:"/components-data"},o="Data components in Langflow",l={},h={annotations:i.hk,Code:i.Cy},a={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},x=[{value:"Use a data component in a flow",id:"use-a-data-component-in-a-flow",level:2},{value:"API Request",id:"api-request",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Directory",id:"directory",level:2},{value:"Inputs",id:"inputs-1",level:3},{value:"Outputs",id:"outputs-1",level:3},{value:"File",id:"file",level:2},{value:"Inputs",id:"inputs-2",level:3},{value:"Outputs",id:"outputs-2",level:3},{value:"Gmail Loader",id:"gmail-loader",level:2},{value:"Inputs",id:"inputs-3",level:3},{value:"Outputs",id:"outputs-3",level:3},{value:"Google Drive Loader",id:"google-drive-loader",level:2},{value:"Inputs",id:"inputs-4",level:3},{value:"Outputs",id:"outputs-4",level:3},{value:"Google Drive Search",id:"google-drive-search",level:2},{value:"Inputs",id:"inputs-5",level:3},{value:"Outputs",id:"outputs-5",level:3},{value:"SQL Query",id:"sql-query",level:2},{value:"Inputs",id:"inputs-6",level:3},{value:"Outputs",id:"outputs-6",level:3},{value:"URL",id:"url",level:2},{value:"Inputs",id:"inputs-7",level:3},{value:"Outputs",id:"outputs-7",level:3},{value:"Webhook",id:"webhook",level:2},{value:"Inputs",id:"inputs-8",level:3},{value:"Outputs",id:"outputs-8",level:3}];function j(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return h||p("CH",!1),h.Code||p("CH.Code",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"data-components-in-langflow",children:"Data components in Langflow"})}),"\n",(0,d.jsx)(t.p,{children:"Data components load data from a source into your flow."}),"\n",(0,d.jsx)(t.p,{children:"They may perform some processing or type checking, like converting raw HTML data into text, or ensuring your loaded file is of an acceptable type."}),"\n",(0,d.jsx)(t.h2,{id:"use-a-data-component-in-a-flow",children:"Use a data component in a flow"}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.strong,{children:"URL"})," data component loads content from a list of URLs."]}),"\n",(0,d.jsxs)(t.p,{children:["In the component's ",(0,d.jsx)(t.strong,{children:"URLs"})," field, enter a comma-separated list of URLs you want to load. Alternatively, connect a component that outputs the ",(0,d.jsx)(t.code,{children:"Message"})," type, like the ",(0,d.jsx)(t.strong,{children:"Chat Input"})," component, to supply your URLs with a component."]}),"\n",(0,d.jsxs)(t.p,{children:["To output a ",(0,d.jsx)(t.code,{children:"Data"})," type, in the ",(0,d.jsx)(t.strong,{children:"Output Format"})," dropdown, select ",(0,d.jsx)(t.strong,{children:"Raw HTML"}),".\nTo output a ",(0,d.jsx)(t.code,{children:"Message"})," type, in the ",(0,d.jsx)(t.strong,{children:"Output Format"})," dropdown, select ",(0,d.jsx)(t.strong,{children:"Text"}),". This option applies postprocessing with the ",(0,d.jsx)(t.code,{children:"data_to_text"})," helper function."]}),"\n",(0,d.jsx)(t.p,{children:"In this example of a document ingestion pipeline, the URL component outputs raw HTML to a text splitter, which splits the raw content into chunks for a vector database to ingest."}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.img,{alt:"URL component in a data ingestion pipeline",src:s(80352).A+"",width:"2586",height:"1550"})}),"\n",(0,d.jsx)(t.h2,{id:"api-request",children:"API Request"}),"\n",(0,d.jsx)(t.p,{children:"This component makes HTTP requests using URLs or cURL commands."}),"\n",(0,d.jsx)(t.h3,{id:"inputs",children:"Inputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Display Name"}),(0,d.jsx)(t.th,{children:"Info"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"urls"}),(0,d.jsx)(t.td,{children:"URLs"}),(0,d.jsx)(t.td,{children:"Enter one or more URLs, separated by commas."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"curl"}),(0,d.jsx)(t.td,{children:"cURL"}),(0,d.jsx)(t.td,{children:"Paste a curl command to populate the dictionary fields for headers and body."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"method"}),(0,d.jsx)(t.td,{children:"Method"}),(0,d.jsx)(t.td,{children:"The HTTP method to use."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"use_curl"}),(0,d.jsx)(t.td,{children:"Use cURL"}),(0,d.jsx)(t.td,{children:"Enable cURL mode to populate fields from a cURL command."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"query_params"}),(0,d.jsx)(t.td,{children:"Query Parameters"}),(0,d.jsx)(t.td,{children:"The query parameters to append to the URL."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"body"}),(0,d.jsx)(t.td,{children:"Body"}),(0,d.jsxs)(t.td,{children:["The body to send with the request as a dictionary (for ",(0,d.jsx)(t.code,{children:"POST"}),", ",(0,d.jsx)(t.code,{children:"PATCH"}),", ",(0,d.jsx)(t.code,{children:"PUT"}),")."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"headers"}),(0,d.jsx)(t.td,{children:"Headers"}),(0,d.jsx)(t.td,{children:"The headers to send with the request as a dictionary."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timeout"}),(0,d.jsx)(t.td,{children:"Timeout"}),(0,d.jsx)(t.td,{children:"The timeout to use for the request."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"follow_redirects"}),(0,d.jsx)(t.td,{children:"Follow Redirects"}),(0,d.jsx)(t.td,{children:"Whether to follow http redirects."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"save_to_file"}),(0,d.jsx)(t.td,{children:"Save to File"}),(0,d.jsx)(t.td,{children:"Save the API response to a temporary file"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"include_httpx_metadata"}),(0,d.jsx)(t.td,{children:"Include HTTPx Metadata"}),(0,d.jsxs)(t.td,{children:["Include properties such as ",(0,d.jsx)(t.code,{children:"headers"}),", ",(0,d.jsx)(t.code,{children:"status_code"}),", ",(0,d.jsx)(t.code,{children:"response_headers"}),", and ",(0,d.jsx)(t.code,{children:"redirection_history"})," in the output."]})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"outputs",children:"Outputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Display Name"}),(0,d.jsx)(t.th,{children:"Info"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"data"}),(0,d.jsx)(t.td,{children:"Data"}),(0,d.jsx)(t.td,{children:"The result of the API requests."})]})})]}),"\n",(0,d.jsx)(t.h2,{id:"directory",children:"Directory"}),"\n",(0,d.jsx)(t.p,{children:"This component recursively loads files from a directory, with options for file types, depth, and concurrency."}),"\n",(0,d.jsx)(t.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Input"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"path"}),(0,d.jsx)(t.td,{children:"MessageTextInput"}),(0,d.jsx)(t.td,{children:"Path to the directory to load files from"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"types"}),(0,d.jsx)(t.td,{children:"MessageTextInput"}),(0,d.jsx)(t.td,{children:"File types to load (leave empty to load all types)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"depth"}),(0,d.jsx)(t.td,{children:"IntInput"}),(0,d.jsx)(t.td,{children:"Depth to search for files"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_concurrency"}),(0,d.jsx)(t.td,{children:"IntInput"}),(0,d.jsx)(t.td,{children:"Maximum concurrency for loading files"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"load_hidden"}),(0,d.jsx)(t.td,{children:"BoolInput"}),(0,d.jsx)(t.td,{children:"If true, hidden files are loaded"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"recursive"}),(0,d.jsx)(t.td,{children:"BoolInput"}),(0,d.jsx)(t.td,{children:"If true, the search is recursive"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"silent_errors"}),(0,d.jsx)(t.td,{children:"BoolInput"}),(0,d.jsx)(t.td,{children:"If true, errors do not raise an exception"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"use_multithreading"}),(0,d.jsx)(t.td,{children:"BoolInput"}),(0,d.jsx)(t.td,{children:"If true, multithreading is used"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"outputs-1",children:"Outputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Output"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"data"}),(0,d.jsx)(t.td,{children:"List[Data]"}),(0,d.jsx)(t.td,{children:"Loaded file data from the directory"})]})})]}),"\n",(0,d.jsx)(t.h2,{id:"file",children:"File"}),"\n",(0,d.jsx)(t.p,{children:"The FileComponent is a class that loads and parses text files of various supported formats, converting the content into a Data object. It supports multiple file types and provides an option for silent error handling."}),"\n",(0,d.jsx)(t.p,{children:"The maximum supported file size is 100 MB."}),"\n",(0,d.jsx)(t.h3,{id:"inputs-2",children:"Inputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Display Name"}),(0,d.jsx)(t.th,{children:"Info"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"path"}),(0,d.jsx)(t.td,{children:"Path"}),(0,d.jsx)(t.td,{children:"File path to load."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"silent_errors"}),(0,d.jsx)(t.td,{children:"Silent Errors"}),(0,d.jsx)(t.td,{children:"If true, errors do not raise an exception."})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"outputs-2",children:"Outputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Display Name"}),(0,d.jsx)(t.th,{children:"Info"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"data"}),(0,d.jsx)(t.td,{children:"Data"}),(0,d.jsx)(t.td,{children:"Parsed content of the file as a Data object."})]})})]}),"\n",(0,d.jsx)(t.h2,{id:"gmail-loader",children:"Gmail Loader"}),"\n",(0,d.jsx)(t.p,{children:"This component loads emails from Gmail using provided credentials and filters."}),"\n",(0,d.jsxs)(t.p,{children:["For more on creating a service account JSON, see ",(0,d.jsx)(t.a,{href:"https://developers.google.com/identity/protocols/oauth2/service-account",children:"Service Account JSON"}),"."]}),"\n",(0,d.jsx)(t.h3,{id:"inputs-3",children:"Inputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Input"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"json_string"}),(0,d.jsx)(t.td,{children:"SecretStrInput"}),(0,d.jsx)(t.td,{children:"JSON string containing OAuth 2.0 access token information for service account access"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"label_ids"}),(0,d.jsx)(t.td,{children:"MessageTextInput"}),(0,d.jsx)(t.td,{children:"Comma-separated list of label IDs to filter emails"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"max_results"}),(0,d.jsx)(t.td,{children:"MessageTextInput"}),(0,d.jsx)(t.td,{children:"Maximum number of emails to load"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"outputs-3",children:"Outputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Output"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"data"}),(0,d.jsx)(t.td,{children:"Data"}),(0,d.jsx)(t.td,{children:"Loaded email data"})]})})]}),"\n",(0,d.jsx)(t.h2,{id:"google-drive-loader",children:"Google Drive Loader"}),"\n",(0,d.jsx)(t.p,{children:"This component loads documents from Google Drive using provided credentials and a single document ID."}),"\n",(0,d.jsxs)(t.p,{children:["For more on creating a service account JSON, see ",(0,d.jsx)(t.a,{href:"https://developers.google.com/identity/protocols/oauth2/service-account",children:"Service Account JSON"}),"."]}),"\n",(0,d.jsx)(t.h3,{id:"inputs-4",children:"Inputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Input"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"json_string"}),(0,d.jsx)(t.td,{children:"SecretStrInput"}),(0,d.jsx)(t.td,{children:"JSON string containing OAuth 2.0 access token information for service account access"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"document_id"}),(0,d.jsx)(t.td,{children:"MessageTextInput"}),(0,d.jsx)(t.td,{children:"Single Google Drive document ID"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"outputs-4",children:"Outputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Output"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"docs"}),(0,d.jsx)(t.td,{children:"Data"}),(0,d.jsx)(t.td,{children:"Loaded document data"})]})})]}),"\n",(0,d.jsx)(t.h2,{id:"google-drive-search",children:"Google Drive Search"}),"\n",(0,d.jsx)(t.p,{children:"This component searches Google Drive files using provided credentials and query parameters."}),"\n",(0,d.jsxs)(t.p,{children:["For more on creating a service account JSON, see ",(0,d.jsx)(t.a,{href:"https://developers.google.com/identity/protocols/oauth2/service-account",children:"Service Account JSON"}),"."]}),"\n",(0,d.jsx)(t.h3,{id:"inputs-5",children:"Inputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Input"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"token_string"}),(0,d.jsx)(t.td,{children:"SecretStrInput"}),(0,d.jsx)(t.td,{children:"JSON string containing OAuth 2.0 access token information for service account access"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"query_item"}),(0,d.jsx)(t.td,{children:"DropdownInput"}),(0,d.jsx)(t.td,{children:"The field to query"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"valid_operator"}),(0,d.jsx)(t.td,{children:"DropdownInput"}),(0,d.jsx)(t.td,{children:"Operator to use in the query"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"search_term"}),(0,d.jsx)(t.td,{children:"MessageTextInput"}),(0,d.jsx)(t.td,{children:"The value to search for in the specified query item"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"query_string"}),(0,d.jsx)(t.td,{children:"MessageTextInput"}),(0,d.jsx)(t.td,{children:"The query string used for searching (can be edited manually)"})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"outputs-5",children:"Outputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Output"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"doc_urls"}),(0,d.jsx)(t.td,{children:"List[str]"}),(0,d.jsx)(t.td,{children:"URLs of the found documents"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"doc_ids"}),(0,d.jsx)(t.td,{children:"List[str]"}),(0,d.jsx)(t.td,{children:"IDs of the found documents"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"doc_titles"}),(0,d.jsx)(t.td,{children:"List[str]"}),(0,d.jsx)(t.td,{children:"Titles of the found documents"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Data"}),(0,d.jsx)(t.td,{children:"Data"}),(0,d.jsx)(t.td,{children:"Document titles and URLs in a structured format"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"sql-query",children:"SQL Query"}),"\n",(0,d.jsx)(t.p,{children:"This component executes SQL queries on a specified database."}),"\n",(0,d.jsx)(t.h3,{id:"inputs-6",children:"Inputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Display Name"}),(0,d.jsx)(t.th,{children:"Info"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"query"}),(0,d.jsx)(t.td,{children:"Query"}),(0,d.jsx)(t.td,{children:"The SQL query to execute."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"database_url"}),(0,d.jsx)(t.td,{children:"Database URL"}),(0,d.jsx)(t.td,{children:"The URL of the database."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"include_columns"}),(0,d.jsx)(t.td,{children:"Include Columns"}),(0,d.jsx)(t.td,{children:"Include columns in the result."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"passthrough"}),(0,d.jsx)(t.td,{children:"Passthrough"}),(0,d.jsx)(t.td,{children:"If an error occurs, return the query instead of raising an exception."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"add_error"}),(0,d.jsx)(t.td,{children:"Add Error"}),(0,d.jsx)(t.td,{children:"Add the error to the result."})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"outputs-6",children:"Outputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Display Name"}),(0,d.jsx)(t.th,{children:"Info"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"result"}),(0,d.jsx)(t.td,{children:"Result"}),(0,d.jsx)(t.td,{children:"The result of the SQL query execution."})]})})]}),"\n",(0,d.jsx)(t.h2,{id:"url",children:"URL"}),"\n",(0,d.jsxs)(t.p,{children:["This component fetches content from one or more URLs, processes the content, and returns it as a list of ",(0,d.jsx)(t.a,{href:"/concepts-objects",children:"Data"})," objects."]}),"\n",(0,d.jsx)(t.h3,{id:"inputs-7",children:"Inputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Display Name"}),(0,d.jsx)(t.th,{children:"Info"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"urls"}),(0,d.jsx)(t.td,{children:"URLs"}),(0,d.jsx)(t.td,{children:"Enter one or more URLs"})]})})]}),"\n",(0,d.jsx)(t.h3,{id:"outputs-7",children:"Outputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Display Name"}),(0,d.jsx)(t.th,{children:"Info"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"data"}),(0,d.jsx)(t.td,{children:"Data"}),(0,d.jsx)(t.td,{children:"List of Data objects containing fetched content and metadata"})]})})]}),"\n",(0,d.jsx)(t.h2,{id:"webhook",children:"Webhook"}),"\n",(0,d.jsx)(t.p,{children:"This component defines a webhook trigger that runs a flow when it receives an HTTP POST request."}),"\n",(0,d.jsxs)(t.p,{children:["If the input is not valid JSON, the component wraps it in a ",(0,d.jsx)(t.code,{children:"payload"})," object so that it can be processed and still trigger the flow. The component does not require an API key."]}),"\n",(0,d.jsxs)(t.p,{children:["When a ",(0,d.jsx)(t.strong,{children:"Webhook"})," component is added to the workspace, a new ",(0,d.jsx)(t.strong,{children:"Webhook cURL"})," tab becomes available in the ",(0,d.jsx)(t.strong,{children:"API"})," pane that contains an HTTP POST request for triggering the webhook component. For example:"]}),"\n",(0,d.jsx)(h.Code,{codeConfig:a,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"-X ",props:{style:{color:"#79C0FF"}}},{content:"POST ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:'  "http://127.0.0.1:7860/api/v1/webhook/**YOUR_FLOW_ID**" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  -H ",props:{style:{color:"#79C0FF"}}},{content:"'Content-Type: application/json'",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  -d ",props:{style:{color:"#79C0FF"}}},{content:'\'{"any": "data"}\'',props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,d.jsx)(t.p,{children:"To test the webhook component:"}),"\n",(0,d.jsxs)(t.ol,{children:["\n",(0,d.jsxs)(t.li,{children:["Add a ",(0,d.jsx)(t.strong,{children:"Webhook"})," component to the flow."]}),"\n",(0,d.jsxs)(t.li,{children:["Connect the ",(0,d.jsx)(t.strong,{children:"Webhook"})," component's ",(0,d.jsx)(t.strong,{children:"Data"})," output to the ",(0,d.jsx)(t.strong,{children:"Data"})," input of a ",(0,d.jsx)(t.a,{href:"/components-processing#parse-data-data-to-message",children:"Data to Message"})," component."]}),"\n",(0,d.jsxs)(t.li,{children:["Connect the ",(0,d.jsx)(t.strong,{children:"Data to Message"})," component's ",(0,d.jsx)(t.strong,{children:"Message"})," output to the ",(0,d.jsx)(t.strong,{children:"Text"})," input of a ",(0,d.jsx)(t.a,{href:"/components-io#chat-output",children:"Chat Output"})," component."]}),"\n",(0,d.jsxs)(t.li,{children:["To send a POST request, copy the code from the ",(0,d.jsx)(t.strong,{children:"Webhook cURL"})," tab in the ",(0,d.jsx)(t.strong,{children:"API"})," pane and paste it into a terminal."]}),"\n",(0,d.jsx)(t.li,{children:"Send the POST request."}),"\n",(0,d.jsxs)(t.li,{children:["Open the ",(0,d.jsx)(t.strong,{children:"Playground"}),".\nYour JSON data is posted to the ",(0,d.jsx)(t.strong,{children:"Chat Output"})," component, which indicates that the webhook component is correctly triggering the flow."]}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"inputs-8",children:"Inputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"data"}),(0,d.jsx)(t.td,{children:"String"}),(0,d.jsx)(t.td,{children:"JSON payload for testing the webhook component"})]})})]}),"\n",(0,d.jsx)(t.h3,{id:"outputs-8",children:"Outputs"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"output_data"}),(0,d.jsx)(t.td,{children:"Data"}),(0,d.jsx)(t.td,{children:"Processed data from the webhook input"})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},80352:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/url-component-0ced1fa00ee3b97582421254b6d5be78.png"}}]);