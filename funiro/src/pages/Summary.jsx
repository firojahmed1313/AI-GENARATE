import React, { useState } from 'react'
import axios from "axios"

const Summary = () => {
  const [textValue, setTextValue] = useState();
  const [outputValue, setoutputValue] = useState();
  const getValue = async (e) => {
    setoutputValue("");
    console.log(textValue);
    let data = JSON.stringify({
      inputs: textValue,
      parameters: {
        max_length: 100,
        min_length: 30,
      },
    });
    const token = "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";
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: data,
    };

    try {
      const response = await axios(config);
      console.log(response.data[0].summary_text);
      setoutputValue(response.data[0].summary_text);
    } catch (error) {
      console.warn(error);
    }

  }
  console.log(outputValue);

  return (
    <div className='summary'>
      <h1>AI Text Summarizer App</h1>
      <p> Welcome to the AI Text Summarizer App! This app leverages the power of Artificial Intelligence APIs to provide concise summaries of long texts. Whether you have a lengthy article, research paper, or any other text document that you want to summarize quickly, our app can assist you. </p>
      <p> Simply paste your text into the text area below and click the "Summarize" button. </p>
      <div className='summaryContainer'>

        <div className='summaryInput'>
          <textarea className='summarytextarea' name="postContent" rows={25} cols={45} placeholder="Paste in some text to summarize. (Min length is 200 chars. Max length is 100,000 chars.)" maxLength="100000" onChange={(e) => setTextValue(e.target.value)} value={textValue} />
          <button className="submit-button" >
            <span className="submit-button-text" onClick={getValue}>Summarize</span>
          </button>
        </div>
        <div className='summaryOutput'>
          <textarea className='summarytextarea' name="postContent" rows={25} cols={45} value={outputValue} />
          <button className="submit-button" >
            <span className="submit-button-text" onClick={getValue}>ReGenarate</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Summary