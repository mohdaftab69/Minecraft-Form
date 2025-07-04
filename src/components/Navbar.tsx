function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Form</div>
      <div>
        <label htmlFor="#">Search</label>
        <input type="search" />
      </div>
      <div className="label">
        <ul>
          <li>home</li>
          <li>about</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
