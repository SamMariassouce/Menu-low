const MenuItem = ({ img, title, loc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <span className="item-price">{loc}</span>
          <h5>{title}</h5>
        </header>
      </div>
    </article>
  );
};
export default MenuItem;
