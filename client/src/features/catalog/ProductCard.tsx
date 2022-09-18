import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Product } from "../../app/models/Product";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [loading, setLoading] = useState(false);
  const { setBasket } = useStoreContext();

  function handleAddItem(productId : number) {
    setLoading(true);
    agent.Basket.addItem(productId)
    .then((basket)=>setBasket(basket))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  }

  return (
    <>
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {product.name.at(0)?.toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={product.pictureUrl}
          subheader={product.name}
        />
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          sx={{ bgcolor: "#f4f6fc" }}
          image={product.pictureUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <LoadingButton size="small" loading={loading} onClick={() => handleAddItem(product.id)}>
            Add to Cart
          </LoadingButton>
          <Button size="small" component={Link} to={`/catalog/${product.id}`}>
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
