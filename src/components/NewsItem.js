const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source}) => {
    const imgUrl = "https://cdn.wccftech.com/wp-content/uploads/2021/12/xcyDFMVt7v9FzyMgCUa8e4-1024-80.jpg.webp";
  return (
      
    <div className="my-3">
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" 
        style={{left: '90%', zIndex: '1'}}>
            {source}
        </span>
        <img src={imageUrl? imageUrl: imgUrl} 
        className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description} </p>
          <p className="card-text">
            <small className="text-muted">
              By {author} On {new Date(date).toString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;