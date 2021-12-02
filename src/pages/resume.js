import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Layout from '../components/layout';
import Seo from '../components/seo';
import resume from '../static/ResumeCP.pdf';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Resume" />
      <Document
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        file={resume}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </Layout>
  );
};

export default ResumePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
