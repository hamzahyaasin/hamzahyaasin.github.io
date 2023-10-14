# hamzahyaasin.github.io
<!DOCTYPE html>
<html>
<head>
  <title>My Portfolio</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <section id="home">
    <h1>Welcome to My Portfolio</h1>
    <p>Hi, I'm John Doe. I'm a web developer.</p>
  </section>
  
  <section id="about">
    <h2>About Me</h2>
    <p>I have several years of experience in web development. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </section>
  
  <section id="projects">
    <h2>Projects</h2>
    <ul>
      <li>
        <h3>Project 1</h3>
        <p>Description of project 1.</p>
      </li>
      <li>
        <h3>Project 2</h3>
        <p>Description of project 2.</p>
      </li>
      <li>
        <h3>Project 3</h3>
        <p>Description of project 3.</p>
      </li>
    </ul>
  </section>
  
  <section id="contact">
    <h2>Contact Me</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <input type="submit" value="Send">
    </form>
  </section>
  
  <script src="script.js"></script>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  header {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  section {
    padding: 50px;
  }
  
  #home {
    background-color: #f2f2f2;
  }
  
  #about {
    background-color: #e6e6e6;
  }
  
  #projects {
    background-color: #f2f2f2;
  }
  
  #contact {
    background-color: #e6e6e6;
  }
  
  form label {
    display: block;
    margin-bottom: 5px;
  }
  
  form input,
  form textarea {
    margin-bottom: 10px;
    width: 100%;
  }
  
  form input[type="submit"] {
    background-color: #333;
    color: #fff;
    cursor: pointer;
    padding: 10px;
    border: none;
  }
  
  form input[type="submit"]:hover {
    background-color: #555;
  }
  
