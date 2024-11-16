import "./TitlePage.css";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import cafeSVG from "../../assets/CaffeLogo.png";

function TitlePage() {
  return (
    <div className="titlePage">
      <div className="navbarContainer">
        <div className="cafeLogo">
          <img className="cafeSVG" src={cafeSVG} />
          <div className="cafeLogoName">Place Groups</div>
        </div>
        <div className="cafeNav">
          <div className="cafeNavItem">Reservation</div>
          <div className="cafeNavItem">Menu</div>
          <div className="cafeNavItem">About</div>
        </div>
      </div>
      <div className="cafeBody">
        <div className="cafeName">
          <h1 id="titlePlaceholder">
            Placeholder <br /> Cafe
          </h1>
        </div>
      </div>
      <div className="cafeFooter">
        <div className="infoFooter">
          <div className="leftFooter">
            <div className="openingHour">
              <div id="weekDays" className="textContainer">
                <div className="daysContainer">Monday-Thursday</div>
                <div className="hourContainer">09.00-21.00</div>
              </div>
              <div id="weekEnds" className="textContainer">
                <div className="daysContainer">Friday-Sunday</div>
                <div className="hourContainer">09.00-21.00</div>
              </div>
            </div>
          </div>
          <div className="rightFooter">
            <div className="paragraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </div>
          </div>
        </div>
        <div className="scrollDownArrow">
          <MdKeyboardDoubleArrowDown
            style={{ height: "100%", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default TitlePage;
