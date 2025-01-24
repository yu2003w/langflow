"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8504],{94910:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"type":"api","id":"experimental-run-flow","title":"Experimental Run Flow","description":"","slug":"/experimental-run-flow","frontMatter":{},"api":{"tags":["Base"],"description":"Executes a specified flow by ID with optional input values, output selection, tweaks, and streaming capability.\\n\\nThis endpoint supports running flows with caching to enhance performance and efficiency.\\n\\n### Parameters:\\n- `flow_id` (str): The unique identifier of the flow to be executed.\\n- `inputs` (List[InputValueRequest], optional): A list of inputs specifying the input values and components\\n  for the flow. Each input can target specific components and provide custom values.\\n- `outputs` (List[str], optional): A list of output names to retrieve from the executed flow.\\n  If not provided, all outputs are returned.\\n- `tweaks` (Optional[Tweaks], optional): A dictionary of tweaks to customize the flow execution.\\n  The tweaks can be used to modify the flow\'s parameters and components.\\n  Tweaks can be overridden by the input values.\\n- `stream` (bool, optional): Specifies whether the results should be streamed. Defaults to False.\\n- `session_id` (Union[None, str], optional): An optional session ID to utilize existing session data for the flow\\n  execution.\\n- `api_key_user` (User): The user associated with the current API key. Automatically resolved from the API key.\\n\\n### Returns:\\nA `RunResponse` object containing the selected outputs (or all if not specified) of the executed flow\\nand the session ID.\\nThe structure of the response accommodates multiple inputs, providing a nested list of outputs for each input.\\n\\n### Raises:\\nHTTPException: Indicates issues with finding the specified flow, invalid input formats, or internal errors during\\nflow execution.\\n\\n### Example usage:\\n```json\\nPOST /run/{flow_id}\\nx-api-key: YOUR_API_KEY\\nPayload:\\n{\\n    \\"inputs\\": [\\n        {\\"components\\": [\\"component1\\"], \\"input_value\\": \\"value1\\"},\\n        {\\"components\\": [\\"component3\\"], \\"input_value\\": \\"value2\\"}\\n    ],\\n    \\"outputs\\": [\\"Component Name\\", \\"component_id\\"],\\n    \\"tweaks\\": {\\"parameter_name\\": \\"value\\", \\"Component Name\\": {\\"parameter_name\\": \\"value\\"}, \\"component_id\\": {\\"parameter_name\\": \\"value\\"}}\\n    \\"stream\\": false\\n}\\n```\\n\\nThis endpoint facilitates complex flow executions with customized inputs, outputs, and configurations,\\ncatering to diverse application requirements.","operationId":"experimental_run_flow_api_v1_run_advanced__flow_id__post","security":[{"API key query":[]},{"API key header":[]}],"parameters":[{"name":"flow_id","in":"path","required":true,"schema":{"type":"string","format":"uuid","title":"Flow Id"}}],"requestBody":{"content":{"application/json":{"schema":{"properties":{"inputs":{"anyOf":[{"items":{"properties":{"components":{"anyOf":[{"items":{"type":"string"},"type":"array"}],"title":"Components","default":[],"nullable":true},"input_value":{"anyOf":[{"type":"string"}],"title":"Input Value","nullable":true},"session":{"anyOf":[{"type":"string"}],"title":"Session","nullable":true},"type":{"anyOf":[{"type":"string","enum":["chat","text","any"]}],"title":"Type","description":"Defines on which components the input value should be applied. \'any\' applies to all input components.","default":"any","nullable":true}},"additionalProperties":false,"type":"object","title":"InputValueRequest","example":{"components":["components_id","Component Name"],"input_value":"input_value","session":"session_id"}},"type":"array"}],"title":"Inputs","nullable":true},"outputs":{"anyOf":[{"items":{"type":"string"},"type":"array"}],"title":"Outputs","nullable":true},"tweaks":{"anyOf":[{"additionalProperties":{"anyOf":[{"type":"string"},{"type":"object"}]},"type":"object","title":"Tweaks","description":"A dictionary of tweaks to adjust the flow\'s execution. Allows customizing flow behavior dynamically. All tweaks are overridden by the input values.","example":{"Component Name":{"parameter_name":"value"},"component_id":{"parameter_name":"value"},"parameter_name":"value"}}],"nullable":true},"stream":{"type":"boolean","title":"Stream","default":false},"session_id":{"anyOf":[{"type":"string"}],"title":"Session Id","nullable":true}},"type":"object","title":"Body_experimental_run_flow_api_v1_run_advanced__flow_id__post"}}}},"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{"properties":{"outputs":{"anyOf":[{"items":{"properties":{"inputs":{"type":"object","title":"Inputs"},"outputs":{"items":{"anyOf":[{"properties":{"results":{"anyOf":[{}],"title":"Results","nullable":true},"artifacts":{"anyOf":[{}],"title":"Artifacts","nullable":true},"outputs":{"anyOf":[{"type":"object"}],"title":"Outputs","nullable":true},"logs":{"anyOf":[{"type":"object"}],"title":"Logs","nullable":true},"messages":{"anyOf":[{"items":{"properties":{"message":{"anyOf":[{"type":"string"},{"items":{"anyOf":[{"type":"string"},{"type":"object"}]},"type":"array"}],"title":"Message"},"sender":{"anyOf":[{"type":"string"}],"title":"Sender","default":"Machine","nullable":true},"sender_name":{"anyOf":[{"type":"string"}],"title":"Sender Name","default":"AI","nullable":true},"session_id":{"anyOf":[{"type":"string"}],"title":"Session Id","nullable":true},"stream_url":{"anyOf":[{"type":"string"}],"title":"Stream Url","nullable":true},"component_id":{"anyOf":[{"type":"string"}],"title":"Component Id","nullable":true},"files":{"items":{"properties":{"path":{"type":"string","title":"Path"},"name":{"type":"string","title":"Name"},"type":{"type":"string","title":"Type"}},"type":"object","required":["path","name","type"],"title":"File","description":"File schema."},"type":"array","title":"Files","default":[]},"type":{"type":"string","title":"Type"}},"type":"object","required":["message","type"],"title":"ChatOutputResponse","description":"Chat output response schema."},"type":"array"}],"title":"Messages","nullable":true},"timedelta":{"anyOf":[{"type":"number"}],"title":"Timedelta","nullable":true},"duration":{"anyOf":[{"type":"string"}],"title":"Duration","nullable":true},"component_display_name":{"anyOf":[{"type":"string"}],"title":"Component Display Name","nullable":true},"component_id":{"anyOf":[{"type":"string"}],"title":"Component Id","nullable":true},"used_frozen_result":{"anyOf":[{"type":"boolean"}],"title":"Used Frozen Result","default":false,"nullable":true}},"type":"object","title":"ResultData"}],"nullable":true},"type":"array","title":"Outputs"}},"type":"object","title":"RunOutputs"},"type":"array"}],"title":"Outputs","default":[],"nullable":true},"session_id":{"anyOf":[{"type":"string"}],"title":"Session Id","nullable":true}},"type":"object","title":"RunResponse","description":"Run response schema."}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"}}}}},"method":"post","path":"/api/v1/run/advanced/{flow_id}","securitySchemes":{"OAuth2PasswordBearer":{"type":"oauth2","flows":{"password":{"scopes":{},"tokenUrl":"api/v1/login"}}},"API key query":{"type":"apiKey","in":"query","name":"x-api-key"},"API key header":{"type":"apiKey","in":"header","name":"x-api-key"}},"jsonRequestBodyExample":{"stream":false},"info":{"title":"Langflow","version":"1.1.1"},"postman":{"name":"Experimental Run Flow","description":{"content":"Executes a specified flow by ID with optional input values, output selection, tweaks, and streaming capability.\\n\\nThis endpoint supports running flows with caching to enhance performance and efficiency.\\n\\n### Parameters:\\n- `flow_id` (str): The unique identifier of the flow to be executed.\\n- `inputs` (List[InputValueRequest], optional): A list of inputs specifying the input values and components\\n  for the flow. Each input can target specific components and provide custom values.\\n- `outputs` (List[str], optional): A list of output names to retrieve from the executed flow.\\n  If not provided, all outputs are returned.\\n- `tweaks` (Optional[Tweaks], optional): A dictionary of tweaks to customize the flow execution.\\n  The tweaks can be used to modify the flow\'s parameters and components.\\n  Tweaks can be overridden by the input values.\\n- `stream` (bool, optional): Specifies whether the results should be streamed. Defaults to False.\\n- `session_id` (Union[None, str], optional): An optional session ID to utilize existing session data for the flow\\n  execution.\\n- `api_key_user` (User): The user associated with the current API key. Automatically resolved from the API key.\\n\\n### Returns:\\nA `RunResponse` object containing the selected outputs (or all if not specified) of the executed flow\\nand the session ID.\\nThe structure of the response accommodates multiple inputs, providing a nested list of outputs for each input.\\n\\n### Raises:\\nHTTPException: Indicates issues with finding the specified flow, invalid input formats, or internal errors during\\nflow execution.\\n\\n### Example usage:\\n```json\\nPOST /run/{flow_id}\\nx-api-key: YOUR_API_KEY\\nPayload:\\n{\\n    \\"inputs\\": [\\n        {\\"components\\": [\\"component1\\"], \\"input_value\\": \\"value1\\"},\\n        {\\"components\\": [\\"component3\\"], \\"input_value\\": \\"value2\\"}\\n    ],\\n    \\"outputs\\": [\\"Component Name\\", \\"component_id\\"],\\n    \\"tweaks\\": {\\"parameter_name\\": \\"value\\", \\"Component Name\\": {\\"parameter_name\\": \\"value\\"}, \\"component_id\\": {\\"parameter_name\\": \\"value\\"}}\\n    \\"stream\\": false\\n}\\n```\\n\\nThis endpoint facilitates complex flow executions with customized inputs, outputs, and configurations,\\ncatering to diverse application requirements.","type":"text/plain"},"url":{"path":["api","v1","run","advanced",":flow_id"],"host":["{{baseUrl}}"],"query":[],"variable":[{"disabled":false,"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<uuid>","key":"flow_id"}]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n  \\"inputs\\": [\\n    {\\n      \\"components\\": [\\n        \\"<string>\\",\\n        \\"<string>\\"\\n      ],\\n      \\"input_value\\": \\"<string>\\",\\n      \\"session\\": \\"<string>\\",\\n      \\"type\\": \\"<string>\\"\\n    },\\n    {\\n      \\"components\\": [\\n        \\"<string>\\",\\n        \\"<string>\\"\\n      ],\\n      \\"input_value\\": \\"<string>\\",\\n      \\"session\\": \\"<string>\\",\\n      \\"type\\": \\"<string>\\"\\n    }\\n  ],\\n  \\"outputs\\": [\\n    \\"<string>\\",\\n    \\"<string>\\"\\n  ],\\n  \\"tweaks\\": {\\n    \\"ex_a31\\": \\"<string>\\",\\n    \\"adipisicing_c\\": \\"<string>\\",\\n    \\"esse_7\\": \\"<string>\\"\\n  },\\n  \\"stream\\": false,\\n  \\"session_id\\": \\"<string>\\"\\n}","options":{"raw":{"language":"json"}}},"auth":{"type":"apikey","apikey":[{"type":"any","value":"x-api-key","key":"key"},{"type":"any","value":"{{apiKey}}","key":"value"},{"type":"any","value":"query","key":"in"}]}}},"source":"@site/openapi.json","sourceDirName":".","permalink":"/api/experimental-run-flow","previous":{"title":"Webhook Run Flow","permalink":"/api/webhook-run-flow"},"next":{"title":"Process","permalink":"/api/process"}}');var i=n(74848),a=n(28453);const o={},l="Experimental Run Flow",r=[{value:"Parameters:",id:"parameters",level:3},{value:"Returns:",id:"returns",level:3},{value:"Raises:",id:"raises",level:3},{value:"Example usage:",id:"example-usage",level:3}];function p(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"experimental-run-flow",children:"Experimental Run Flow"})}),"\n",(0,i.jsx)(t.p,{children:"Executes a specified flow by ID with optional input values, output selection, tweaks, and streaming capability."}),"\n",(0,i.jsx)(t.p,{children:"This endpoint supports running flows with caching to enhance performance and efficiency."}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"flow_id"})," (str): The unique identifier of the flow to be executed."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"inputs"})," (List[InputValueRequest], optional): A list of inputs specifying the input values and components\nfor the flow. Each input can target specific components and provide custom values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"outputs"})," (List[str], optional): A list of output names to retrieve from the executed flow.\nIf not provided, all outputs are returned."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tweaks"})," (Optional[Tweaks], optional): A dictionary of tweaks to customize the flow execution.\nThe tweaks can be used to modify the flow's parameters and components.\nTweaks can be overridden by the input values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"stream"})," (bool, optional): Specifies whether the results should be streamed. Defaults to False."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"session_id"})," (Union[None, str], optional): An optional session ID to utilize existing session data for the flow\nexecution."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"api_key_user"})," (User): The user associated with the current API key. Automatically resolved from the API key."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"returns",children:"Returns:"}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"RunResponse"})," object containing the selected outputs (or all if not specified) of the executed flow\nand the session ID.\nThe structure of the response accommodates multiple inputs, providing a nested list of outputs for each input."]}),"\n",(0,i.jsx)(t.h3,{id:"raises",children:"Raises:"}),"\n",(0,i.jsx)(t.p,{children:"HTTPException: Indicates issues with finding the specified flow, invalid input formats, or internal errors during\nflow execution."}),"\n",(0,i.jsx)(t.h3,{id:"example-usage",children:"Example usage:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'POST /run/{flow_id}\nx-api-key: YOUR_API_KEY\nPayload:\n{\n    "inputs": [\n        {"components": ["component1"], "input_value": "value1"},\n        {"components": ["component3"], "input_value": "value2"}\n    ],\n    "outputs": ["Component Name", "component_id"],\n    "tweaks": {"parameter_name": "value", "Component Name": {"parameter_name": "value"}, "component_id": {"parameter_name": "value"}}\n    "stream": false\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"This endpoint facilitates complex flow executions with customized inputs, outputs, and configurations,\ncatering to diverse application requirements."}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"flow_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Request Body "}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"inputs"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Inputs"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"outputs"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Outputs"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"tweaks"}),(0,i.jsx)("span",{style:{opacity:"0.6"}})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"stream"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Stream"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"session_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Session Id"})]})})]})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"200"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Successful Response"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"outputs"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Outputs"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"session_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Session Id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})]})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"422"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Validation Error"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"detail"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"loc"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"msg"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"type"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);