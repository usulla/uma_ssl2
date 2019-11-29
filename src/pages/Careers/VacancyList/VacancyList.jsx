import React, { Component } from "react";
import Link from "next/link";

class VacancyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      vacancies: []
    };
  }
  componentDidMount() {
    const url = "https://uma.tech/api/vacancies";
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            vacancies: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { error, isLoaded, vacancies } = this.state;
    const title = this.props.title;
    if (error) {
      return <div>Что-то пошло не так: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="vacancies__content container">
          <h2 className="typography--vacanciessm">{title}</h2>
          <div className="dropdowns__panel">
            {vacancies.map(vacancy => {
              return (
                <Link
                  href="/careers/[id]"
                  as={`/careers/${vacancy.id}`}
                  key={vacancy.id}
                >
                  <a className="row__link">
                    <div className="row">
                      <div className="row__left">
                        {vacancy.profession}
                        <br /> <span>{vacancy.city}</span>
                      </div>
                      <div className="row__right">
                        <div className="arrow">
                          <div className="arrow__top"></div>
                          <div className="arrow__bottom"></div>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default VacancyList;
