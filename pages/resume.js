import Head from "next/head";
function Curriculum() {
  
  return (
    <div>
      <Head>
        <title>Eduardo Weidenbacher | Programador</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="resume">
        <embed
          src="../pdf/EduardoWeidenbacher.pdf"
          type="application/pdf"
          
        />
      </div>
    </div>
  );
}
export default Curriculum;
