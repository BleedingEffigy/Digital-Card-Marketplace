import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/image-editor"),
  { ssr: false }
);


const CardSmith = () => <DynamicComponentWithNoSSR/>
export default CardSmith;