"use client"
// import React, { useState } from "react";
// import MDEditor from "@uiw/react-md-editor";

// const MarkdownEditor: React.FC = () => {
//   const [value, setValue] = useState("**Hello world!!!**");

//   return (
//     <div className="container">
//       <MDEditor value={value} onChange={(val) => setValue(val || "")} />
//     </div>
//   );
// };

// export default MarkdownEditor









// import React, { useState } from "react";
// import MDEditor, { commands } from "@uiw/react-md-editor";

// const CustomEditor: React.FC = () => {
//   const [value, setValue] = useState("# Your custom markdown here");

//   return (
//     <MDEditor
//       value={value}
//       onChange={(val) => setValue(val || "")}
//       commands={[
//         commands.bold,
//         commands.italic,
//         commands.link,
//         // Add or remove commands as needed
//       ]}
//     />
//   );
// };

// export default CustomEditor;







// import { BoldIcon } from "../../assets/BoldIcon";

// const customBoldCommand = {
//   ...commands.bold,
//   icon: <BoldIcon />,
// };

// return (
//   <MDEditor
//     value={value}
//     onChange={(val) => setValue(val || "")}
//     commands={[customBoldCommand, commands.italic, commands.link]}
//   />
// );










// const customPreviewCommand = {

//     name: "custom-preview",
  
//     keyCommand: "custom-preview",
  
//     buttonProps: { "aria-label": "Generate Preview" },
  
//     icon: <PreviewButton />,
  
//   };
  
  
  
//   return (
  
//     <MDEditor
  
//       value={value}
  
//       onChange={(val) => setValue(val || "")}
  
//       commands={[
  
//         customBoldCommand,
  
//         commands.italic,
  
//         commands.link,
  
//         customPreviewCommand,
  
//       ]}
  
//     />
  
//   );
  
  