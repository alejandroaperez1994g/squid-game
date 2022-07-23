import Skeleton from "@mui/material/Skeleton";
import "./SkeletonProduct.css";

const SkeletonProduct = () => {
  return (
    <div className="skeleton">
      <Skeleton
        animation="wave"
        variant="circular"
        width={40}
        height={40}
        style={{ marginBottom: "1rem" }}
      />
      <Skeleton variant="rectangular" height="50%" />
      <Skeleton animation="wave" height={10} style={{ margin: "1rem 0" }} />
      <Skeleton animation="wave" height={10} width="80%" />
      <div className="skeleton__bottom">
        <Skeleton animation="wave" width="40%" height="40%" />
        <Skeleton animation="wave" width="40%" height="40%" />
      </div>
    </div>
  );
};

export default SkeletonProduct;
