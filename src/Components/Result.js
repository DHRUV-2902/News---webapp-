import React from 'react'

export default function Result(props) {
  return (
    <div>
        <center>
            <br/>
            <table border="10px" width="100px" height="20px" margin="100px" style={{"width":"100%"}}>
                <tr>
                    <th>img</th>
                    <th>title</th>
                    <th>link</th>
                </tr>
                <tr>
                    <td><img src={props.urlToImage}></img></td>
                    <td><h1 className='font' style={{"fontFamily":"cursive"}}>{props.title}</h1></td>
                    <td><a href={props.url}>Read more</a></td>

                </tr>
            </table>
        
      
      
      </center>
    </div>
  )
}
