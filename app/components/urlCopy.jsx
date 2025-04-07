import React from 'react'
import { ScriptCopyBtn } from "../../components/magicui/script-copy-btn"


function URLCopyCompo() {
 
    const customCommandMap = {
        npm: "http://localhost:3000",
        
      };
      return (
        <ScriptCopyBtn
          showMultiplePackageOptions={false}
        
          codeLanguage="shell"
          lightTheme="vitesse-light"
          darkTheme="vitesse-light"
          commandMap={customCommandMap}
        />
      );
  
}

export default URLCopyCompo


