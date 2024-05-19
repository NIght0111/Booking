import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error, reFetch } = useFetch(
    "/hotels/countByCity?cities=bhaktapur,kathmandu,lalitpur"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Nyatpola_%26_Bhairav_Temple.jpg/1200px-Nyatpola_%26_Bhairav_Temple.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bhaktapur</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1414752490093-6W1D5IV5FTQXW10IN20I/image-asset.jpeg?format=1000w"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kathmandu</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0FkZgkW8BEZQPtBEoSvMB2wbxTyjHLHKHaQ&s"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lalitpur</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
