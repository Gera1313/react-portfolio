function Contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default Contact; // Export the component