import React,{useState} from 'react';
import './Compose.css';

function Compose(){
    const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [cc, setCc] = useState('');
  const [bcc, setBcc] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontSize, setFontSize] = useState('medium');
  const [fontColor, setFontColor] = useState('#000000');
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [attachments, setAttachments] = useState([]);

  const handleSend = e => {
    e.preventDefault();
    console.log('Sending email:', {
      from,
      to,
      cc,
      bcc,
      subject,
      body,
      attachments,
      fontFamily,
      fontColor,
      fontSize,
      isBold,
      isItalic
    });
  };
  const handleAttachment = e => {
    // Handle attachment functionality here
    const file = e.target.files[0];
    setAttachments([...attachments, file]);
  };
  const handleFontFamilyChange = e => {
    setFontFamily(e.target.value);
  };
  const handleFontSizeChange = e => {
    setFontSize(e.target.value);
  };
  const handleFontColorChange = e => {
    setFontColor(e.target.value);
  };
  const handleItalicToggle = () => {
    setIsItalic(!isItalic);
  };
  const handleBoldToggle = () => {
    setIsBold(!isBold);
  };
  function handledelete(e) {
    attachments.splice(e.target.id, 1);
    setAttachments([...attachments]);
  }
    return(
        <form  onSubmit={handleSend} className="compose-email">
        <div>
        <h1>New Draft</h1>
        </div>
        <div className="compose-email-header">
        <input type="email" className="compose-email-input" placeholder="From" required value={from} onChange={ e => setFrom(e.target.value)} />
        <input type="email" className="compose-email-input" placeholder="To" required value={to} onChange= {e => setTo(e.target.value)} />
        <input type="email" className="compose-email-input" placeholder="Cc" value={cc} onChange= {e => setCc(e.target.value)} />
        <input type="email" className="compose-email-input" placeholder="Bcc" value={bcc} onChange= {e => setBcc(e.target.value)} />
        <input type="text" className="compose-email-input" placeholder="Subject" value={subject} onChange= {e => setSubject(e.target.value)} />
        </div>
        <div className="compose-email-body">
        <div className="compose-email-format-controls">
        
        <select className="compose-email-select"  value={fontFamily} onChange= {handleFontFamilyChange} >
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
        </select>
        <select className="compose-email-select" value= {fontSize} onChange= {handleFontSizeChange} >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        </select>
        <input  value= {fontColor} onChange= {handleFontColorChange} type="color" className="compose-email-color-picker" />
        <button type="button" onClick= {handleItalicToggle} style= {{backgroundColor: isItalic && "rgb(150,150,150)"}} className="compose-email-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-type-italic" viewBox="0 0 16 16"><path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"></path></svg>
        </button>
        <button style= {{backgroundColor: isBold && "rgb(150,150,150)"}} onClick={handleBoldToggle} type="button" className="compose-email-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-type-bold" viewBox="0 0 16 16"><path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"></path></svg>
        </button>
        </div>
        <textarea 
         className="compose-email-textarea" 
         placeholder="Write your email..." 
         value= {body}
        onChange= {e => setBody(e.target.value)}
        style= {{
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: fontColor,
          fontStyle: isItalic ? 'italic' : 'normal',
          fontWeight: isBold ? 'bold' : 'normal'
        }}
         />
        <div className="compose-email-label">
        <svg style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16" ><path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"></path></svg>
        <label htmlFor="uploads" style={{cursor: "pointer"}}>Attach Files</label>
        <input type="file" id="uploads" name="uploads" className="compose-email-file-input" onChange= {handleAttachment} />
        </div>
        {attachments.length > 0 && <div className="compose-email-attachments">
          <h4>Attachments:</h4>
          <div style= {{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }} >
            {attachments.map((file, index) => <div key={index} style= {{
              display: "flex",
              gap: "1rem",
              color: "blue"
            }} >
            <p  >{file.name}</p>
            <div  id= {index}
              onClick= {handledelete}
              style= {{
                cursor: "pointer"
              }} >
                <svg  id={index} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path  id={index} d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
              </div>

            </div> )}
          </div>
        </div>}
        </div>
        <button type="submit" className="compose-email-send-button">Send</button>
        </form>
    )
}

export default Compose;