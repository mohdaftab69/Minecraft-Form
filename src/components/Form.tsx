import React from "react";

const Form = () => {
  return (

    <div className="container"><br />
        
        <div className="inner-container">
        
        <form className="form1" action="#">
          <fieldset>
            <legend>Payer Inromation</legend> <br />
            <label>Profile Upload</label>
            <input type="file" />
            <label>First Name</label>
            <input type="text" placeholder="enter your first name" />
            <label>Last Name</label>
            <input type="text" placeholder="enter your last name" />
            <label>email</label>
            <input type="email" placeholder="@gmail.com" />
            <label>Last Name</label>
            <input type="password" placeholder="create a password" />
            <label>mobile</label>
            <input type="tel" placeholder="+91" min="10" max="10" />
            <label>Fav color</label>
            <input type="color" placeholder="chose"  />
            <label>Gender</label>
            <div className="gender">
              <label>Male</label>
              <input type="radio" name="gender" id="male" />
              <label>female</label>
              <input type="radio" name="gender" id="female" />
            </div>
            <div className="age">
              <label>Age</label>
              <input type="date" name="" id="" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Hobbies</legend>
            <div className="hobbies">
              <label>Programing </label>
              <input type="checkbox" />
            </div>
            <div className="hobbies">
              <label>Reading books </label>
              <input type="checkbox" />
            </div>
            <div className="hobbies">
              <label>Gaming </label>
              <input type="checkbox" />
            </div>
            <div className="hobies">
              <label>listening music </label>
              <input type="checkbox" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Links</legend>
            <div>
              <label htmlFor="#">
                {" "}
                <img className="links" src="/instagram.png" alt="" />
              </label>
              <input
                style={{ display: "flex", gap: "20px" }}
                placeholder="enter url"
                type="url"
              />
            </div>
            <div>
              <label htmlFor="#">
                {" "}
                <img className="links" src="/youtube.png" alt="" />
              </label>
              <input
                style={{ display: "flex", gap: "20px" }}
                placeholder="enter url"
                type="url"
              />
            </div>
            <div>
              <label htmlFor="#">
                {" "}
                <img className="links" src="facebook.png" alt="" />
              </label>
              <input
                style={{ display: "flex", gap: "20px" }}
                placeholder="enter url"
                type="url"
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Rank Slider</legend>
            <div className="rankslider">
                <label htmlFor="#">Your rank</label>
                <input type="range" min="1" max="10"/>
            </div>
          </fieldset>
          <input type="submit"/>
          <input type="reset" />
        </form>
       
        
      </div>
      
    </div>
    
  );
};

export default Form;
