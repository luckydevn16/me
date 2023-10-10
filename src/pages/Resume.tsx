import { Document, Page } from "react-pdf"

import ResumePDF from "./resume.pdf"

export default function Resume() {
  return (
    <div className="container p-8 mx-auto">
      <Document file={ResumePDF}>
        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={1000} />
        <Page pageNumber={2} renderTextLayer={false} renderAnnotationLayer={false} width={1000} />
      </Document>
    </div>
  )
}
