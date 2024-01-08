import { Grid, GridItem } from "@chakra-ui/react";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"tool tool" "nav-icons main" "footer footer"`,
        lg: `"tool tool tool" "nav-icons explorer main" "footer footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="tool" marginX={1}>
        <ToolBar />
      </GridItem>
      <GridItem area="nav-icons"></GridItem>
    </Grid>
  );
}

export default App;
