//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});



//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//Footer and Navbar

let header = $(`
<nav class="black">
<div class="nav-wrapper container">
    <a href="#!" class="brand-logo"><img src="assets/images/John-Doe1.png"></a>
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>
        <li><a class="white-text" href="experience.html">Experience</a></li>
        <li><a class="white-text" href="projects.html">Projects</a></li>
        <li><a class="white-text" href="research.html">Research</a></li>
        <li><a class="white-text" href="education.html">Education</a></li>
        <!--Toggle for light/dark mode-->
          <li class="toggle-container">
            <input type="checkbox" id="switch" name="theme" /><label for="switch"></label>
          </li>
    </ul>
</div>

</nav>
<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li><a href="index.html">Home</a></li>
<li><a href="experience.html">Experience</a></li>
<li><a href="projects.html">Projects</a></li>
<li><a href="research.html">Research</a></li>
<li><a href="education.html">Education</a></li>
<!--Toggle for light/dark mode-->
<li class="toggle-container side-toggle">
  <input type="checkbox" id="switch" name="theme" /><label for="switch"></label>
</li>
</ul>`);

let footer = $(`
<footer class="webintern-footer">
<div class="webintern-footer-inner">
  <div class="container">
    <div class="row">
      <div class="col-lg-7 col-md-10 pt-5" >
      <div class="col-sm-6 col-md-5"> 
        <a class="webintern-footer-logo" href="#">
          <center><img src="assets/images/John-Doe1.png"style="width: 200px;"/></center>
        </a>
        <div class="simple-text text-center dark padding-sm">
          <p >
            "Develop a passion for learning. If you do, you will never cease to grow."
          </p>
        </div>

<!-- Social media icons for footer -->
<div class="social-icons-footer">
  <a class="social-icon-footer twitter" href="" target="_blank" rel="author">
    <i class="fab fa-twitter"></i>
      </a>
  <a class="social-icon-footer dribbble" href="" target="_blank" rel="author">
    <i class="fab fa-dribbble"></i>
      </a>
  <a class="social-icon-footer linkedin" href="" target="_blank" rel="author">
    <i class="fab fa-linkedin-in"></i>
      </a>
  <a class="social-icon-footer medium" href="" target="_blank" rel="author">
    <i class="fab fa-medium-m"></i>
      </a>
  <a class="social-icon-footer kaggle" href="" target="_blank" rel="author">
    <i class="fab fa-kaggle"></i>
      </a>
  <a class="social-icon-footer github" href="" target="_blank" rel="author">
    <i class="fab fa-github"></i>
      </a>
</div>

        <div class="empty-space xs-25 sm-25"></div>
      </div>
    </div>

      <div class="col-sm-6 col-md-5 pt-5 footer-2">
     
        <!-- footer_title -->
        <h4 class="webintern_footer_title h5">
          <small>Get In Touch</small>
        </h4>
        <!-- TT-SUBSCRIBE -->
      
      <div class="contact-form">
          <form>
              <fieldset class="form-group">
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Name">
              </fieldset>
              <fieldset class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
              </fieldset>
              <fieldset class="form-group">
                  <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
              </fieldset>
              <fieldset class="form-group text-xs-right">
                  <button type="button" class="send-btn btn btn-lg">Send</button>
              </fieldset>
          </form>
      </div>
        <div class="empty-space marg-lg-b30"></div>
      </div>
    </div>
  </div>
</div>
<div class="tt-copy">
  <div class="container col-sm-6">
    <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;"></i></center>
  </div>
</div>
</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

