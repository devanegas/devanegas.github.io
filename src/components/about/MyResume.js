import React from "react";
import Resume from "../../files/Resume_Diego_Vanegas_2020.pdf";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

const AboutPage = props => {
  return (
    <React.Fragment>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.2.228/build/pdf.worker.min.js">
        <div>
          <Viewer fileUrl={Resume} />
        </div>
      </Worker>
    </React.Fragment>
  );
};

export default AboutPage;
