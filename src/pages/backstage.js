// import Image from "next/image";
import SectionOne from "@/components/backstage/sectionOne/sectionOne";
// import backgroundImg from "../../public/backstage.png";
import dotenv from 'dotenv';
import { useState } from "react";


const Backstage = ({data}) => {
  // console.log('data', data)

  const [imagesPerSection, setImagesPerSection] = useState(2);
  const [section, setSection] = useState(1);

  let images = [];
  const sectionQuantity = Math.ceil(data.length/ imagesPerSection);
  
  if(sectionQuantity === 1) {images= data};
  if(sectionQuantity > 1 ){
  for (let i = 1; i<= sectionQuantity ; i++){
     const indexLastImage = imagesPerSection * (i); 
     const indexFirstImage = indexLastImage - imagesPerSection;
     const imagesSlices = data.slice(indexFirstImage, indexLastImage);
     images.push(imagesSlices)
    }
  } else {
    images = data
  }
   
  return (
    <main>
      {images?.map(el => 
      <SectionOne images={el}/>
       )} 
    </main>
  );
};

export default Backstage;

export async function getStaticProps() {
  dotenv.config();
  const name = process.env.CLOUD_NAME;
  const key = process.env.CLOUD_KEY;
  const secret = process.env.CLOUD_SECRET
  let images = []

  await fetch(`https://api.cloudinary.com/v1_1/${name}/resources/image/upload?prefix=Backstage/&max_results=500`, {
      method: 'GET',
      headers: {
          'Authorization': 'Basic ' + btoa(`${key}:${secret}`)
      }
  })
      .then(response => response.json())
      .then((data) => {
       let imgBackstage =[];
 
       data.resources.forEach(el => {
        imgBackstage.push(el.url)
    //  console.log('imgBackstage', imgBackstage)
              return images = imgBackstage;
       });
})         
      .catch(error => console.error(error))

  return {
      props: {
          data: images
      }
  }
}
