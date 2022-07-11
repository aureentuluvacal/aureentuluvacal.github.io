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

  function onPrev() {
    if (pageNumber !== 1) {
      setPageNumber(1);
    }
  }

  function onNext() {
    if (pageNumber !== 2) {
      setPageNumber(2);
    }
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
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <span
          style={{ cursor: 'pointer' }}
          onClick={onPrev}
          role="button"
          tabIndex={-1}
          onKeyDown={event => {
            if (event.key === 13) {
              onPrev();
            }
          }}
        >
          ←
        </span>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <span
          style={{ cursor: 'pointer' }}
          onClick={onNext}
          role="button"
          tabIndex={-1}
          onKeyDown={event => {
            if (event.key === 13) {
              onNext();
            }
          }}
        >
          →
        </span>
      </div>
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
