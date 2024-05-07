import React from 'react';
import './MessageReader.css';

function MessageReader(props){
    return (
        <div className="messageReader">
        <div>
        <h2>Subject!! {props.ID}</h2>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"></path></svg>
        <div>
        <h3>Sender!!</h3>
        <p style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        To:Me
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"></path></svg> 
        </p>
        </div>
        </div>
        <div>
        <p>Time and Date</p>
        </div>
        </div>
        <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales, diam iaculis pellentesque ullamcorper, risus odio sollicitudin magna, nec luctus nisl felis ut massa. Integer at blandit risus. Integer vel sem at massa sodales pretium vitae a ante. Donec ac dictum nibh, luctus imperdiet magna. Pellentesque pellentesque purus urna, quis interdum tortor consequat id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec accumsan nisl sed vestibulum pretium. In ultricies risus mi, in luctus purus pretium in. Vestibulum scelerisque, dolor ac eleifend ullamcorper, dolor nunc placerat ligula, sed consequat 
        tortor sem ac tortor. Aliquam vel gravida nisl. Nunc justo diam, vulputate a velit imperdiet, rhoncus ornare massa. Pellentesque ultrices tellus ac lectus mattis hendrerit. Nulla at orci metus. Maecenas augue augue, lobortis nec dolor ac, euismod suscipit dui. Maecenas facilisis ornare suscipit. Proin quis mattis erat, hendrerit tristique sapien. Phasellus feugiat euismod ligula eget ultricies. In a lacus in risus faucibus rhoncus eu vel sem. Suspendisse sit amet tempus mi. 
        Donec vestibulum metus sed dolor euismod, in fermentum arcu fringilla. Nulla facilisi. Pellentesque sed euismod purus. Ut pretium elit pulvinar, rhoncus quam eu, pulvinar nisi. Sed venenatis accumsan nunc, sed lobortis orci posuere a. Curabitur mattis nisi malesuada velit fermentum elementum. Phasellus metus nulla, tincidunt sit amet luctus a, porttitor ut massa. Nullam eget lobortis nulla. Quisque eros ligula, 
        tempus sit amet metus a, malesuada semper elit. Duis sodales sapien at libero accumsan, sit amet tincidunt magna blandit. Duis a mauris aliquam, egestas odio ac, finibus odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tristique in felis volutpat facilisis. Nulla lorem urna, malesuada semper eros sed, 
        scelerisque porttitor velit. Donec tincidunt ipsum eu felis pharetra, eu cursus ipsum semper. Sed eu nisl dolor.Proin sit amet lectus ipsum. Integer dolor magna, gravida id ligula at, fringilla fringilla enim. Sed euismod ligula mi, nec iaculis diam auctor non. Donec interdum, ante nec pretium vehicula, mi massa gravida massa, eget scelerisque mi nibh porttitor nulla. Phasellus dignissim nisl 
        eget tempor dapibus. Cras quis tincidunt nisl. Donec non magna at enim imperdiet ultrices in vel mi. In egestas rhoncus semper. Phasellus varius efficitur lorem eget hendrerit. Phasellus vehicula tellus eu nibh semper hendrerit. Proin mi quam, lobortis sed consequat vel, pulvinar sit amet lacus. Donec quis leo nisl. Etiam vitae mollis lorem. Mauris ut est vitae ante bibendum faucibus at ac neque. Cras hendrerit, elit vitae luctus suscipit, mi felis facilisis risus, id mattis nisl diam sed odio. Morbi pulvinar sem accumsan nibh accumsan ornare. Proin vel leo sit amet ligula ornare ultricies id ac odio. Morbi lacinia ut dui quis condimentum.
         Donec non maximus justo. Ut felis sem, vulputate ac dignissim eu, tristique at augue. Maecenas volutpat est massa. Vestibulum in ligula efficitur, fringilla purus in, accumsan mauris. Nullam pretium leo in placerat accumsan. Curabitur eu aliquam tellus. Integer eleifend nisl scelerisque enim condimentum interdum. Aenean aliquam egestas nisi, et congue mi rutrum eu. Vestibulum vel scelerisque purus, vitae iaculis elit. Proin nec ante ante. Nunc in nulla nec massa elementum rhoncus. Nulla non eros luctus, bibendum neque id, ornare arcu.</p>
         </div>
         <div>
         <h4>Attachments:</h4>
         <img src="https://static.vecteezy.com/system/resources/previews/000/581/545/original/email-icon-vector-illustration.jpg" alt="logo" height="100px" width="100px"/>

         </div>
         <div style={{display: "flex", gap: "25px", marginTop: "50px"}}>
         <button style={{height: "40px", width: "120px", display: "flex", justifyContent: "space-around", alignItems: "center", borderRadius: "20px", border: "1px solid grey",cursor:"pointer"}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"></path></svg>
         <h4>Reply</h4>
         </button>
         <button style={{height: "40px" ,width: "120px", display: "flex", justifyContent: "space-around", alignItems: "center", borderRadius: "20px", border: "1px solid grey",cursor:"pointer"}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"></path></svg>
         <h4>Forward</h4>
         </button>
         </div>
         </div>
    )
}

export default MessageReader;