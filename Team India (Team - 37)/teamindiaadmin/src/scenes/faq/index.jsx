import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            React is a JavaScript library for building user interfaces. It is
            maintained by Facebook and a community of individual developers and
            companies. React can be used as a base in the development of
            single-page or mobile applications.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is a Hook in React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hooks are functions that let you “hook into” React state and
            lifecycle features from function components. Examples include
            useState and useEffect. Hooks allow you to use state and other React
            features without writing a class.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is JSX?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            JSX stands for JavaScript XML. It allows you to write HTML inside
            JavaScript and place them in the DOM without using functions like
            createElement() or appendChild(). JSX is converted to
            React.createElement() calls by Babel.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are props in React?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Props (short for properties) are a way of passing data from parent
            to child components. They are read-only and should not be modified
            by the child component. Props help make components more reusable by
            making them more dynamic.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is the virtual DOM?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The virtual DOM is a concept implemented by libraries in JavaScript
            on top of actual browser APIs. It is a lightweight copy of the
            actual DOM, allowing React to do efficient updates by comparing the
            new virtual DOM with a pre-update version and applying only the
            necessary changes to the actual DOM.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
