import { useRecipe } from "../context/RecipeContext";
import { ReceipeCard } from "./RecipeCard";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";

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
  const { receipeDispatch } = useRecipe();
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    cusine: "",
    imageURL: "",
    ingredients: [],
    steps: [],
  });
  const addNewRecipe = () => {
    const tempRecipe = { ...newRecipe, id: uuidv4() };
    console.log("tempHab", tempRecipe);
    setNewRecipe(tempRecipe);
    receipeDispatch({ type: "ADD_NEW", payload: tempRecipe });
  };
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
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, name: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-basic"
            label="Recipe Image Link"
            variant="outlined"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, imageURL: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-basic"
            label="Cusine"
            variant="outlined"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, cusine: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-basic"
            label="Recipe Ingridients"
            variant="outlined"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, ingredients: e.target.value })
            }
          />
          <TextField
            required
            id="outlined-basic"
            label="Recipe Steps"
            variant="outlined"
            onChange={(e) =>
              setNewRecipe({ ...newRecipe, steps: e.target.value })
            }
          />
          <Button onClick={() => addNewRecipe()}>Submit</Button>
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
