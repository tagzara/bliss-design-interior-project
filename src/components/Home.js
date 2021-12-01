const Home = () => {
  
    return (
        <body id="page1">
        <section id="content">
          <div className="bg-top">
            <div className="bg-top-2">
              <div className="bg">
                <div className="bg-top-shadow">
                  <div className="main">
                    <div className="gallery p3">
                      <div className="wrapper indent-bot">
                        <div id="gallery" className="content">
                          <div className="wrapper">
                            <div className="slideshow-container">
                              <div id="slideshow" className="slideshow"></div>
                            </div>
                          </div>
                        </div>
                        <div id="thumbs" className="navigation">
                          <ul className="thumbs noscript">
                            <li> <a className="thumb" href="images/gallery-img1.jpg"> <img src="images/thumb-1.jpg" alt="" /><span></span> </a> </li>
                            <li> <a className="thumb" href="images/gallery-img2.jpg"> <img src="images/thumb-2.jpg" alt="" /> <span></span></a> </li>
                            <li> <a className="thumb" href="images/gallery-img3.jpg"> <img src="images/thumb-3.jpg" alt="" /> <span></span></a> </li>
                            <li> <a className="thumb" href="images/gallery-img4.jpg"> <img src="images/thumb-4.jpg" alt="" /> <span></span></a> </li>
                            <li> <a className="thumb" href="images/gallery-img5.jpg"> <img src="images/thumb-5.jpg" alt="" /> <span></span></a> </li>
                            <li> <a className="thumb" href="images/gallery-img6.jpg"> <img src="images/thumb-6.jpg" alt="" /> <span></span></a> </li>
                          </ul>
                        </div>
                      </div>
                      <div className="inner">
                        <div className="wrapper"> <span className="title img-indent3">HELLO!</span>
                          <div className="extra-wrap indent-top2"> <strong>Interior Design</strong> is one of free website templates created by TemplateMonster.com team. This website template is opti mized for 1024X768 screen resolution. It is also XHTML &amp; CSS valid. It has several pages: <a className="color-3" href="index.html">About</a>, <a className="color-3" href="services.html">Services</a>, <a className="color-3" href="catalogue.html">Catalogue</a>, <a className="color-3" href="pricing.html">Pricing</a>, <a className="color-3" href="contacts.html">Contact Us</a> (note that contact us form – doesn’t work). </div>
                        </div>
                      </div>
                    </div>
                    <div className="container_12">
                      <div className="wrapper">
                        <article className="grid_12">
                          <h3 className="color-1">Our Services List</h3>
                          <div className="wrapper">
                            <article className="grid_6 alpha">
                              <figure className="img-indent frame"><img src="images/page1-img1.jpg" alt="" /></figure>
                              <div className="extra-wrap">
                                <div className="indent-top">
                                  <ul className="list-1">
                                    <li><a href="#">Interior Decorating Services</a></li>
                                    <li className="last"><a href="#">Complete Color <br />
                                      Analysis</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="clear"></div>
                            </article>
                            <article className="grid_6 omega">
                              <figure className="img-indent frame"><img src="images/page1-img2.jpg" alt="" /></figure>
                              <div className="extra-wrap">
                                <div className="indent-top">
                                  <ul className="list-1">
                                    <li><a href="#">Design Services <br />
                                      for Home Construction</a></li>
                                    <li className="last"><a href="#">Interior Design Remodeling</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="clear"></div>
                            </article>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-bot">
            <div className="main">
              <div className="container_12">
                <div className="wrapper">
                  <article className="grid_4">
                    <h3 className="prev-indent-bot">About Us</h3>
                    <p className="prev-indent-bot">This Interior Design Template goes with two pack ages: with PSD source files and without them.</p>
                    PSD source files are available for free for the registered members of Templates.com. The basic package (without PSD source) is available for anyone without registration. </article>
                  <article className="grid_4">
                    <h3 className="prev-indent-bot">Testimonials</h3>
                    <div className="quote">
                      <p className="prev-indent-bot">At vero eos et accusamus et iusto odio tium voluptatum deleniti atque corrupti quos<br />
                        dolores et quas molestias excepturi sint occaecati cupiditate.</p>
                      <h5>James Reese</h5>
                      Managing Director </div>
                  </article>
                  <article className="grid_4">
                    <h3 className="prev-indent-bot">What’s New?</h3>
                    <time className="tdate-1" datetime="2011-08-15"><a className="link" href="#">15.08.2011</a></time>
                    <p className="prev-indent-bot">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                    <time className="tdate-1" datetime="2011-08-11"><a className="link" href="#">11.08.2011</a></time>
                    Totam rem aperiam, eaque ipsa quae ab illo inven tore veritatis et quasi architecto. </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    )
}

export default Home;