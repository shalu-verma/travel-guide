import React, { useState, useEffect } from "react";
import StarRatingComponent from "react-star-rating-component";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Carousel } from "react-bootstrap";
import top_places from "../assets/data/top_places.js";

function Page_Top_Place(props) {
  let [name, setName] = useState("");
  let [review, setReview] = useState("");
  // eslint-disable-next-line no-unused-vars
  let [oldReviews, setOldReviews] = useState([]);
  let [rating, setRating] = useState(0);

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  let title = props.match.params.place;
  let place = title.replace(/[^a-zA-Z ]/g, "");
  let id = place.replace(/\s+/g, "");

  let data = top_places[place];

  // load reviews
  useEffect(() => {
    loadMessages();
  }, [id]);

  // save review to firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setName("");
      setReview("");
    } catch (err) {
      console.log(err);
    }
  };

  // load review messages
  const loadMessages = () => {
    try {
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{ marginTop: "72px", paddingTop: "20px" }}
      >
        <div className="row mx-auto">
          <div className="col-md-8">
            <Carousel>
              {data.slides.map((slide) => {
                return (
                  <Carousel.Item key={Math.random()}>
                    <img
                      src={slide}
                      className="d-block w-100"
                      id="img1"
                      alt="alt"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div
            className="col-md-4 mt-4 mt-md-0 px-4 pt-2"
            id="rating-container"
          >
            <h4 className="text-uppercase">{title}</h4>
            <p>{data.text}</p>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={onStarClick}
            />
          </div>
        </div>
        <div className="row my-5 mx-auto">
          <div className="col-md-6">
            <section className="py-3">
              <iframe
                title="Iframe_Map"
                src={data.map}
                width="100%"
                height="300"
                style={{ border: "0" }}
                aria-hidden="false"
                tabIndex="0"
              >
                Your browser doesn't support Map
              </iframe>
            </section>
          </div>
          <div className="col-md-6">
            <section className="py-3 text-center">
              <iframe
                title="Iframe_3d"
                src={data._3dview}
                width="100%"
                height="300"
                style={{ border: "0" }}
                aria-hidden="false"
                tabIndex="0"
              >
                Your browser doesn't support Map
              </iframe>
            </section>
          </div>
        </div>
      </div>
      <h1 className="header mb-4">Reviews</h1>
      <div id="review-container" className="py-4">
        <div className="container mx-auto">
          {oldReviews &&
            oldReviews.map((review) => (
              <Review key={Math.random()} review={review} />
            ))}
          <div className="row mx-auto">
            <form
              className="col-md-8 mb-3 mx-auto"
              id="review-form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                className="form-control mb-2"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="review"
                className="form-control mb-2"
                placeholder="Review"
                value={review}
                required
                onChange={(e) => setReview(e.target.value)}
              />
              <button className="btn btn-theme btn-block" type="submit">
                Review
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const Review = (props) => {
  let time = props.review.time.split(",")[0];
  return (
    <div className="row no-gutters justify-content-flex-start mt-3 mx-auto">
      <div className="col-md-8 mx-auto px-2">
        <div className=" mr-2">{props.review.name}</div>
        <div className=" my-2 sent">
          <div className="message-content">
            {props.review.review}
            <small className="float-right">{time}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_Top_Place;
