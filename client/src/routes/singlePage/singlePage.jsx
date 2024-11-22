import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummyData";

function SinglePage() {
  return (
    <div className="singlePage">
      {/* Left Side Images and Post Summary */}
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              {/* Property Data */}
              <div className="post">
                <h1>{singlePostData.title}</h1>

                {/* Post Address */}
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>

                {/* Post Price */}
                <div className="price">${singlePostData.price}</div>
              </div>

              {/* User Data - Property Owner */}
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>

            {/* Property Description */}
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      {/* Right Side Information Panel */}
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default SinglePage;
