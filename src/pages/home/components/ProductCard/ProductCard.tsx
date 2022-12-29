import { IProduct } from "interfaces";

const ProductCard = (props: { product: IProduct }) => {
  return (
    <div className="card my-3 mx-1 border-0">
      <div style={{ height: "10rem", backgroundColor: "#f5f5f5" }}>
        <img
          src={props.product.image}
          className="card-img-top"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "scale-down",
          }}
          alt=""
        />
      </div>

      <div className="card-body p-1 mt-2 mb-3">
        <div
          className="text-truncate fs-6 text-dark"
          style={{ fontWeight: "bold" }}
        >
          {props.product.title}
        </div>
        <div className="fw-light text-secondary mt-1">
          ${props.product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
