import { useState } from "react";

const Body = () => {
  let URL=`https://www.google.com/search?q=`;

  const types= {
    'Song':'AAC|ALAC|AIFF|mp3|WAV ',
    'Image':'JPEG|PNG|GIF|TIFF|RAW|WEB',
    'PDF':'pdf',
    'Book':'pdf|epub|mobi|azw|iba'
  }
  
  let final_query=``;
  const handleClick = () =>{
    console.log(types['songs']);
    let search_value = document.getElementById('search_bar').value;
    // console.log(search_value);
    let dropdown_value = document.getElementById("filetype").value;

    console.log(dropdown_value)
    let filetype = types[`${dropdown_value}`]
    console.log(filetype)


    let search_value_object = search_value.split(" ");
    // console.log(search_value_object)
    
    let search_value_join = search_value_object.join("+"); 
    // console.log(search_value_join)

    final_query = `${URL}${search_value_join} (${filetype})` 
    // console.log(final_query)
    window.open(`${final_query}`,'_blank')


  }

  return (
    <>
      <div className="body">
          <div className="body__image">
          <img
            className="logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google logo"
          />
          </div>
          <div className="body__search">
            <input type="text" className="searchfield" name="searchfield" placeholder="Enter search Query" id="search_bar" maxLength="30" />
            <select className="select" name="filetype" id="filetype">
              <option value="Image" className="select_option">Image</option>
              <option value="PDF" className="select_option">PDF</option>
              <option value="Song" className="select_option">Song</option>
              <option value="Book" className="select_option">Book</option>
            </select>
          </div>
          <a onClick={handleClick} id="submit_button" className="submit_button">Search</a>
      </div>
    </>
  );
};

export default Body;
