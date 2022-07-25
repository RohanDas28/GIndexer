const Body = () => {

  const handleClick = () =>{

    let value = document.getElementById('search_bar').value;
    console.log(value)
  }


  return (
    <>
      <div className="hero">
        <section className="cntr_pg">
          <img
            className="logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google logo"
          />
          <div name="searchquery">
            <div className="select_box">
            <input type="text" name="searchfield" id="search_bar" className="search_bar"></input>
            <select className="select" name="cars" id="cars">
              <option value="Image" className="select_option">Image</option>
              <option value="PDF" className="select_option">PDF</option>
              <option value="Song" className="select_option">Song</option>
              <option value="Book" className="select_option">Book</option>
            </select>
            </div>
            <div className="search_buttons">
              <input
                className="submit_buttons"
                type="submit"
                value="Search"
                name="submit"
                onClick={handleClick}
                target='_blank'
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Body;
