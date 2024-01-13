export default function PageTitle() {
  return (
    <section
      className="page-title-section bg-img cover-background"
      data-background="img/bg/page-title.jpg"
      style={{ backgroundImage: 'url("../../img/bg/page-title.jpg")' }}
    >
      <div className="container">
        <div className="title-info">
          <h1>My Profile</h1>
        </div>
        <div className="breadcrumbs-info">
          <ul className="ps-0">
            <li>
              <a href="home-shop-1.html">Home</a>
            </li>
            <li>
              <a href="#">My Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}