import React, { Component } from "react";
import Nav from "../Nav/Nav.jsx";
import ToggleMenu from "../ToggleMenu/ToggleMenu.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
// import Header from "../../pages/Home/Header/Header.jsx";
// import Home from "../../pages/Home/Home.jsx";
import appData from "./appData.json.js";
import Footer from "../Footer/Footer.jsx";
// import Products from "../../pages/Products/Products.jsx";
// import Licenses from "../../pages/Licenses/Licenses.jsx";
// import Contacts from "../../pages/Contacts/Contacts.jsx";
// import Competences from "../../pages/Competences/Competences.jsx";
// import AboutUs from "../../pages/AboutUs/AboutUs.jsx";
// import Page404 from "../../pages/Page404/Page404.jsx";
// import Careers from "../../pages/Careers/Careers.jsx";
// import Vacancy from "../../pages/Careers/Vacancy/Vacancy.jsx";
import Popup from "../Popup/Popup.jsx";

// export function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

class App extends Component {
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
      <>
        {/* <ScrollToTop /> */}
        <Nav list={dataHeader.nav} isMobile={this.state.isMobile} />
        {this.state.isMobile ? (
          <>
            <MobileMenu list={dataHeader.nav} />
          </>
        ) : null}
        <main id="root">
          {/* <Switch>
              <Route>
                <Page404 isMobile={this.state.isMobile} />
              </Route>
            </Switch> */}
          {this.props.children}
          {/* <Component {...pageProps} /> */}
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
    );
  }
}
export default App;
