import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.infoIp = env.INFO_IP || 'localhost';
    this.overviewIp = env.OVERVIEW_IP || 'localhost';
    this.galleryS3 = env.GALLERY_S3 || 'localhost:3003';
    this.reviewIp = env.REVIEW_IP || 'localhost';
  }

  loadScript(ipname, param) {
    const script = document.createElement("script");
    script.src = `http://${ipname}${param}`;
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidMount () {
    this.loadScript(this.infoIp, ':3001/information.js');
    this.loadScript(this.overviewIp, ':3002/overview.js');
    this.loadScript(this.galleryS3, '/gallery.js');
    this.loadScript(this.reviewIp, ':3004/customerreviews.js');
  }

  render() {
    return (<>
    <link rel="stylesheet" type="text/css" href={`http://${this.infoIp}:3001/styles.css`} />
    <link rel="stylesheet" type="text/css" href={`http://${this.overviewIp}:3002/stylesheet.css`} />
    <link rel="stylesheet" type="text/css" href={`http://${this.reviewIp}:3004/style.css`} />

    <header id="navbar">
      <nav id="top-nav">
        <div className="nav-logo nav-sprite" />
        <div className="nav-address">
          <span className="nav-sprite nav-loc" />
          <div className="nav-block">
            <span className="nav-line1">Hello</span>
            <span className="nav-line2">Select your address</span>
          </div>
        </div>
        <div className="nav-search">
          <div className="nav-searchbar">
            <span className="search-category">
              All
              <span className="nav-arrow" />
            </span>
            <input type="text" />
            <span className="search-button">
              <span className="nav-sprite" />
            </span>
          </div>
        </div>
        <div className="country">
          <div className="nav-block">
            <span className="nav-line2">
              <br />
              <span className="nav-flag" />
              <span className="nav-arrow" />
            </span>
          </div>
        </div>
        <div className="accountLists">
          <div className="nav-block">
            <span className="nav-line1">Hello, Sign in</span>
            <span className="nav-line2">
              Account &amp; Lists
              <span className="nav-arrow" />
            </span>
          </div>
        </div>
        <div className="returnOrders">
          <div className="nav-block">
            <span className="nav-line1">Returns</span>
            <span className="nav-line2">&amp; Orders</span>
          </div>
        </div>
        <div className="nav-cart">
          <span className="nav-sprite nav-cart-icon">0</span>
          <div className="nav-block">
            <span className="nav-line2"><br />Cart</span>
          </div>
        </div>
      </nav>
      <nav id="categories">
        <li><span className="nav-sprite hm-icon" />All</li>
        <li>Best Sellers</li>
        <li>Customer Service</li>
        <li>Best Sellers</li>
        <li>Prime <span className="nav-arrow" /></li>
        <li>New Releases</li>
        <li>Today's Deals</li>
        <li>Books</li>
        <li>Fashion</li>
        <li>Pharmacy</li>
        <li>Kindle Books</li>
      </nav>
    </header>
    <div id="main">
      <div id="category">
        <a href="#">Movies &amp; TV</a> &gt;
        <a href="#">Movies</a>
      </div>
      <div id="overview">
        <div className="left-col">
          <div id="Gallery" />
        </div>
        <div id="product-overview" />
      </div>
      <div id="information" />
      <div id="reviews" />
    </div>
  </>)
    }
}

export default App;