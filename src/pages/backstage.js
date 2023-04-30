import Image from "next/image";
import SectionOne from "@/components/backstage/sectionOne/sectionOne";
import backgroundImg from "../../public/backstage.png";

const Backstage = () => {
  return (
    <main 
    style={{ display: "flex", alignItems: "center" }}
    >
      {/* <div> */}
        <SectionOne />
      {/* </div> */}
      {/* <Image
        src={backgroundImg}
        width={100}
        height={"auto"}
        style={{ opacity: "0.5", margin: "3rem" }}
      /> */}
    </main>
  );
};

export default Backstage;
