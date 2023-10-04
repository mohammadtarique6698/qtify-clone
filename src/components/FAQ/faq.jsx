import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faq.css";

export default function BasicAccordion() {
  return (
    <div className="faq">
      <div className="heading">
        <h1>FAQs</h1>
      </div>
      <Accordion
        sx={{
          borderRadius: "0.5rem",
          marginBottom: "0.5rem",
          backgroundColor: "var(--black-color)",
          border: "2px solid var(--white-color)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "var(--primary-color)" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              color: "var(--white-color)",
              padding: "1rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            }}
          >
            Is Qtify free to use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "var(--black-color)",
            backgroundColor: "var(--white-color)",
          }}
        >
          <Typography
            sx={{
              padding: "1rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            }}
          >
            Yes Qtify is free for use.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          borderRadius: "0.5rem",
          marginBottom: "0.5rem",
          backgroundColor: "var(--black-color)",
          border: "2px solid var(--white-color)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "var(--primary-color)" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{
              color: "var(--white-color)",
              padding: "1rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            }}
          >
            Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "var(--black-color)",
            backgroundColor: "var(--white-color)",
          }}
        >
          <Typography
            sx={{
              padding: "1rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            }}
          >
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
