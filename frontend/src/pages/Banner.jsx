const Banner = ({ images, speed = 20000 }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms`, display:'flex'}}>
          {images.map(({ id, image }) => (
            <div className="image" key={id} style={{display:'flex'}}>
              <img src={image} alt={id} className="inline-block h-auto max-w-md mr-2"/>
            </div>
          ))}
        </section>
        {/* <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </section> */}
      </div>
    </div>
  );
};

export { Banner };
