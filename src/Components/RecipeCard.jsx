import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useRecipe } from "../context/RecipeContext";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ReceipeCard = ({ recipe }) => {
  const { receipeStates, receipeDispatch } = useRecipe();
  const [open, setOpen] = useState(false);
  const handleOpen = (recipe) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [editData, setEditData] = useState({
    name: "",
    cusine: "",
    imageURL: "",
    ingredient: [],
    steps: [],
  });

  const deleteRecipe = (recipeId) => {
    const filteredData = receipeStates?.allRecipes?.filter(
      (rec) => rec.id !== recipeId
    );

    receipeDispatch({ type: "DELETE_RECIPE", payload: filteredData });
  };
  const editRecipe = (recipe) => {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        backgroundColor: "red",
      }}
    >
      <Card sx={{ width: "300px", padding: "8px" }}>
        <div>
          <Button
            startIcon={<ModeEditIcon />}
            onClick={() => handleOpen(recipe)}
          ></Button>

          <Button
            startIcon={<DeleteIcon />}
            onClick={() => deleteRecipe(recipe.id)}
          ></Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TextField
                id="outlined-basic"
                value={editData.name}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                value={editData.cusine}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                value={editData.imageURL}
                variant="outlined"
              />

              <TextField
                id="outlined-basic"
                value={editData.ingredient}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                value={editData.steps}
                variant="outlined"
              />
              <Button onClick={() => editData()}>Update</Button>
            </Box>
          </Modal>
        </div>

        <CardMedia
          component="img"
          height="200px"
          width="200px"
          image={recipe.imageURL}
          alt="Paella dish"
        />
        <CardContent>
          <Typography>{recipe.name}</Typography>
          <Typography>Cusine Type:{recipe.cusine}</Typography>
          <Typography>
            Ingridents:<Link to={`/detail/${recipe.id}`}>See recipe</Link>
          </Typography>
          <Typography>
            Steps: <Link to={`/detail/${recipe.id}`}>See recipe</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
