import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as freeSolidIcons from "@fortawesome/free-solid-svg-icons";
import * as freeRegularIcons from "@fortawesome/free-regular-svg-icons";

interface IProps {
  rating: number;
  numReviews: number;
}

const Rating: React.FC<IProps> = ({ rating, numReviews, ...props }) => {
  return (
    <div className="rating">
      {rating >= 1 ? (
        <FontAwesomeIcon
          icon={freeSolidIcons.faStar}
          color="gold"
          fill="true"
          size="sm"
        />
      ) : rating >= 0.5 ? (
        <FontAwesomeIcon
          icon={freeSolidIcons.faStarHalfAlt}
          color="gold"
          size="sm"
        />
      ) : (
        <FontAwesomeIcon
          icon={freeRegularIcons.faStar}
          color="gold"
          size="sm"
        />
      )}
      {rating >= 2 ? (
        <FontAwesomeIcon icon={freeSolidIcons.faStar} color="gold" size="sm" />
      ) : rating >= 1.5 ? (
        <FontAwesomeIcon
          icon={freeSolidIcons.faStarHalfAlt}
          color="gold"
          size="sm"
        />
      ) : (
        <FontAwesomeIcon
          icon={freeRegularIcons.faStar}
          color="gold"
          size="sm"
        />
      )}
      {rating >= 3 ? (
        <FontAwesomeIcon icon={freeSolidIcons.faStar} color="gold" size="sm" />
      ) : rating >= 2.5 ? (
        <FontAwesomeIcon
          icon={freeSolidIcons.faStarHalfAlt}
          color="gold"
          size="sm"
        />
      ) : (
        <FontAwesomeIcon
          icon={freeRegularIcons.faStar}
          color="gold"
          size="sm"
        />
      )}
      {rating >= 4 ? (
        <FontAwesomeIcon icon={freeSolidIcons.faStar} color="gold" size="sm" />
      ) : rating >= 3.5 ? (
        <FontAwesomeIcon
          icon={freeSolidIcons.faStarHalfAlt}
          color="gold"
          size="sm"
        />
      ) : (
        <FontAwesomeIcon
          icon={freeRegularIcons.faStar}
          color="gold"
          size="sm"
        />
      )}
      {rating >= 5 ? (
        <FontAwesomeIcon icon={freeSolidIcons.faStar} color="gold" size="sm" />
      ) : rating >= 4.5 ? (
        <FontAwesomeIcon
          icon={freeSolidIcons.faStarHalfAlt}
          color="gold"
          size="sm"
        />
      ) : (
        <FontAwesomeIcon
          icon={freeRegularIcons.faStar}
          color="gold"
          size="sm"
        />
      )}
    </div>
  );
};
export default Rating;
