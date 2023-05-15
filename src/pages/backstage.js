import SectionOne from "@/components/backstage/sectionOne/sectionOne";
import SectionTwo from "@/components/backstage/sectionTwo";
import dotenv from "dotenv";

const Backstage = ({ data }) => {
  let firstImages = data.slice(0,8);
  let restImages = data.slice(8, data.length);

  return (
    <main>
      <SectionOne backImages={firstImages} />
      <SectionTwo backImages={restImages} />      
    </main>
  );
};

export default Backstage;

export async function getStaticProps() {
  dotenv.config();
  const name = process.env.CLOUD_NAME;
  const key = process.env.CLOUD_KEY;
  const secret = process.env.CLOUD_SECRET;
  let images = [];

  await fetch(
    `https://api.cloudinary.com/v1_1/${name}/resources/image/upload?prefix=Backstage/&max_results=500`,
    {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(`${key}:${secret}`),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let imgBackstage = [];
      data.resources.forEach((el) => {
        imgBackstage.push(el.url);
        return (images = imgBackstage);
      });
    })
    .catch((error) => console.error(error));

  return {
    props: {
      data: images,
    },
  };
}
