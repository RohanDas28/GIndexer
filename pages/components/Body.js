const Body = () => {
  return (
    <>
      <div classNameName="hero">
        <section className="cntr_pg">
          <img
            className="logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google logo"
          />
          <form action="#" method="#" name="searchquery">
            <input type="text" name="searchfield" className="search_bar"></input>
            <div className="search_buttons">
              <input
                className="submit_buttons"
                type="submit"
                value="Google Search"
                name="submit"
              />
              <input
                className="submit_buttons"
                type="submit"
                value="Google Search"
                name="submit"
              />
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Body;
