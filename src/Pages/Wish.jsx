import { Link } from "react-router-dom";
function Wish({ wishList, removeFromWishList }) {
  return (
    <>
      <div className="breadcrumb-area section-space--breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="breadcrumb-wrapper">
                <h2 className="page-title">WishList </h2>
                <ul className="breadcrumb-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="active">WishList</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content-wrapper">
        <div className="shopping-cart-area">
          <div className="container">
            {wishList.length !== 0 ? (
              <div className="row">
                <div className="col-lg-12">
                  <div className="cart-table-container">
                    <table className="cart-table">
                      <thead>
                        <tr>
                          <th className="product-name" colSpan={2}>
                            Product
                          </th>
                          <th className="product-price">Price</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishList.map((item, index) => (
                          <tr key={index}>
                            <td className="product-thumbnail">
                              <Link to={`/productDetail/${item.slug}`}>
                                <img
                                  src={item.thumbnail}
                                  className="img-fluid"
                                  alt=""
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link to={`/productDetail/${item.slug}`}>
                                {item.name}
                              </Link>
                            </td>
                            <td className="product-price">
                              <span className="price">${item.price}</span>
                            </td>

                            <td className="product-remove">
                              <a onClick={() => removeFromWishList(item)}>
                                <i className="pe-7s-close" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <h1 className="text-center">İstek Listesi Boş</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wish;
