import { Grid, GridItem } from "@chakra-ui/react";
import ToolBar from "./components/ToolBar";
import ActivityBar from "./components/ActivityBar";
import Explorer from "./components/Explorer";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"tool tool" "activity main" "footer footer"`,
        lg: `"tool tool tool" "activity explorer main" "footer footer footer"`,
      }}
      templateColumns={{
        base: "60px 1fr",
        lg: "70px 250px 1fr",
      }}
      templateRows="auto 1fr auto"
      height="100vh"
    >
      <GridItem area="tool" marginX={2} marginTop={2}>
        <ToolBar />
      </GridItem>
      <GridItem area="activity" marginTop={2} height="100%">
        <ActivityBar />
      </GridItem>
      <GridItem area="explorer" height="100%">
        <Explorer />
      </GridItem>
      <GridItem area="footer" marginX="2px">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
