import { Grid, GridItem } from "@chakra-ui/react";
import ToolBar from "./components/ToolBar";
import ActivityBar from "./components/ActivityBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"tool tool" "activity main" "footer footer"`,
        lg: `"tool tool tool" "activity explorer main" "footer footer footer"`,
      }}
      templateColumns={{
        base: "60px 1fr",
        lg: "60px 200px 1fr",
      }}
      templateRows="auto 1fr auto" // Set the grid template rows
      height="100vh"
    >
      <GridItem area="tool" marginX={2} marginTop={2}>
        <ToolBar />
      </GridItem>
      <GridItem area="activity" marginTop={2} height="100%">
        <ActivityBar />
      </GridItem>
    </Grid>
  );
}

export default App;
