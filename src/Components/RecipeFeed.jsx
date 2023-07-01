import { useRecipe } from "../context/RecipeContext";
import { ReceipeCard } from "./RecipeCard";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
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

export const NewRecipe = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    cusine: "",
    ingredients: [],
    steps: [],
  });
  return (
    <>
      <Button onClick={() => handleOpen()}>Add new Recipe</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            required
            id="outlined-basic"
            label="Recipe Name"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Recipe Image Link"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Cusine"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Recipe Ingridients"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Recipe Steps"
            variant="outlined"
          />
          <Button>Submit</Button>
        </Box>
      </Modal>
    </>
  );
};

export const RecipeFeed = () => {
  const { receipeStates } = useRecipe();
  console.log(
    "🚀 ~ file: RecipeFeed.jsx:81 ~ RecipeFeed ~ receipeStates:",
    receipeStates
  );

  //   const validateSignUp = () => {
  //     if (
  //       authState.email.trim().length <= 0 ||
  //       authState.password.trim().length <= 0 ||
  //       authState.firstName.trim().length <= 0 ||
  //       authState.lastName.trim().length <= 0
  //     ) {
  //       return toast.error("All details are required");
  //     }
  //     userAuth = "signup";
  //     setUserInfo({
  //       email: authState.email,
  //       password: authState.password,
  //       firstName: authState.firstName,
  //       lastName: authState.lastName,
  //     });
  //   };

  return (
    <div>
      <h1>All Recipe</h1>
      <NewRecipe />
      {receipeStates?.allRecipes?.map((recipe) => (
        <ReceipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};
