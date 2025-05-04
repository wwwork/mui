import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function AccordionDemo() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    if (isExpanded) {
      setExpanded(isExpanded ? panel : false);
    } else {
    }
  };
  return (
    <Paper elevation={4}>
      <Box>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMore />}
          >
            <Typography>Accordion summary 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique minima quae, nihil sunt animi, ex veniam aliquam quo
              veritatis, vero eius eos quaerat quibusdam soluta culpa beatae
              aspernatur suscipit officia?
            </Typography>
            ?
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMore />}
          >
            <Typography>Accordion summary 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique minima quae, nihil sunt animi, ex veniam aliquam quo
              veritatis, vero eius eos quaerat quibusdam soluta culpa beatae
              aspernatur suscipit officia?
            </Typography>
            ?
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMore />}
          >
            <Typography>Accordion summary 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique minima quae, nihil sunt animi, ex veniam aliquam quo
              veritatis, vero eius eos quaerat quibusdam soluta culpa beatae
              aspernatur suscipit officia?
            </Typography>
            ?
          </AccordionDetails>
        </Accordion>
      </Box>
    </Paper>
  );
}
