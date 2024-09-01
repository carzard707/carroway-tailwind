import { createRoute } from "@tanstack/react-router";
import { Route } from "../routes/__root";
//@ts-ignore
import TemplatesImg from "../_shared/assets/svg/home/templates.svg";
//@ts-ignore
import EmailImg from "../_shared/assets/svg/home/email.svg";
//@ts-ignore
import LandersImg from "../_shared/assets/svg/home/landers.svg";
//@ts-ignore
import ShareImg from "../_shared/assets/svg/home/share.svg";
//@ts-ignore
import LandersWhiteImg from "../_shared/assets/svg/home/landers-white.svg";
//@ts-ignore
import LockImg from "../_shared/assets/images/lock-tag.png";
//@ts-ignore
import ProfileImg from "../_shared/assets/images/profile.png";
//@ts-ignore
import AdCreativeImg from "../_shared/assets/images/adcreative.png";
//@ts-ignore
import LandingImg from "../_shared/assets/images/landing.png";
import { HomeStyleClassGroup } from "../_shared/style.classes";


const HomePage = () => {
  return (
    <div className={HomeStyleClassGroup.homePageWrapper}>
      <div className={HomeStyleClassGroup.rowSpaceBetween}>
        <div className={HomeStyleClassGroup.row}>
          <div className={HomeStyleClassGroup.buttonNormal}>Back</div>
          <div className={HomeStyleClassGroup.textGradientTopDown}>Brand name</div>
        </div>
        <div className={HomeStyleClassGroup.row}>
          <span className={HomeStyleClassGroup.basicText}>Show:</span>
          <div className={HomeStyleClassGroup.buttonNormal}>
            <div className={HomeStyleClassGroup.row}>
              <img src={TemplatesImg} alt={"Templates"} className={HomeStyleClassGroup.w3h3} />
              <span>Templates</span>
            </div>
          </div>
          <div className={HomeStyleClassGroup.buttonNormal}>
            <div className={HomeStyleClassGroup.row}>
              <img src={EmailImg} alt={"Templates"} className={HomeStyleClassGroup.w3h3} />
              <span>Email</span>
              <img src={LockImg} alt={"Templates"} className={HomeStyleClassGroup.w33h20} />
            </div>
          </div>
          <div className={HomeStyleClassGroup.buttonNormal}>
            <div className={HomeStyleClassGroup.row}>
              <img src={LandersImg} alt={"Templates"} className={HomeStyleClassGroup.w3h3} />
              <span>Landers</span>
              <img src={LockImg} alt={"Templates"} className={HomeStyleClassGroup.w33h20} />
            </div>
          </div>
          <div className={HomeStyleClassGroup.buttonPurple}>
            <div className={HomeStyleClassGroup.row}>
              <img src={LandersWhiteImg} alt={"Templates"} className={HomeStyleClassGroup.w3h3} />
              <span className="text-white">Funnels</span>
              <img src={LockImg} alt={"Templates"} className={HomeStyleClassGroup.w33h20} />
            </div>
          </div>
        </div>
        <div className={HomeStyleClassGroup.row}>
          <div className={HomeStyleClassGroup.buttonNormal}>Save</div>
          <div className={HomeStyleClassGroup.buttonNormal}>Share</div>
        </div>
      </div>
      <hr className={HomeStyleClassGroup.hrStyles} />

      <div className={HomeStyleClassGroup.gridCol2}>
        {Array(4)
          .fill("Board name")
          .map((name, index) => (
            <div key={index} className={HomeStyleClassGroup.columnContainer}>
              <div className={HomeStyleClassGroup.columnContainerHeaderFooter}>
                <div className={HomeStyleClassGroup.rowSpaceBetween}>
                  <div className={HomeStyleClassGroup.row}>
                    <img src={ProfileImg} alt={"Profile"} className={HomeStyleClassGroup.w30h30} />
                    <span className={HomeStyleClassGroup.text600}>Caraway</span>
                  </div>
                  <div className={HomeStyleClassGroup.buttonNormal}>Save Funnel</div>
                </div>
              </div>
              <hr className={HomeStyleClassGroup.mb5} />
              <div className={HomeStyleClassGroup.rowSpaceBetween}>
                <div className={`${HomeStyleClassGroup.ml5mr5} ${HomeStyleClassGroup.column}`}>
                  <span className={HomeStyleClassGroup.lightHeader}>Ad Creative</span>
                  <img src={AdCreativeImg} alt={"Ad Creative"} />
                </div>
                <div className={`${HomeStyleClassGroup.ml5mr5} ${HomeStyleClassGroup.column}`}>
                  <span className={HomeStyleClassGroup.lightHeader}>Landing</span>
                  <img src={LandingImg} alt={"Landing"} />
                </div>
              </div>
              <hr className={HomeStyleClassGroup.mt5} />
              <div className={HomeStyleClassGroup.columnContainerHeaderFooter}>
                <div className={HomeStyleClassGroup.rowEnd}>
                  <div className={HomeStyleClassGroup.buttonNormal}>Request Template</div>
                  <div className={HomeStyleClassGroup.buttonNormal}>View Funnel</div>
                  <div className={HomeStyleClassGroup.buttonNormal}>
                    <img src={ShareImg} alt={"Share"} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
export const homePageRoute = createRoute({
  getParentRoute: () => Route,
  path: "/",
  component: HomePage
});
