import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx';
class App extends React.Component {
  constructor (props) {
    super(props);
    this.infoIp = env.INFO_IP || 'localhost:3001';
    this.overviewIp = env.OVERVIEW_IP || 'localhost:3002';
    this.galleryS3 = env.GALLERY_S3 || 'localhost:3003';
    this.reviewIp = env.REVIEW_IP || 'localhost:3004';
  }

  loadScript(ipname, param) {
    const script = document.createElement("script");
    script.src = `${ipname}${param}`;
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidMount () {
    this.loadScript(this.infoIp, '/information.js');
    this.loadScript(this.overviewIp, '/overview.js');
    this.loadScript(this.galleryS3, '/gallery.js');
    this.loadScript(this.reviewIp, '/customerreviews.js');
  }

  render() {
    return (<>
    <link rel="stylesheet" type="text/css" href={`${this.infoIp}/styles.css`} />
    <link rel="stylesheet" type="text/css" href={`${this.overviewIp}/stylesheet.css`} />
    <link rel="stylesheet" type="text/css" href={`${this.reviewIp}/style.css`} />
    <Header />
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
    <Footer />
  </>)
    }
}

export default App;