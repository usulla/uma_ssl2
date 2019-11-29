import React from "react";
import App from "next/app";
import Nav from "../components/Nav/Nav.jsx";
import ToggleMenu from "../components/ToggleMenu/ToggleMenu.jsx";
import MobileMenu from "../components/MobileMenu/MobileMenu.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Popup from "../components/Popup/Popup.jsx";
import appData from "../static/appData.json";

// export function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }
class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="layout4">{children}</div>;
  }
}

export default class MyApp extends App {
  constructor(props) {
    super();
    this.state = {
      isMobile: false,
      scrollPoint: false,
      showPopup: false,
      popupData: {}
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handlePopupShowChange = this.handlePopupShowChange.bind(this);
  }
  handlePopupShowChange(showPopup, popupData) {
    this.setState({
      showPopup: showPopup,
      popupData: popupData
    });
    document.documentElement.classList.toggle("hidden");
  }
  handleScroll(event) {
    var scrollTop;
    scrollTop = document.documentElement.scrollTop;
    if (!this.state.scrollPoint) {
      if (scrollTop > 90) {
        this.setState({ scrollPoint: true });
        document.querySelector(".menu").classList.add("active");
      }
    }
    if (scrollTop <= 90) {
      if (document.querySelector(".menu").classList.contains("active")) {
        document.querySelector(".menu").classList.remove("active");
        this.setState({ scrollPoint: false });
      }
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillMount() {
    // this.resize();
    // window.removeEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }
  resize() {
    this.setState({ isMobile: window.innerWidth <= 767 });
  }
  render() {
    const { Component, pageProps } = this.props;
    const { dataHeader, dataPopupCookie, dataPopupVacancies } = appData;
    return (
      <Layout>
        <>
          {/* <ScrollToTop /> */}
          <Nav list={dataHeader.nav} isMobile={this.state.isMobile} />
          {this.state.isMobile ? (
            <>
              <MobileMenu list={dataHeader.nav} />
            </>
          ) : null}
          <main id="root">
            <Component {...pageProps} />
            {/* <Switch>
              <Route>
                <Page404 isMobile={this.state.isMobile} />
              </Route>
            </Switch> */}
          </main>
          <Footer
            list={dataHeader.nav}
            dataPopupCookie={dataPopupCookie}
            onPopupShowChange={this.handlePopupShowChange}
          />
          {this.state.showPopup ? (
            <>
              <Popup
                onPopupShowChange={this.handlePopupShowChange}
                popupData={this.state.popupData}
              />
            </>
          ) : null}
        </>
      </Layout>
    );
  }
}
