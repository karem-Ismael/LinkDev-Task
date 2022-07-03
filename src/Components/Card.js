import * as React from "react";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {FaRegHeart} from "react-icons/fa"
import DateRangeIcon from "@mui/icons-material/DateRange";

export default function CardComponent({ item, CatergoryName }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 mt-2 mb-3">
      <Card className="card shadow" style={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="194"
          image={item.urlToImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.title}
          </Typography>
        </CardContent>
        <div className="time">
          <DateRangeIcon />
          <span>{item.publishedDate}</span>
        </div>
        <CardActions disableSpacing className="action-div">
          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              padding: "10px 0px",
            }}
          >
            <p
              style={{
                background: "#74747433",
                padding: "0px 10px",
                color: "#5E6282",
                width: "114px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              {CatergoryName[0]?.name}
            </p>
          </div>
          <div style={{ position: "absolute", right: 0 }}>
            <IconButton aria-label="add to favorites">
              <FaRegHeart/>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
