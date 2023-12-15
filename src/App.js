import React ,{useState} from 'react';
import { marked } from 'marked';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'
import { faMaximize } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [display, setDisplay] = useState(`
  # I don't love you
  ## Like i did yesterday
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `)

  marked.setOptions({
    breaks:true
  })

  return (
    <div className="App">
      <header className="App-header">

        <div className='text-editor'>
          <div className='toolbar'><FontAwesomeIcon icon={faFreeCodeCamp} className='highlight'/> Editor<FontAwesomeIcon className='max-icon' icon={faMaximize} /></div> 
          <textarea id="editor" value={display} onChange={(event)=> {setDisplay(event.target.value);}}></textarea>
        </div>
        <div className='box-preview'>
        <div className='text-preview'>
        <div className='toolbar'><FontAwesomeIcon icon={faFreeCodeCamp} className='highlight'/> Previewer<FontAwesomeIcon className='max-icon' icon={faMaximize} /></div> 
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(display)}}></div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
