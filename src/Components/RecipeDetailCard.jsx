import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useRecipe } from "../context/RecipeContext";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

export const ReceipeDetailCard = () => {
  const { recipeId } = useParams();
  const { receipeStates } = useRecipe();
  const navigate = useNavigate();

  const filteredData = receipeStates?.allRecipes?.filter(
    (recipe) => recipe.id === recipeId
  );

  return (
    <Box sx={{ flexDirection: "row", flexWrap: "wrap" }}>
      {filteredData?.map((data) => (
        <Card key={data.id} sx={{ width: "300px" }}>
          <CardMedia
            component="img"
            height="200px"
            width="200px"
            image={data.imageURL}
            alt="Paella dish"
          />
          <CardContent>
            <Typography>{data.name}</Typography>
            <Typography>Cusine Type:{data.cusine}</Typography>
            <List>
              <Typography variant="body1">Ingridents:</Typography>
              {data?.ingredients?.map((ingredient, idx) => (
                <ListItem key={idx}>{ingredient} </ListItem>
              ))}
            </List>
            <List>
              <Typography variant="body1">Steps:</Typography>
              {data?.steps?.map((step, idx) => (
                <ListItem key={idx}>{step}</ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
      <Button onClick={() => navigate("/")}>Back to Home</Button>
    </Box>
  );
};
