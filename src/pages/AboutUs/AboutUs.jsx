import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about_us.scss";
import "../Home/pagination.scss";

const AboutUs = ({ isMobile }) => {
  var settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 600,
    dotsClass: "container pagination pagination3"
  };
  var settings3 = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 600,
    dotsClass: "pagination"
  };
  return (
    <article className="page about-us__wrap">
      <div className="about-us__content">
        <h1 className="typography typography--header container">
          <span>| </span>О нас
        </h1>
        {!isMobile && (
          <nav className="branchs_items branchs_items__about container">
            <Link smooth href="#mission">
              <a href="#mission" className="branchs_item">
                Миссия
              </a>
            </Link>
            <Link smooth href="#values">
              <a href="#values" className="branchs_item">
                Ценности
              </a>
            </Link>
            <Link smooth href="#office">
              <a href="#values" className="branchs_item">
                Офис
              </a>
            </Link>
          </nav>
        )}
        <section className="about-us__items">
          {/* 1 */}
          <div className="about-us__item container about-us__item-1">
            <h2>
              Мы – высокотехнологичная компания
              <br /> с многолетним опытом работы
              <br /> на рынке ИТ и телекоммуникаций.
            </h2>
            <p className="description">
              Наша история началась несколько лет назад с небольшой команды
              разработчиков и инженеров. Сегодня у нас большое сообщество
              единомышленников и профессионалов, которые создают самые передовые
              технологии для медиа-индустрии и решают сложнейшие задачи
              видеоаналитики, оптимизации и анализа Big Data. Мы всегда
              стремимся вперед, предвосхищая развитие индустрии и помогая людям
              получать максимальное удовольствие от вселенной развлекательного
              контента. Uma.Tech - оператор связи, имеет лицензию оператора
              персональных данных.
            </p>
            <div className="item-1__branchs">
              <span>HIGHLOAD</span>
              <span>|</span>
              <span>УПРАВЛЕНИЕ IT-ИНФРАСТРУКТУРОЙ</span>
              <span>|</span>
              <span>МАШИННОЕ ОБУЧЕНИЕ</span>
              <span>|</span>
            </div>
          </div>
          {/* 2 */}
          <div
            id="mission"
            className="about-us__item about-us__item-2 about-us__item--blue"
          >
            <h2>Наша миссия</h2>
            {!isMobile && (
              <div className="branchs container">
                <div className="branch">
                  <div className="title">
                    Мы строим цифровую экономику новой России,
                  </div>
                  <div className="description">
                    создавая решения и поставляя сервисы для заказчиков и
                    структур из разных сфер деятельности. Среди наших реальных и
                    потенциальных клиентов – государственные предприятия и
                    частные компании, разного размера и из различной
                    специализации, применяющие современные технологии и
                    реализующие «цифровую трансформацию» своей деятельности.
                  </div>
                </div>
                <div className="branch">
                  <div className="title">
                    Наша инфраструктура охватывает все экономически активные
                    регионы страны:
                  </div>
                  <div className="description">
                    дата-центры позволяют работать с огромными объемами данных,
                    коммуникационные каналы – получать скоростной доступ к
                    современному цифровому контенту, включая самые тяжелые его
                    разновидности.
                  </div>
                </div>
                <div className="branch">
                  <div className="title">
                    Мы умеем создавать цифровые решения,
                  </div>
                  <div className="description">
                    способные развивать бизнес-процессы наших клиентов,
                    поднимать на новый уровень эффективность основной их
                    деятельности. Наша квалификация позволяет клиентам
                    радикально изменять производство, внедрять инновационные
                    технологии в управление, маркетинг и продажи.
                  </div>
                </div>
              </div>
            )}
            {isMobile && (
              <div className="branchs container">
                <Slider {...settings3} className="about-us__slider">
                  <div className="branch">
                    <div className="title">
                      Мы строим цифровую экономику новой России,
                    </div>
                    <div className="description">
                      создавая решения и поставляя сервисы для заказчиков и
                      структур из разных сфер деятельности. Среди наших реальных
                      и потенциальных клиентов – государственные предприятия и
                      частные компании, разного размера и из различной
                      специализации, применяющие современные технологии и
                      реализующие «цифровую трансформацию» своей деятельности.
                    </div>
                  </div>
                  <div className="branch">
                    <div className="title">
                      Наша инфраструктура охватывает все экономически активные
                      регионы страны:
                    </div>
                    <div className="description">
                      дата-центры позволяют работать с огромными объемами
                      данных, коммуникационные каналы – получать скоростной
                      доступ к современному цифровому контенту, включая самые
                      тяжелые его разновидности.
                    </div>
                  </div>
                  <div className="branch">
                    <div className="title">
                      Мы умеем создавать цифровые решения,
                    </div>
                    <div className="description">
                      способные развивать бизнес-процессы наших клиентов,
                      поднимать на новый уровень эффективность основной их
                      деятельности. Наша квалификация позволяет клиентам
                      радикально изменять производство, внедрять инновационные
                      технологии в управление, маркетинг и продажи.
                    </div>
                  </div>
                </Slider>
              </div>
            )}
          </div>
          {/* 3 */}
          <div
            id="values"
            className="about-us__item container about-us__item-3"
          >
            <h2 className="typography typography--header">
              <span>| </span>Ценности
            </h2>
            <p className="description">
              Наши ценности: свобода творчества в развитии цифрового мира,
              самореализация в создании современнейших решений и разработка
              digital-инструментов для расцвета национальной экономики. Мы имеем
              практический опыт разработки сервисов разных масштабов – от
              работающих на маленькие стартапы до обеспечивающих работу компаний
              федерального масштаба.
            </p>
            <div className="col-1">
              <div className="item">
                <span>Наша уникальность</span> в умении проектировать,
                разрабатывать, внедрять, поддерживать и развивать решения,
                работающие под экстремальными нагрузками.
              </div>
              <div className="item">
                <span>Мы можем</span> принимать, хранить и обрабатывать огромные
                объемы данных, превращая «цифровую руду» в информацию, значимую
                для государства и для бизнеса.
              </div>
            </div>
            <div className="col-2">
              <div className="item">
                <span>Наш основной капитал – люди.</span> Команда наших
                сотрудников способна очень быстро и крайне качественно
                создавать, внедрять и развивать сервисы любого уровня сложности.
                Наша стратегия состоит в обеспечении непрерывного
                профессионального роста и личностного развития каждого
                сотрудника в нашей команде, что позволяет нам отвечать вызовам
                любого масштаба и уровня сложности как сейчас, так и в
                перспективе.
              </div>
            </div>
          </div>
          {/* 4 */}
          <div
            id="office"
            className="about-us__item container about-us__item-4"
          >
            <h2 className="typography typography--header">
              <span>| </span>Офис
            </h2>
            <p className="description">
              Наш центральный офис – это олицетворение того, как должно
              выглядеть рабочее пространство инновационной компании. Атмосфера,
              создаваемая внутри офиса, способствует креативным подходам в
              решении сложнейших задач. Просторные помещения, наполненные светом
              и воздухом, стали особенно удобны для работы благодаря правильному
              зонированию и оформлению.
            </p>
          </div>
        </section>
        {!isMobile && (
          <Slider
            {...settings}
            className="slider--full about-us__slider container_big"
          >
            <img src="/images/about_page/slide_1.png" />
            <img src="/images/about_page/slide_2.png" />
            <img src="/images/about_page/slide_3.jpg" />
          </Slider>
        )}
        {isMobile && (
          <Slider {...settings} className="slider--full about-us__slider">
            <img src="/images/about_page/slide_1_mob.png" />
            <img src="/images/about_page/slide_2_mob.png" />
            <img src="/images/about_page/slide_3_mob.jpg" />
          </Slider>
        )}
      </div>
    </article>
  );
};
export default AboutUs;
