import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios"
import Head from 'next/head'
const Body = () => {
  let URL=`https://www.google.com/search?q=`;

  const types= {
 	'Video': 'avi|mkv|mov|mp4|mpg|wmv',
    	'Audio': 'ac3|flac|m4a|mp3|ogg|wav|wma',
    	'Ebook': 'CBZ|CBR|CHM|DOC|DOCX|EPUB|MOBI|ODT|PDF|RTF|txt',
    	'Pictures': 'bmp|gif|jpg|png|psd|tif|tiff',
    	'Softwares': 'apk|exe|ipa|iso|rar|tar|zip',
    	'Compressed': 'apk|exe|iso|rar|tar|zip|7z',
    	'PDF': 'pdf'
  }
  
  let final_query=``;
  const handleClick = () =>{
    // console.log(types['songs']);
    let search_value = document.getElementById('search_bar').value;
    // console.log(search_value);
    let dropdown_value = document.getElementById("filetype").value;
    // console.log(dropdown_value)
    let filetype = types[`${dropdown_value}`]
    // console.log(filetype)
    let search_value_object = search_value.split(" ");
    // console.log(search_value_object)
    let search_value_join = search_value_object.join("+"); 
    // console.log(search_value_join)
    final_query = `${URL}intext%3A${search_value_join}%20(${filetype})%20intitle%3A%22index.of.%2F%22` 
    // console.log(final_query)
    window.open(`${final_query}`,'_blank')
  }

  const[joke, setJoke] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single");
      // console.log(result.data);
      setJoke(`${result.data.joke}`);
    }
    fetchData();
  }, []);


  return (
    <>
    <Head>
    <title>GIndex</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content="Search for files on Google" />
    </Head>
      <div className="body">
          <div className="body__image">
          <Image src="/gindexlogo.png" alt="logo" width="272" height="92"></Image>
          </div>
          <div className="body__search">
            <input type="text" className="searchfield" name="searchfield" placeholder="Enter search Query" id="search_bar" maxLength="30" />
            <select className="select" name="filetype" id="filetype">
              <option value="Pictures" className="select_option">Pictures</option>
              <option value="Audio" className="select_option">Audio</option>
              <option value="Ebook" className="select_option">Ebook</option>
              <option value="Video" className="select_option">Video</option>
              <option value="PDF" className="select_option">PDF</option>
              <option value="Softwares" className="select_option">Software/Games</option>
              <option value="Compressed" className="select_option">Compressed</option>
            </select>
          </div>
          <a onClick={handleClick} id="submit_button" className="submit_button">Search</a>
          <div className="jokeBody">
          <h2>A little joke for you!</h2>
          <h3>{joke}</h3>
          </div>
      </div>
    </>
  );
};

export default Body;
